/**
 * Interactive Cost Estimator View & Real-time Calculations Controller
 */

import {
  CostEstimatorEngine,
  EstimatorInput,
  EstimatorResult,
  FINISHING_TIERS,
  AVAILABLE_ADDONS,
  CITY_FACTORS
} from '../engine/cost-calculator';
import { i18n } from './i18n';
import { audioEngine } from '../engine/audio';
import { MotionFX } from '../engine/motion-fx';

export class CalculatorView {
  private container: HTMLElement;
  private currentInput: EstimatorInput = {
    landArea: 650,
    footprintRatio: 0.60,
    hasBasement: false,
    hasGroundFloor: true,
    hasFirstFloor: true,
    hasPenthouseAnnex: true,
    finishingTier: 'royal',
    selectedAddOns: ['knx_smart_home', 'hydraulic_elevator'],
    city: 'riyadh'
  };
  private onGenerateBOQCallback: (result: EstimatorResult) => void;
  private onSaveEstimateCallback: (result: EstimatorResult) => void;
  private lastResult: EstimatorResult | null = null;

  constructor(
    containerId: string,
    onGenerateBOQ: (result: EstimatorResult) => void,
    onSaveEstimate: (result: EstimatorResult) => void
  ) {
    const el = document.getElementById(containerId);
    if (!el) throw new Error(`Container #${containerId} not found`);
    this.container = el;
    this.onGenerateBOQCallback = onGenerateBOQ;
    this.onSaveEstimateCallback = onSaveEstimate;

    i18n.subscribe(() => {
      this.render();
      this.bindEvents();
    });
  }

  public init() {
    this.render();
    this.bindEvents();
    this.recalculate();
  }

  public setInput(newInput: Partial<EstimatorInput>) {
    this.currentInput = { ...this.currentInput, ...newInput };
    this.render();
    this.bindEvents();
    this.recalculate();
  }

  public getLastResult(): EstimatorResult | null {
    return this.lastResult;
  }

  private render() {
    const isAr = i18n.getLang() === 'ar';

    this.container.innerHTML = `
      <div class="calculator-grid" style="display: grid; grid-template-columns: 1fr; gap: 32px;">
        
        <!-- Top Controls Panel (Bento Inputs) -->
        <div class="glass-panel" style="padding: 32px; border-radius: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 16px;">
            <div>
              <span class="badge badge-gold" style="margin-bottom: 8px;">
                <span>📐</span> ${isAr ? 'حاسبة كود البناء السعودي SBC' : 'SBC Saudi Building Code Estimator'}
              </span>
              <h2 style="font-size: 1.6rem; font-weight: 800;">${i18n.t('estimatorTitle')}</h2>
              <p style="color: var(--text-secondary); font-size: 0.95rem;">${i18n.t('estimatorSubtitle')}</p>
            </div>
            
            <!-- City Selection -->
            <div style="display: flex; align-items: center; gap: 10px;">
              <label for="city-select" style="font-weight: 600; font-size: 0.9rem; color: var(--text-secondary);">${i18n.t('citySelectLabel')}</label>
              <select id="city-select" style="padding: 10px 16px; border-radius: 12px; background: var(--bg-secondary); border: 1px solid var(--border-medium); color: var(--text-primary); font-family: inherit; font-size: 0.9rem; outline: none; cursor: pointer;">
                ${Object.entries(CITY_FACTORS).map(([key, data]) => `
                  <option value="${key}" ${this.currentInput.city === key ? 'selected' : ''}>
                    ${isAr ? data.nameAr : data.nameEn}
                  </option>
                `).join('')}
              </select>
            </div>
          </div>

          <!-- Slider Inputs Row -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 28px;">
            
            <!-- Land Area Slider -->
            <div style="background: var(--bg-secondary); padding: 20px; border-radius: 18px; border: 1px solid var(--border-subtle);">
              <div style="display: flex; justify-content: space-between; margin-bottom: 12px; align-items: center;">
                <span style="font-weight: 600; color: var(--text-primary); font-size: 0.95rem;">${i18n.t('landAreaLabel')}</span>
                <span id="land-area-val" class="font-mono" style="font-size: 1.25rem; font-weight: 700; color: var(--accent-gold);">
                  ${this.currentInput.landArea} م²
                </span>
              </div>
              <input type="range" id="land-area-range" class="custom-range" min="300" max="2500" step="25" value="${this.currentInput.landArea}">
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-top: 8px;">
                <span>300 م²</span>
                <span>1,200 م²</span>
                <span>2,500 م²</span>
              </div>
            </div>

            <!-- Footprint Ratio Slider -->
            <div style="background: var(--bg-secondary); padding: 20px; border-radius: 18px; border: 1px solid var(--border-subtle);">
              <div style="display: flex; justify-content: space-between; margin-bottom: 12px; align-items: center;">
                <span style="font-weight: 600; color: var(--text-primary); font-size: 0.95rem;">${i18n.t('footprintLabel')}</span>
                <span id="footprint-val" class="font-mono" style="font-size: 1.25rem; font-weight: 700; color: var(--accent-cyan);">
                  ${Math.round(this.currentInput.footprintRatio * 100)}%
                </span>
              </div>
              <input type="range" id="footprint-range" class="custom-range" min="45" max="75" step="1" value="${Math.round(this.currentInput.footprintRatio * 100)}">
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-top: 8px;">
                <span>45% (حدائق واسعة)</span>
                <span>60% (متوسط الكود)</span>
                <span>75% (استغلال أقصى)</span>
              </div>
            </div>

            <!-- Floors Configuration Checkboxes -->
            <div style="background: var(--bg-secondary); padding: 20px; border-radius: 18px; border: 1px solid var(--border-subtle);">
              <div style="margin-bottom: 12px; font-weight: 600; color: var(--text-primary); font-size: 0.95rem;">${i18n.t('floorsConfigLabel')}</div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.88rem;">
                  <input type="checkbox" id="chk-basement" ${this.currentInput.hasBasement ? 'checked' : ''} style="accent-color: var(--accent-gold); width: 17px; height: 17px;">
                  <span>${i18n.t('floorBasement')}</span>
                </label>

                <label style="display: flex; align-items: center; gap: 8px; font-size: 0.88rem; opacity: 0.75; cursor: not-allowed;">
                  <input type="checkbox" checked disabled style="accent-color: var(--accent-gold); width: 17px; height: 17px;">
                  <span>${i18n.t('floorGround')}</span>
                </label>

                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.88rem;">
                  <input type="checkbox" id="chk-first" ${this.currentInput.hasFirstFloor ? 'checked' : ''} style="accent-color: var(--accent-gold); width: 17px; height: 17px;">
                  <span>${i18n.t('floorFirst')}</span>
                </label>

                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.88rem;">
                  <input type="checkbox" id="chk-annex" ${this.currentInput.hasPenthouseAnnex ? 'checked' : ''} style="accent-color: var(--accent-gold); width: 17px; height: 17px;">
                  <span>${i18n.t('floorAnnex')}</span>
                </label>

              </div>
            </div>

          </div>

          <!-- Finishing Tiers Selector (4 Bento Cards) -->
          <div style="margin-bottom: 32px;">
            <div style="font-weight: 700; font-size: 1.1rem; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
              <span>🏛️</span> ${i18n.t('tierSelectTitle')}
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
              ${Object.values(FINISHING_TIERS).map((t) => {
                const isSelected = this.currentInput.finishingTier === t.id;
                return `
                  <div class="tilt-card tier-card ${isSelected ? 'selected' : ''}" data-tier-id="${t.id}" style="padding: 20px; cursor: pointer; border-radius: 18px; border: 2px solid ${isSelected ? 'var(--accent-gold)' : 'var(--border-subtle)'}; background: ${isSelected ? 'var(--bg-card-hover)' : 'var(--bg-secondary)'}; position: relative;">
                    ${isSelected ? `
                      <div style="position: absolute; top: 12px; left: 12px; [dir=ltr]& { left: auto; right: 12px; }; width: 22px; height: 22px; border-radius: 50%; background: var(--accent-gold); color: #030712; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 900;">✓</div>
                    ` : ''}
                    <span class="badge ${isSelected ? 'badge-gold' : 'badge-cyan'}" style="margin-bottom: 8px; font-size: 0.72rem;">
                      ${isAr ? t.badgeAr : t.badgeEn}
                    </span>
                    <h3 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 6px;">
                      ${isAr ? t.nameAr : t.nameEn}
                    </h3>
                    <div class="font-mono" style="font-size: 1.3rem; font-weight: 800; color: var(--accent-gold); margin-bottom: 10px;">
                      ${t.baseRatePerM2.toLocaleString('en-US')} <span style="font-size: 0.8rem; font-weight: 500; color: var(--text-muted);">${i18n.t('sarPerM2')}</span>
                    </div>
                    <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
                      ${isAr ? t.descriptionAr : t.descriptionEn}
                    </p>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Smart Add-ons Multi-Select (6 Modern Upgrade Cards) -->
          <div>
            <div style="font-weight: 700; font-size: 1.1rem; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
              <span>✨</span> ${i18n.t('addOnsTitle')}
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 16px;">
              ${AVAILABLE_ADDONS.map((addon) => {
                const isSelected = this.currentInput.selectedAddOns.includes(addon.id);
                return `
                  <div class="tilt-card addon-card ${isSelected ? 'selected' : ''}" data-addon-id="${addon.id}" style="padding: 16px 20px; cursor: pointer; border-radius: 16px; border: 1.5px solid ${isSelected ? 'var(--accent-cyan)' : 'var(--border-subtle)'}; background: ${isSelected ? 'rgba(56, 189, 248, 0.08)' : 'var(--bg-secondary)'}; display: flex; align-items: flex-start; gap: 16px;">
                    <div style="font-size: 1.8rem; line-height: 1; padding: 6px; background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-subtle);">
                      ${addon.icon}
                    </div>
                    <div style="flex: 1;">
                      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">${isAr ? addon.nameAr : addon.nameEn}</h4>
                        <input type="checkbox" ${isSelected ? 'checked' : ''} style="accent-color: var(--accent-cyan); width: 17px; height: 17px; pointer-events: none;">
                      </div>
                      <div class="font-mono" style="font-size: 0.9rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 4px;">
                        +${addon.fixedCost.toLocaleString('en-US')} ${i18n.t('sarCurrency')}
                      </div>
                      <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4;">${isAr ? addon.descriptionAr : addon.descriptionEn}</p>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

        </div>

        <!-- Real-Time Financial & Engineering Output Panel -->
        <div id="estimator-output" class="border-beam-container">
          <div class="border-beam-inner" style="padding: 36px;">
            
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 20px; margin-bottom: 28px;">
              <div>
                <span class="badge badge-emerald" style="margin-bottom: 8px;">
                  <span>🔒</span> ${isAr ? 'حساب معتمد مع الضمانات' : 'Certified Estimation with Warranties'}
                </span>
                <h3 style="font-size: 1.4rem; font-weight: 800;">${i18n.t('resultsTitle')}</h3>
                <div style="display: flex; gap: 16px; margin-top: 8px; font-size: 0.88rem; color: var(--text-secondary);">
                  <span>${i18n.t('buaComputedLabel')} <strong id="res-bua" class="font-mono" style="color: var(--text-primary); font-size: 1.05rem;">0 م²</strong></span>
                  <span>•</span>
                  <span>${i18n.t('ratePerM2Label')} <strong id="res-rate-m2" class="font-mono" style="color: var(--accent-gold); font-size: 1.05rem;">0 ريال/م²</strong></span>
                </div>
              </div>

              <!-- Grand Total Display -->
              <div style="text-align: right; [dir=ltr]& { text-align: left; };">
                <div style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">${i18n.t('grandTotalLabel')}</div>
                <div id="res-grand-total" class="font-mono gold-text shimmer-text" style="font-size: 2.6rem; font-weight: 900; line-height: 1.1;">
                  0 ${i18n.t('sarCurrency')}
                </div>
                <div style="font-size: 0.8rem; color: var(--accent-emerald); font-weight: 500; margin-top: 4px;">
                  ✓ شامل ضريبة القيمة المضافة 15% وتأمينات كود البناء
                </div>
              </div>
            </div>

            <!-- Financial Summary Metrics Cards -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; margin-bottom: 32px;">
              <div style="background: var(--bg-secondary); padding: 16px; border-radius: 14px; border: 1px solid var(--border-subtle);">
                <div style="font-size: 0.78rem; color: var(--text-muted);">${i18n.t('baseCostLabel')}</div>
                <div id="res-base-cost" class="font-mono" style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-top: 4px;">0 ر.س</div>
              </div>

              <div style="background: var(--bg-secondary); padding: 16px; border-radius: 14px; border: 1px solid var(--border-subtle);">
                <div style="font-size: 0.78rem; color: var(--text-muted);">${i18n.t('addOnsCostLabel')}</div>
                <div id="res-addons-cost" class="font-mono" style="font-size: 1.15rem; font-weight: 700; color: var(--accent-cyan); margin-top: 4px;">0 ر.س</div>
              </div>

              <div style="background: var(--bg-secondary); padding: 16px; border-radius: 14px; border: 1px solid var(--border-subtle);">
                <div style="font-size: 0.78rem; color: var(--text-muted);">${i18n.t('supervisionFeeLabel')}</div>
                <div id="res-supervision-cost" class="font-mono" style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-top: 4px;">0 ر.س</div>
              </div>

              <div style="background: var(--bg-secondary); padding: 16px; border-radius: 14px; border: 1px solid var(--border-subtle);">
                <div style="font-size: 0.78rem; color: var(--text-muted);">${i18n.t('vatLabel')}</div>
                <div id="res-vat-cost" class="font-mono" style="font-size: 1.15rem; font-weight: 700; color: var(--text-gold); margin-top: 4px;">0 ر.س</div>
              </div>
            </div>

            <!-- 7-Phase Itemized Engineering Breakdown -->
            <div style="margin-bottom: 32px;">
              <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                <span>📊</span> ${i18n.t('phasesBreakdownTitle')}
              </h4>
              <div id="phases-container" style="display: flex; flex-direction: column; gap: 12px;">
                <!-- Dynamically injected phases -->
              </div>
            </div>

            <!-- Action CTA Buttons -->
            <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center; justify-content: flex-end;">
              <button id="btn-save-estimate" class="btn btn-glass" style="padding: 14px 24px;">
                <span>💾</span> ${i18n.t('btnSaveEstimate')}
              </button>
              <button id="btn-generate-boq" class="btn btn-gold" style="padding: 16px 32px; font-size: 1.05rem;">
                <span>📜</span> ${i18n.t('btnGenerateBOQ')}
              </button>
            </div>

          </div>
        </div>

      </div>
    `;

    MotionFX.initTiltCards();
  }

  private bindEvents() {
    // City Select
    const citySelect = document.getElementById('city-select') as HTMLSelectElement | null;
    citySelect?.addEventListener('change', () => {
      audioEngine.playClick();
      this.currentInput.city = citySelect.value as EstimatorInput['city'];
      this.recalculate();
    });

    // Land Area Slider
    const landRange = document.getElementById('land-area-range') as HTMLInputElement | null;
    const landVal = document.getElementById('land-area-val');
    landRange?.addEventListener('input', () => {
      audioEngine.playSliderTick();
      const val = parseInt(landRange.value, 10);
      this.currentInput.landArea = val;
      if (landVal) landVal.textContent = `${val.toLocaleString('en-US')} م²`;
      this.recalculate();
    });

    // Footprint Slider
    const footRange = document.getElementById('footprint-range') as HTMLInputElement | null;
    const footVal = document.getElementById('footprint-val');
    footRange?.addEventListener('input', () => {
      audioEngine.playSliderTick();
      const val = parseInt(footRange.value, 10);
      this.currentInput.footprintRatio = val / 100;
      if (footVal) footVal.textContent = `${val}%`;
      this.recalculate();
    });

    // Floors Checkboxes
    const chkBasement = document.getElementById('chk-basement') as HTMLInputElement | null;
    chkBasement?.addEventListener('change', () => {
      audioEngine.playClick();
      this.currentInput.hasBasement = chkBasement.checked;
      this.recalculate();
    });

    const chkFirst = document.getElementById('chk-first') as HTMLInputElement | null;
    chkFirst?.addEventListener('change', () => {
      audioEngine.playClick();
      this.currentInput.hasFirstFloor = chkFirst.checked;
      this.recalculate();
    });

    const chkAnnex = document.getElementById('chk-annex') as HTMLInputElement | null;
    chkAnnex?.addEventListener('change', () => {
      audioEngine.playClick();
      this.currentInput.hasPenthouseAnnex = chkAnnex.checked;
      this.recalculate();
    });

    // Finishing Tier Cards
    document.querySelectorAll('.tier-card').forEach((card) => {
      card.addEventListener('click', () => {
        const tierId = card.getAttribute('data-tier-id') as EstimatorInput['finishingTier'];
        if (tierId && tierId !== this.currentInput.finishingTier) {
          audioEngine.playTierChime();
          this.currentInput.finishingTier = tierId;
          this.render();
          this.bindEvents();
          this.recalculate();
        }
      });
    });

    // Add-on Cards
    document.querySelectorAll('.addon-card').forEach((card) => {
      card.addEventListener('click', () => {
        const addonId = card.getAttribute('data-addon-id');
        if (addonId) {
          audioEngine.playClick();
          const idx = this.currentInput.selectedAddOns.indexOf(addonId);
          if (idx >= 0) {
            this.currentInput.selectedAddOns.splice(idx, 1);
          } else {
            this.currentInput.selectedAddOns.push(addonId);
          }
          this.render();
          this.bindEvents();
          this.recalculate();
        }
      });
    });

    // CTA: Generate BOQ
    const btnBOQ = document.getElementById('btn-generate-boq');
    btnBOQ?.addEventListener('click', () => {
      if (this.lastResult) {
        audioEngine.playSuccessFanfare();
        MotionFX.fireCelebration();
        this.onGenerateBOQCallback(this.lastResult);
      }
    });

    // CTA: Save Estimate
    const btnSave = document.getElementById('btn-save-estimate');
    btnSave?.addEventListener('click', () => {
      if (this.lastResult) {
        audioEngine.playClick();
        this.onSaveEstimateCallback(this.lastResult);
      }
    });
  }

  private recalculate() {
    const res = CostEstimatorEngine.calculate(this.currentInput);
    this.lastResult = res;
    const isAr = i18n.getLang() === 'ar';

    // Update Totals
    const buaEl = document.getElementById('res-bua');
    if (buaEl) buaEl.textContent = `${res.builtUpArea.toLocaleString('en-US')} م²`;

    const rateEl = document.getElementById('res-rate-m2');
    if (rateEl) rateEl.textContent = `${res.costPerM2.toLocaleString('en-US')} ريال/م²`;

    const grandTotalEl = document.getElementById('res-grand-total');
    if (grandTotalEl) {
      grandTotalEl.textContent = `${res.grandTotal.toLocaleString('en-US')} ${i18n.t('sarCurrency')}`;
    }

    const baseCostEl = document.getElementById('res-base-cost');
    if (baseCostEl) baseCostEl.textContent = `${res.baseConstructionCost.toLocaleString('en-US')} ر.س`;

    const addonsCostEl = document.getElementById('res-addons-cost');
    if (addonsCostEl) addonsCostEl.textContent = `${res.addOnsCost.toLocaleString('en-US')} ر.س`;

    const supCostEl = document.getElementById('res-supervision-cost');
    if (supCostEl) supCostEl.textContent = `${res.engineeringSupervisionFee.toLocaleString('en-US')} ر.س`;

    const vatCostEl = document.getElementById('res-vat-cost');
    if (vatCostEl) vatCostEl.textContent = `${res.vatAmount.toLocaleString('en-US')} ر.س`;

    // Render 7 Phases
    const phasesContainer = document.getElementById('phases-container');
    if (phasesContainer) {
      phasesContainer.innerHTML = res.phases.map((p) => `
        <div style="background: var(--bg-secondary); padding: 14px 18px; border-radius: 14px; border: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 8px;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="badge badge-cyan" style="font-size: 0.72rem; padding: 4px 10px;">${p.codeRef}</span>
              <span style="font-weight: 700; font-size: 0.95rem; color: var(--text-primary);">
                ${isAr ? p.nameAr : p.nameEn}
              </span>
            </div>
            <div style="display: flex; align-items: center; gap: 12px;">
              <span class="font-mono" style="font-size: 0.85rem; color: var(--text-muted);">${p.percentage}%</span>
              <span class="font-mono" style="font-size: 1.05rem; font-weight: 700; color: var(--accent-gold);">
                ${p.cost.toLocaleString('en-US')} ر.س
              </span>
            </div>
          </div>
          <!-- Progress Bar -->
          <div style="width: 100%; height: 6px; background: rgba(255, 255, 255, 0.06); border-radius: 999px; overflow: hidden;">
            <div style="width: ${p.percentage * 1.5}%; height: 100%; background: linear-gradient(90deg, var(--accent-gold), var(--accent-cyan)); border-radius: 999px;"></div>
          </div>
          <p style="font-size: 0.76rem; color: var(--text-secondary); line-height: 1.4; margin: 0;">
            ${isAr ? p.descriptionAr : p.descriptionEn}
          </p>
        </div>
      `).join('');
    }
  }
}