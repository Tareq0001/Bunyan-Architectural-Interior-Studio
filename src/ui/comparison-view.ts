/**
 * Saved Estimates & Multi-Scenario Comparison View
 * Allows users to compare different villa designs and budget paths side by side.
 */

import { EstimatorResult } from '../engine/cost-calculator';
import { i18n } from './i18n';
import { audioEngine } from '../engine/audio';

export interface SavedEstimateEntry {
  id: string;
  name: string;
  timestamp: string;
  result: EstimatorResult;
}

export class ComparisonView {
  private container: HTMLElement;
  private savedEstimates: SavedEstimateEntry[] = [];
  private onLoadEstimateCallback: (res: EstimatorResult) => void;

  constructor(
    containerId: string,
    onLoadEstimate: (res: EstimatorResult) => void
  ) {
    const el = document.getElementById(containerId);
    if (!el) throw new Error(`Container #${containerId} not found`);
    this.container = el;
    this.onLoadEstimateCallback = onLoadEstimate;

    this.loadFromStorage();

    i18n.subscribe(() => {
      this.render();
      this.bindEvents();
    });
  }

  public init() {
    this.render();
    this.bindEvents();
  }

  public saveEstimate(res: EstimatorResult) {
    const isAr = i18n.getLang() === 'ar';
    const entry: SavedEstimateEntry = {
      id: `EST-${Date.now()}`,
      name: `${isAr ? 'فيلا' : 'Villa'} ${res.builtUpArea}م² - ${isAr ? res.finishingTier.nameAr : res.finishingTier.nameEn}`,
      timestamp: new Date().toLocaleTimeString(isAr ? 'ar-SA' : 'en-US', { hour: '2-digit', minute: '2-digit' }),
      result: res
    };

    this.savedEstimates.unshift(entry);
    if (this.savedEstimates.length > 4) {
      this.savedEstimates.pop(); // keep latest 4
    }

    this.syncStorage();
    this.render();
    this.bindEvents();
  }

  private loadFromStorage() {
    try {
      const data = localStorage.getItem('bunyan_saved_estimates');
      if (data) {
        this.savedEstimates = JSON.parse(data);
      }
    } catch {
      this.savedEstimates = [];
    }
  }

  private syncStorage() {
    try {
      localStorage.setItem('bunyan_saved_estimates', JSON.stringify(this.savedEstimates));
    } catch {
      // ignore
    }
  }

  private render() {
    const isAr = i18n.getLang() === 'ar';

    if (this.savedEstimates.length === 0) {
      this.container.innerHTML = `
        <div class="glass-panel" style="padding: 36px; border-radius: 24px; text-align: center;">
          <div style="font-size: 2.4rem; margin-bottom: 12px;">📁</div>
          <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 8px;">${i18n.t('savedEstimatesTitle')}</h3>
          <p style="color: var(--text-secondary); font-size: 0.9rem; max-width: 500px; margin: 0 auto;">
            ${i18n.t('noSavedEstimates')}
          </p>
        </div>
      `;
      return;
    }

    this.container.innerHTML = `
      <div class="glass-panel" style="padding: 36px; border-radius: 24px;">
        
        <div style="margin-bottom: 24px;">
          <span class="badge badge-gold" style="margin-bottom: 8px;">
            <span>⚖️</span> ${isAr ? 'مقارنة السيناريوهات الاستثمارية' : 'Scenario Investment Comparison'}
          </span>
          <h3 style="font-size: 1.5rem; font-weight: 800;">${i18n.t('savedEstimatesTitle')}</h3>
          <p style="color: var(--text-secondary); font-size: 0.92rem;">${i18n.t('savedEstimatesSubtitle')}</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
          ${this.savedEstimates.map((item) => `
            <div class="tilt-card" style="padding: 24px; border-radius: 18px; border: 1.5px solid var(--border-gold); background: var(--bg-secondary); display: flex; flex-direction: column;">
              
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-primary); line-height: 1.3;">
                  ${item.name}
                </h4>
                <button class="btn-delete-saved" data-id="${item.id}" style="color: var(--text-muted); font-size: 0.8rem; cursor: pointer; padding: 4px;">
                  ✕
                </button>
              </div>

              <div class="font-mono" style="font-size: 1.6rem; font-weight: 800; color: var(--accent-gold); margin-bottom: 16px;">
                ${item.result.grandTotal.toLocaleString('en-US')} <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">${i18n.t('sarCurrency')}</span>
              </div>

              <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.84rem; color: var(--text-secondary); margin-bottom: 20px; border-top: 1px solid var(--border-subtle); padding-top: 14px;">
                <div style="display: flex; justify-content: space-between;">
                  <span>${i18n.t('landAreaLabel')}</span>
                  <strong class="font-mono" style="color: var(--text-primary);">${item.result.landArea} م²</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span>${i18n.t('buaComputedLabel')}</span>
                  <strong class="font-mono" style="color: var(--text-primary);">${item.result.builtUpArea} م²</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span>${i18n.t('ratePerM2Label')}</span>
                  <strong class="font-mono" style="color: var(--accent-cyan);">${item.result.costPerM2.toLocaleString('en-US')} ر.س</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span>${i18n.t('tierSelectTitle')}</span>
                  <strong style="color: var(--accent-gold);">${isAr ? item.result.finishingTier.badgeAr : item.result.finishingTier.badgeEn}</strong>
                </div>
              </div>

              <div style="margin-top: auto;">
                <button class="btn btn-gold btn-load-saved" data-id="${item.id}" style="width: 100%; padding: 10px; font-size: 0.88rem;">
                  <span>🔄</span> ${i18n.t('btnLoadEstimate')}
                </button>
              </div>

            </div>
          `).join('')}
        </div>

      </div>
    `;
  }

  private bindEvents() {
    // Delete Button
    document.querySelectorAll('.btn-delete-saved').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        audioEngine.playClick();
        const id = btn.getAttribute('data-id');
        this.savedEstimates = this.savedEstimates.filter((item) => item.id !== id);
        this.syncStorage();
        this.render();
        this.bindEvents();
      });
    });

    // Load Estimate Button
    document.querySelectorAll('.btn-load-saved').forEach((btn) => {
      btn.addEventListener('click', () => {
        audioEngine.playClick();
        const id = btn.getAttribute('data-id');
        const found = this.savedEstimates.find((item) => item.id === id);
        if (found) {
          this.onLoadEstimateCallback(found.result);
        }
      });
    });
  }
}