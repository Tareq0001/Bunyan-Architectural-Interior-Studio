/**
 * Official Engineering BOQ & Printable Proposal Generator
 * Certified Bill of Quantities aligned with Saudi Building Code (SBC) Standards.
 */

import { EstimatorResult } from '../engine/cost-calculator';
import { LEAD_ARCHITECT_INFO } from '../data/sbc-standards';
import { i18n } from './i18n';
import { audioEngine } from '../engine/audio';

export class BOQModal {
  private overlay: HTMLElement | null = null;
  private currentResult: EstimatorResult | null = null;
  private clientName: string = '';

  constructor() {
    this.createModalDOM();
  }

  private createModalDOM() {
    const existing = document.getElementById('boq-modal-overlay');
    if (existing) existing.remove();

    this.overlay = document.createElement('div');
    this.overlay.id = 'boq-modal-overlay';
    this.overlay.className = 'modal-overlay';
    document.body.appendChild(this.overlay);
  }

  public open(result: EstimatorResult) {
    this.currentResult = result;
    this.render();
    if (this.overlay) {
      this.overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  public close() {
    if (this.overlay) {
      this.overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  private render() {
    if (!this.overlay || !this.currentResult) return;
    const isAr = i18n.getLang() === 'ar';
    const res = this.currentResult;
    const refNo = `BNY-2026-SA-${Math.floor(1000 + Math.random() * 9000)}`;
    const today = new Date().toLocaleDateString(isAr ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const clientDisplay = this.clientName || i18n.t('boqDefaultClient');

    this.overlay.innerHTML = `
      <div class="modal-dialog">
        <button class="modal-close-btn" id="boq-close-btn" title="${i18n.t('btnCloseBOQ')}">✕</button>
        
        <div class="boq-print-wrapper" style="padding: 40px; color: var(--text-primary);">
          
          <!-- Document Header -->
          <div style="border-bottom: 2px solid var(--border-gold); padding-bottom: 24px; margin-bottom: 28px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 20px;">
              <div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                  <span style="font-size: 2rem;">🏛️</span>
                  <div>
                    <h1 class="font-display" style="font-size: 1.8rem; font-weight: 800; color: var(--accent-gold); letter-spacing: 0.05em; line-height: 1;">
                      ${i18n.t('brandName')}
                    </h1>
                    <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">
                      ${isAr ? LEAD_ARCHITECT_INFO.officeAr : LEAD_ARCHITECT_INFO.officeEn}
                    </div>
                  </div>
                </div>
                <div style="font-size: 0.85rem; color: var(--accent-cyan); font-weight: 600;">
                  ${i18n.t('boqDocHeader')}
                </div>
              </div>

              <!-- Ref & Date Box -->
              <div style="text-align: right; [dir=ltr]& { text-align: left; }; font-size: 0.82rem; background: var(--bg-card); padding: 12px 18px; border-radius: 12px; border: 1px solid var(--border-subtle);">
                <div>${i18n.t('boqRefNo')} <strong class="font-mono" style="color: var(--accent-gold);">${refNo}</strong></div>
                <div style="margin-top: 4px;">${i18n.t('boqDate')} <strong>${today}</strong></div>
                <div style="margin-top: 4px; color: var(--accent-emerald); font-weight: 600;">✓ معتمد رقمياً (SBC-Verified)</div>
              </div>
            </div>

            <!-- Client & Lead Architect Information Banner -->
            <div style="margin-top: 24px; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; background: var(--bg-secondary); padding: 16px 20px; border-radius: 14px; border: 1px solid var(--border-subtle);">
              <div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${i18n.t('boqClientLabel')}</div>
                <div style="font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-top: 2px;">
                  ${clientDisplay}
                </div>
              </div>
              <div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${i18n.t('boqSupervisingArchitect')}</div>
                <div style="font-size: 1rem; font-weight: 700; color: var(--accent-gold); margin-top: 2px;">
                  ${isAr ? LEAD_ARCHITECT_INFO.nameAr : LEAD_ARCHITECT_INFO.nameEn}
                </div>
                <div style="font-size: 0.72rem; color: var(--text-secondary);">${isAr ? LEAD_ARCHITECT_INFO.titleAr : LEAD_ARCHITECT_INFO.titleEn}</div>
              </div>
              <div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${i18n.t('tierSelectTitle')}</div>
                <div style="font-size: 0.95rem; font-weight: 700; color: var(--accent-cyan); margin-top: 2px;">
                  ${isAr ? res.finishingTier.nameAr : res.finishingTier.nameEn}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-secondary);">${res.builtUpArea.toLocaleString('en-US')} م² مسطح بنائي</div>
              </div>
            </div>

          </div>

          <!-- Itemized Engineering BOQ Table -->
          <div style="overflow-x: auto; margin-bottom: 28px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: ${isAr ? 'right' : 'left'};">
              <thead>
                <tr style="background: var(--bg-card); border-bottom: 2px solid var(--border-medium);">
                  <th style="padding: 12px 16px; font-weight: 700;">#</th>
                  <th style="padding: 12px 16px; font-weight: 700;">${i18n.t('boqColItem')}</th>
                  <th style="padding: 12px 16px; font-weight: 700;">${i18n.t('boqColCode')}</th>
                  <th style="padding: 12px 16px; font-weight: 700;">${i18n.t('boqColPercent')}</th>
                  <th style="padding: 12px 16px; font-weight: 700; text-align: ${isAr ? 'left' : 'right'};">${i18n.t('boqColTotal')}</th>
                </tr>
              </thead>
              <tbody>
                ${res.phases.map((p, idx) => `
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 12px 16px; color: var(--text-muted);">${idx + 1}</td>
                    <td style="padding: 12px 16px;">
                      <strong style="color: var(--text-primary); font-size: 0.92rem;">${isAr ? p.nameAr : p.nameEn}</strong>
                      <div style="font-size: 0.76rem; color: var(--text-secondary); margin-top: 3px;">${isAr ? p.descriptionAr : p.descriptionEn}</div>
                    </td>
                    <td style="padding: 12px 16px;">
                      <span class="badge badge-cyan" style="font-size: 0.72rem;">${p.codeRef}</span>
                    </td>
                    <td style="padding: 12px 16px; font-family: var(--font-mono); color: var(--text-muted);">${p.percentage}%</td>
                    <td style="padding: 12px 16px; font-family: var(--font-mono); font-weight: 700; text-align: ${isAr ? 'left' : 'right'}; color: var(--text-primary);">
                      ${p.cost.toLocaleString('en-US')}
                    </td>
                  </tr>
                `).join('')}

                <!-- Active Add-ons Rows if any -->
                ${res.activeAddOns.map((addon, idx) => {
                  const cost = addon.fixedCost + addon.areaMultiplierCost * res.landArea;
                  return `
                    <tr style="border-bottom: 1px solid var(--border-subtle); background: rgba(56, 189, 248, 0.04);">
                      <td style="padding: 12px 16px; color: var(--accent-cyan); font-weight: 700;">+</td>
                      <td style="padding: 12px 16px;">
                        <strong style="color: var(--accent-cyan); font-size: 0.92rem;">${isAr ? addon.nameAr : addon.nameEn}</strong>
                        <div style="font-size: 0.76rem; color: var(--text-secondary); margin-top: 3px;">${isAr ? addon.descriptionAr : addon.descriptionEn}</div>
                      </td>
                      <td style="padding: 12px 16px;">
                        <span class="badge badge-gold" style="font-size: 0.72rem;">ترقية ذكية</span>
                      </td>
                      <td style="padding: 12px 16px; font-family: var(--font-mono); color: var(--text-muted);">-</td>
                      <td style="padding: 12px 16px; font-family: var(--font-mono); font-weight: 700; text-align: ${isAr ? 'left' : 'right'}; color: var(--accent-cyan);">
                        ${cost.toLocaleString('en-US')}
                      </td>
                    </tr>
                  `;
                }).join('')}

                <!-- Subtotals -->
                <tr style="border-top: 2px solid var(--border-medium); font-weight: 700;">
                  <td colspan="4" style="padding: 12px 16px; text-align: ${isAr ? 'right' : 'left'};">${i18n.t('baseCostLabel')}</td>
                  <td style="padding: 12px 16px; font-family: var(--font-mono); text-align: ${isAr ? 'left' : 'right'};">
                    ${res.baseConstructionCost.toLocaleString('en-US')} ر.س
                  </td>
                </tr>

                ${res.addOnsCost > 0 ? `
                  <tr style="font-weight: 700; color: var(--accent-cyan);">
                    <td colspan="4" style="padding: 10px 16px; text-align: ${isAr ? 'right' : 'left'};">${i18n.t('addOnsCostLabel')}</td>
                    <td style="padding: 10px 16px; font-family: var(--font-mono); text-align: ${isAr ? 'left' : 'right'};">
                      ${res.addOnsCost.toLocaleString('en-US')} ر.س
                    </td>
                  </tr>
                ` : ''}

                <tr style="color: var(--text-secondary);">
                  <td colspan="4" style="padding: 10px 16px; text-align: ${isAr ? 'right' : 'left'};">${i18n.t('supervisionFeeLabel')}</td>
                  <td style="padding: 10px 16px; font-family: var(--font-mono); text-align: ${isAr ? 'left' : 'right'};">
                    ${res.engineeringSupervisionFee.toLocaleString('en-US')} ر.س
                  </td>
                </tr>

                <tr style="color: var(--text-secondary);">
                  <td colspan="4" style="padding: 10px 16px; text-align: ${isAr ? 'right' : 'left'};">${i18n.t('contingencyLabel')}</td>
                  <td style="padding: 10px 16px; font-family: var(--font-mono); text-align: ${isAr ? 'left' : 'right'};">
                    ${res.contingencyReserve.toLocaleString('en-US')} ر.س
                  </td>
                </tr>

                <tr style="color: var(--accent-gold); font-weight: 700;">
                  <td colspan="4" style="padding: 10px 16px; text-align: ${isAr ? 'right' : 'left'};">${i18n.t('vatLabel')}</td>
                  <td style="padding: 10px 16px; font-family: var(--font-mono); text-align: ${isAr ? 'left' : 'right'};">
                    ${res.vatAmount.toLocaleString('en-US')} ر.س
                  </td>
                </tr>

                <!-- Grand Total Final Row -->
                <tr style="background: var(--bg-card); font-size: 1.15rem; font-weight: 900; border-top: 2px solid var(--accent-gold);">
                  <td colspan="4" style="padding: 16px; color: var(--accent-gold); text-align: ${isAr ? 'right' : 'left'};">
                    ${i18n.t('grandTotalLabel')}
                  </td>
                  <td style="padding: 16px; font-family: var(--font-mono); color: var(--accent-gold); text-align: ${isAr ? 'left' : 'right'};">
                    ${res.grandTotal.toLocaleString('en-US')} ${i18n.t('sarCurrency')}
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <!-- Warranties & Official Digital Stamp Seal -->
          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 24px; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 24px; margin-bottom: 24px;">
            <div>
              <div style="font-weight: 700; font-size: 0.9rem; color: var(--accent-gold); margin-bottom: 10px;">
                ${i18n.t('boqTermsTitle')}
              </div>
              <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px; font-size: 0.78rem; color: var(--text-secondary);">
                <li>✓ ${i18n.t('boqTerm1')}</li>
                <li>✓ ${i18n.t('boqTerm2')}</li>
                <li>✓ ${i18n.t('boqTerm3')}</li>
                <li>✓ ${i18n.t('boqTerm4')}</li>
              </ul>
            </div>

            <!-- Digital Seal & QR Code -->
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: var(--bg-secondary); padding: 16px; border-radius: 16px; border: 1px solid var(--border-gold);">
              <svg viewBox="0 0 80 80" width="80" height="80">
                <rect width="80" height="80" fill="#030712" rx="8"/>
                <!-- Geometric QR Pattern -->
                <rect x="10" y="10" width="22" height="22" fill="#f59e0b" rx="2"/>
                <rect x="14" y="14" width="14" height="14" fill="#030712" rx="1"/>
                <rect x="17" y="17" width="8" height="8" fill="#f59e0b"/>
                
                <rect x="48" y="10" width="22" height="22" fill="#f59e0b" rx="2"/>
                <rect x="52" y="14" width="14" height="14" fill="#030712" rx="1"/>
                <rect x="55" y="17" width="8" height="8" fill="#f59e0b"/>
                
                <rect x="10" y="48" width="22" height="22" fill="#f59e0b" rx="2"/>
                <rect x="14" y="52" width="14" height="14" fill="#030712" rx="1"/>
                <rect x="17" y="55" width="8" height="8" fill="#f59e0b"/>

                <rect x="38" y="38" width="8" height="8" fill="#38bdf8"/>
                <rect x="48" y="48" width="10" height="10" fill="#f59e0b"/>
                <rect x="62" y="58" width="8" height="8" fill="#38bdf8"/>
              </svg>
              <div style="font-size: 0.72rem; font-weight: 700; color: var(--accent-gold); margin-top: 8px;">
                ${isAr ? 'ختم الاعتماد الرقمي' : 'Official Verification Seal'}
              </div>
              <div class="font-mono" style="font-size: 0.65rem; color: var(--text-muted);">
                ${LEAD_ARCHITECT_INFO.verificationRef}
              </div>
            </div>
          </div>

          <!-- Bottom Action Buttons (Hidden during Print) -->
          <div class="no-print" style="display: flex; justify-content: flex-end; gap: 14px; margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
            <button id="boq-copy-btn" class="btn btn-glass">
              <span>📋</span> ${isAr ? 'نسخ الملخص المالي' : 'Copy Summary'}
            </button>
            <button id="boq-print-btn" class="btn btn-gold">
              <span>🖨️</span> ${i18n.t('btnPrintBOQ')}
            </button>
          </div>

        </div>
      </div>
    `;

    this.bindEvents();
  }

  private bindEvents() {
    const closeBtn = document.getElementById('boq-close-btn');
    closeBtn?.addEventListener('click', () => {
      audioEngine.playClick();
      this.close();
    });

    this.overlay?.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.close();
      }
    });

    const printBtn = document.getElementById('boq-print-btn');
    printBtn?.addEventListener('click', () => {
      audioEngine.playClick();
      window.print();
    });

    const copyBtn = document.getElementById('boq-copy-btn');
    copyBtn?.addEventListener('click', () => {
      if (!this.currentResult) return;
      audioEngine.playClick();
      const res = this.currentResult;
      const text = `استوديو بُـنْـيان للتصميم المعماري الفاخر | إشراف: أ. طارق ابوعشي
عرض سعر هندسي معتمد (كود SBC)
• مساحة الأرض: ${res.landArea} م²
• مسطح البناء (BUA): ${res.builtUpArea} م²
• باقة التشطيب: ${res.finishingTier.nameAr}
• التكلفة الإجمالية التقديرية: ${res.grandTotal.toLocaleString('en-US')} ريال سعودي (شامل الضريبة 15%)
• متوسط المتر المربع: ${res.costPerM2.toLocaleString('en-US')} ريال/م²`;

      navigator.clipboard.writeText(text).then(() => {
        if (copyBtn) {
          const old = copyBtn.innerHTML;
          copyBtn.innerHTML = '<span>✓</span> تم النسخ بنجاح!';
          setTimeout(() => {
            copyBtn.innerHTML = old;
          }, 2500);
        }
      });
    });
  }
}