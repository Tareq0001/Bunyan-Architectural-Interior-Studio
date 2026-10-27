/**
 * Architectural Masterpieces & Saudi Style Atlas View
 * Rich architectural cards with specs, structural metrics, and preset loaders.
 */

import { ARCHITECTURAL_STYLES, ArchitecturalStyle } from '../data/architectural-styles';
import { i18n } from './i18n';
import { audioEngine } from '../engine/audio';
import { MotionFX } from '../engine/motion-fx';

export class AtlasView {
  private container: HTMLElement;
  private currentFilter: string = 'all';
  private searchQuery: string = '';
  private onLoadStyleCallback: (style: ArchitecturalStyle) => void;

  constructor(
    containerId: string,
    onLoadStyle: (style: ArchitecturalStyle) => void
  ) {
    const el = document.getElementById(containerId);
    if (!el) throw new Error(`Container #${containerId} not found`);
    this.container = el;
    this.onLoadStyleCallback = onLoadStyle;

    i18n.subscribe(() => {
      this.render();
      this.bindEvents();
    });
  }

  public init() {
    this.render();
    this.bindEvents();
  }

  private render() {
    const isAr = i18n.getLang() === 'ar';

    // Filter styles
    const filtered = ARCHITECTURAL_STYLES.filter((style) => {
      const matchCategory = this.currentFilter === 'all' || style.category === this.currentFilter;
      const q = this.searchQuery.toLowerCase().trim();
      if (!q) return matchCategory;

      const title = (isAr ? style.titleAr : style.titleEn).toLowerCase();
      const region = (isAr ? style.regionAr : style.regionEn).toLowerCase();
      const concept = (isAr ? style.conceptAr : style.conceptEn).toLowerCase();
      return matchCategory && (title.includes(q) || region.includes(q) || concept.includes(q));
    });

    this.container.innerHTML = `
      <div class="glass-panel" style="padding: 36px; border-radius: 24px;">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; margin-bottom: 28px;">
          <div>
            <span class="badge badge-gold" style="margin-bottom: 8px;">
              <span>🗺️</span> ${isAr ? 'روائع العمارة السعودية والعالمية' : 'Architectural Atlas of Saudi Masterpieces'}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800;">${i18n.t('atlasTitle')}</h2>
            <p style="color: var(--text-secondary); font-size: 0.95rem;">${i18n.t('atlasSubtitle')}</p>
          </div>

          <!-- Search Input -->
          <div style="min-width: 260px;">
            <input type="text" id="atlas-search-input" value="${this.searchQuery}" placeholder="${isAr ? 'بحث في الطرز المعمارية والمناطق...' : 'Search styles, regions...'}" style="width: 100%; padding: 12px 18px; border-radius: 12px; background: var(--bg-secondary); border: 1px solid var(--border-medium); color: var(--text-primary); font-family: inherit; font-size: 0.9rem; outline: none;">
          </div>
        </div>

        <!-- Filter Tags Bar -->
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 32px;">
          ${[
            { id: 'all', label: i18n.t('filterAll') },
            { id: 'salmani', label: i18n.t('filterSalmani') },
            { id: 'heritage', label: i18n.t('filterHeritage') },
            { id: 'mountain', label: i18n.t('filterMountain') },
            { id: 'coastal', label: i18n.t('filterCoastal') },
            { id: 'minimalist', label: i18n.t('filterMinimalist') }
          ].map((tab) => `
            <button class="filter-btn btn ${this.currentFilter === tab.id ? 'btn-gold' : 'btn-glass'}" data-category="${tab.id}" style="padding: 8px 18px; font-size: 0.85rem; border-radius: 999px;">
              ${tab.label}
            </button>
          `).join('')}
        </div>

        <!-- Architectural Cards Grid (3 Columns) -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 24px;">
          ${filtered.map((style) => `
            <div class="tilt-card" style="border-radius: 20px; overflow: hidden; display: flex; flex-direction: column;">
              
              <!-- SVG Architectural Graphic Banner -->
              <div style="width: 100%; height: 200px; background: #030712; position: relative; overflow: hidden; border-bottom: 1px solid var(--border-subtle);">
                ${style.svgGraphic}
                <div style="position: absolute; top: 14px; left: 14px; [dir=ltr]& { left: auto; right: 14px; };">
                  <span class="badge badge-gold" style="backdrop-filter: blur(8px);">
                    ${isAr ? style.tagAr : style.tagEn}
                  </span>
                </div>
                <div style="position: absolute; bottom: 12px; right: 14px; [dir=ltr]& { right: auto; left: 14px; }; font-size: 0.82rem; font-weight: 600; color: var(--text-primary); text-shadow: 0 2px 8px rgba(0,0,0,0.8);">
                  📍 ${isAr ? style.regionAr : style.regionEn}
                </div>
              </div>

              <!-- Card Body -->
              <div style="padding: 24px; display: flex; flex-direction: column; flex: 1;">
                <h3 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 8px; color: var(--text-primary);">
                  ${isAr ? style.titleAr : style.titleEn}
                </h3>
                
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
                  ${isAr ? style.conceptAr : style.conceptEn}
                </p>

                <!-- Philosophical Quote -->
                <div style="padding: 10px 14px; background: rgba(245, 158, 11, 0.06); border-right: 3px solid var(--accent-gold); [dir=ltr]& { border-right: none; border-left: 3px solid var(--accent-gold); }; border-radius: 8px; margin-bottom: 18px; font-style: italic; font-size: 0.78rem; color: var(--accent-gold-light);">
                  ${isAr ? style.philosophicalQuoteAr : style.philosophicalQuoteEn}
                </div>

                <!-- Engineering Metrics Badges -->
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 20px; background: var(--bg-secondary); padding: 12px; border-radius: 12px; border: 1px solid var(--border-subtle); text-align: center;">
                  <div>
                    <div style="font-size: 0.7rem; color: var(--text-muted);">${i18n.t('wwrLabel')}</div>
                    <div class="font-mono" style="font-size: 0.95rem; font-weight: 700; color: var(--accent-cyan);">${style.wwr}%</div>
                  </div>
                  <div>
                    <div style="font-size: 0.7rem; color: var(--text-muted);">${i18n.t('uValueLabel')}</div>
                    <div class="font-mono" style="font-size: 0.95rem; font-weight: 700; color: var(--accent-gold);">${style.uValue}</div>
                  </div>
                  <div>
                    <div style="font-size: 0.7rem; color: var(--text-muted);">${i18n.t('timelineLabel')}</div>
                    <div class="font-mono" style="font-size: 0.95rem; font-weight: 700; color: var(--accent-emerald);">${style.timelineMonths} ${i18n.t('monthsUnit')}</div>
                  </div>
                </div>

                <!-- Features Bullets -->
                <ul style="list-style: none; padding: 0; margin: 0 0 20px 0; display: flex; flex-direction: column; gap: 6px; font-size: 0.8rem; color: var(--text-secondary);">
                  ${(isAr ? style.featuresAr : style.featuresEn).map((f) => `
                    <li style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: var(--accent-gold);">✓</span>
                      <span>${f}</span>
                    </li>
                  `).join('')}
                </ul>

                <!-- Load into Estimator Action Button -->
                <div style="margin-top: auto;">
                  <button class="btn btn-gold btn-load-style" data-style-id="${style.id}" style="width: 100%; padding: 12px; font-size: 0.9rem;">
                    <span>📐</span> ${i18n.t('loadIntoEstimatorBtn')}
                  </button>
                </div>

              </div>

            </div>
          `).join('')}
        </div>

      </div>
    `;

    MotionFX.initTiltCards();
  }

  private bindEvents() {
    // Filter Buttons
    document.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        audioEngine.playClick();
        const cat = btn.getAttribute('data-category');
        if (cat) {
          this.currentFilter = cat;
          this.render();
          this.bindEvents();
        }
      });
    });

    // Search Input
    const searchInput = document.getElementById('atlas-search-input') as HTMLInputElement | null;
    searchInput?.addEventListener('input', () => {
      this.searchQuery = searchInput.value;
      this.render();
      this.bindEvents();
    });

    // Load into Estimator Buttons
    document.querySelectorAll('.btn-load-style').forEach((btn) => {
      btn.addEventListener('click', () => {
        audioEngine.playClick();
        const styleId = btn.getAttribute('data-style-id');
        const found = ARCHITECTURAL_STYLES.find((s) => s.id === styleId);
        if (found) {
          this.onLoadStyleCallback(found);
        }
      });
    });
  }
}