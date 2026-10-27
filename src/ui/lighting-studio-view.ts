/**
 * Interactive Room Lighting & Material Moodboard Studio
 * Live Architectural Canvas/SVG Visualizer for luxury living salons.
 */

import {
  FLOORING_MATERIALS,
  WALL_MATERIALS,
  LIGHTING_MODES,
  MaterialSwatch,
  LightingMode,
  calculateHarmonyScore
} from '../data/material-catalog';
import { i18n } from './i18n';
import { audioEngine } from '../engine/audio';
import { MotionFX } from '../engine/motion-fx';

export class LightingStudioView {
  private container: HTMLElement;
  private selectedFloor: MaterialSwatch = FLOORING_MATERIALS[0]; // Statuario Marble
  private selectedWall: MaterialSwatch = WALL_MATERIALS[2]; // Acoustic Oak Slats
  private selectedLight: LightingMode = LIGHTING_MODES[0]; // 2700K Warm
  private dimmerLevel: number = 85; // 85%
  private onApplyToEstimatorCallback: (tierId: 'shell' | 'turnkey' | 'royal' | 'salmani') => void;

  constructor(
    containerId: string,
    onApplyToEstimator: (tierId: 'shell' | 'turnkey' | 'royal' | 'salmani') => void
  ) {
    const el = document.getElementById(containerId);
    if (!el) throw new Error(`Container #${containerId} not found`);
    this.container = el;
    this.onApplyToEstimatorCallback = onApplyToEstimator;

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
    const harmony = calculateHarmonyScore(this.selectedFloor, this.selectedWall, this.selectedLight);

    this.container.innerHTML = `
      <div class="glass-panel" style="padding: 32px; border-radius: 24px;">
        
        <!-- Header -->
        <div style="margin-bottom: 24px;">
          <span class="badge badge-cyan" style="margin-bottom: 8px;">
            <span>💡</span> ${isAr ? 'محاكاة فيزيائية حية للإضاءة والخامات' : 'Real-Time Photometric Lighting & Material Studio'}
          </span>
          <h2 style="font-size: 1.6rem; font-weight: 800;">${i18n.t('studioTitle')}</h2>
          <p style="color: var(--text-secondary); font-size: 0.95rem;">${i18n.t('studioSubtitle')}</p>
        </div>

        <!-- Studio Main Layout (Left: Visualizer Stage, Right: Material & Lighting Controls) -->
        <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 28px; align-items: start;">
          
          <!-- LEFT: Architectural Visualizer Canvas/SVG Stage -->
          <div style="position: sticky; top: 100px;">
            <div id="visualizer-stage" style="position: relative; width: 100%; height: 420px; border-radius: 20px; overflow: hidden; background: #030712; border: 1px solid var(--border-gold); box-shadow: var(--glass-shadow);">
              
              <!-- Ambient & Dimmer Lighting Overlay -->
              <div id="ambient-overlay" style="position: absolute; inset: 0; background: ${this.selectedLight.ambientColor}; opacity: ${this.dimmerLevel / 100}; mix-blend-mode: color; pointer-events: none; transition: all 0.5s ease; z-index: 5;"></div>
              
              <!-- Architectural Ceiling Cove Light Beam -->
              <div id="cove-beam" style="position: absolute; top: 0; left: 0; right: 0; height: 18px; background: ${this.selectedLight.coveColor}; box-shadow: 0 10px 45px 15px ${this.selectedLight.coveColor}; opacity: ${(this.dimmerLevel / 100) * 0.9}; pointer-events: none; z-index: 6; transition: all 0.5s ease;"></div>

              <!-- Living Salon Architectural 3D Rendering (SVG with Perspective) -->
              <svg viewBox="0 0 600 420" width="100%" height="100%" style="display: block;" preserveAspectRatio="none">
                <defs>
                  <!-- Floor Perspective Shader -->
                  <linearGradient id="floor_depth" x1="0" y1="260" x2="0" y2="420" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#000000" stop-opacity="0.45"/>
                    <stop offset="1" stop-color="#000000" stop-opacity="0"/>
                  </linearGradient>

                  <!-- Marble Vein Pattern -->
                  <pattern id="pat-marble" width="120" height="80" patternUnits="userSpaceOnUse">
                    <rect width="120" height="80" fill="#f8fafc"/>
                    <path d="M0,20 Q40,60 80,10 T120,40" stroke="#cbd5e1" stroke-width="2.5" fill="none"/>
                    <path d="M20,80 Q70,30 110,70" stroke="#f59e0b" stroke-opacity="0.4" stroke-width="1.5" fill="none"/>
                  </pattern>

                  <!-- Travertine Lines Pattern -->
                  <pattern id="pat-travertine" width="100" height="40" patternUnits="userSpaceOnUse">
                    <rect width="100" height="40" fill="#e7e5e4"/>
                    <line x1="0" y1="10" x2="100" y2="10" stroke="#d6d3d1" stroke-width="1.8"/>
                    <line x1="0" y1="22" x2="100" y2="22" stroke="#a8a29e" stroke-width="1.2"/>
                    <line x1="0" y1="34" x2="100" y2="34" stroke="#d6d3d1" stroke-width="1.5"/>
                  </pattern>

                  <!-- Chevron Parquet Pattern -->
                  <pattern id="pat-chevron" width="60" height="60" patternUnits="userSpaceOnUse">
                    <rect width="60" height="60" fill="#451a03"/>
                    <path d="M0,30 L30,0 L60,30 L30,60 Z" stroke="#78350f" stroke-width="2" fill="#58240c"/>
                  </pattern>

                  <!-- Microcement Pattern -->
                  <pattern id="pat-cement" width="80" height="80" patternUnits="userSpaceOnUse">
                    <rect width="80" height="80" fill="#475569"/>
                    <circle cx="20" cy="30" r="15" fill="#334155" fill-opacity="0.4"/>
                    <circle cx="60" cy="65" r="20" fill="#64748b" fill-opacity="0.3"/>
                  </pattern>

                  <!-- Wall Fluted Grooves -->
                  <pattern id="pat-fluted" width="20" height="260" patternUnits="userSpaceOnUse">
                    <rect width="20" height="260" fill="#fef3c7"/>
                    <rect x="10" y="0" width="10" height="260" fill="#d97706" fill-opacity="0.35"/>
                  </pattern>

                  <!-- Wall Venetian Marmorino -->
                  <pattern id="pat-venetian" width="100" height="100" patternUnits="userSpaceOnUse">
                    <rect width="100" height="100" fill="#f1f5f9"/>
                    <path d="M0,0 Q50,80 100,20 T100,100 L0,100 Z" fill="#e2e8f0" fill-opacity="0.4"/>
                  </pattern>

                  <!-- Wall Acoustic Slats -->
                  <pattern id="pat-slats" width="18" height="260" patternUnits="userSpaceOnUse">
                    <rect width="18" height="260" fill="#0f172a"/>
                    <rect x="0" y="0" width="11" height="260" fill="#b45309"/>
                  </pattern>

                  <!-- Wall Brass Panels -->
                  <pattern id="pat-brass" width="80" height="260" patternUnits="userSpaceOnUse">
                    <rect width="80" height="260" fill="#d97706"/>
                    <line x1="78" y1="0" x2="78" y2="260" stroke="#78350f" stroke-width="2"/>
                    <rect x="0" y="0" width="76" height="260" fill="#f59e0b" fill-opacity="0.25"/>
                  </pattern>
                </defs>

                <!-- Back Wall Surface (Cladding Material) -->
                <polygon points="60,20 540,20 540,260 60,260" fill="${this.getWallPatternRef()}"/>

                <!-- Perspective Left Wall with Panoramic Glass Window to Sunset -->
                <polygon points="0,0 60,20 60,260 0,330" fill="#0f172a"/>
                <polygon points="5,15 55,28 55,250 5,315" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="1.5"/>
                <!-- Skyline Horizon seen through window -->
                <line x1="5" y1="180" x2="55" y2="170" stroke="#f59e0b" stroke-width="2"/>
                <polygon points="12,175 18,130 25,174" fill="#030712"/>
                <polygon points="30,172 38,110 44,171" fill="#030712"/>

                <!-- Perspective Right Wall -->
                <polygon points="540,20 600,0 600,330 540,260" fill="#1e293b"/>

                <!-- Architectural Flooring (Perspective Trapezoid) -->
                <polygon points="60,260 540,260 600,420 0,420" fill="${this.getFloorPatternRef()}"/>
                <polygon points="60,260 540,260 600,420 0,420" fill="url(#floor_depth)"/>

                <!-- Architectural Downlight Cone -->
                <polygon points="300,20 200,420 400,420" fill="${this.selectedLight.coveColor}" fill-opacity="${(this.dimmerLevel / 100) * 0.12}"/>

                <!-- Minimalist Italian Designer Sofa (Perspective Silhouette) -->
                <!-- Sofa Shadow -->
                <ellipse cx="310" cy="345" rx="140" ry="22" fill="#000000" fill-opacity="0.6"/>
                <!-- Sofa Base & Cushions -->
                <rect x="180" y="280" width="240" height="50" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
                <rect x="200" y="260" width="100" height="30" rx="8" fill="#334155"/>
                <rect x="310" y="260" width="100" height="30" rx="8" fill="#334155"/>
                <!-- Velvet Accent Pillows in Emerald & Gold -->
                <rect x="190" y="265" width="28" height="28" rx="4" fill="#10b981"/>
                <rect x="390" y="265" width="28" height="28" rx="4" fill="#f59e0b"/>

                <!-- Sculptural Low Travertine Coffee Table -->
                <ellipse cx="305" cy="370" rx="60" ry="16" fill="#000000" fill-opacity="0.4"/>
                <ellipse cx="305" cy="362" rx="55" ry="14" fill="#e7e5e4" stroke="#a8a29e" stroke-width="1.5"/>
                <rect x="298" y="362" width="14" height="12" fill="#78716c"/>

                <!-- Architectural Arc Floor Lamp -->
                <path d="M480,380 Q495,140 400,120" stroke="#d97706" stroke-width="3" fill="none"/>
                <circle cx="480" cy="380" r="10" fill="#0f172a" stroke="#d97706" stroke-width="2"/>
                <ellipse cx="395" cy="125" rx="18" ry="8" fill="#f59e0b" fill-opacity="0.9"/>
                <polygon points="380,128 350,220 440,220" fill="#fbbf24" fill-opacity="${(this.dimmerLevel / 100) * 0.2}"/>
              </svg>

              <!-- Floating Live Stats Badge Overlay -->
              <div style="position: absolute; bottom: 16px; left: 16px; [dir=ltr]& { left: auto; right: 16px; }; background: var(--bg-glass-heavy); backdrop-filter: blur(14px); padding: 10px 16px; border-radius: 12px; border: 1px solid var(--border-gold); z-index: 10; display: flex; align-items: center; gap: 14px;">
                <div>
                  <div style="font-size: 0.72rem; color: var(--text-muted);">${i18n.t('harmonyScoreLabel')}</div>
                  <div class="font-mono" style="font-size: 1.15rem; font-weight: 800; color: var(--accent-gold);">
                    ${harmony.score} / 100
                  </div>
                </div>
                <div style="height: 24px; width: 1px; background: var(--border-subtle);"></div>
                <div>
                  <div style="font-size: 0.72rem; color: var(--text-muted);">${i18n.t('acousticLabel')}</div>
                  <div class="font-mono" style="font-size: 1.15rem; font-weight: 800; color: var(--accent-cyan);">
                    ${(harmony.acousticScore / 100).toFixed(2)}
                  </div>
                </div>
              </div>

            </div>

            <!-- Material Synergy Feedback Box -->
            <div style="margin-top: 14px; background: var(--bg-secondary); padding: 16px 20px; border-radius: 16px; border: 1px solid var(--border-subtle);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-size: 0.82rem; font-weight: 700; color: var(--accent-gold);">
                  ✨ ${isAr ? 'تقييم التوافق المعماري والراحة الحسية' : 'Architectural Sensory Evaluation'}
                </span>
                <span class="font-mono" style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary);">
                  ${i18n.t('livingRoomEstimateLabel')} ${harmony.totalAreaCost50m2.toLocaleString('en-US')} ر.س
                </span>
              </div>
              <p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">
                ${isAr ? harmony.evaluationAr : harmony.evaluationEn}
              </p>
              
              <button id="btn-apply-materials" class="btn btn-gold" style="width: 100%; margin-top: 14px; padding: 12px; font-size: 0.9rem;">
                <span>🚀</span> ${i18n.t('applyMaterialsToEstimator')}
              </button>
            </div>
          </div>

          <!-- RIGHT: Controls for Lighting & Materials -->
          <div style="display: flex; flex-direction: column; gap: 24px;">
            
            <!-- 1. Lighting Mode Selector -->
            <div>
              <div style="font-weight: 700; font-size: 1rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <span>☀️</span> ${i18n.t('lightModeTitle')}
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 14px;">
                ${LIGHTING_MODES.map((mode) => {
                  const isSelected = this.selectedLight.id === mode.id;
                  return `
                    <div class="light-mode-card" data-mode-id="${mode.id}" style="padding: 12px 14px; border-radius: 14px; cursor: pointer; border: 1.5px solid ${isSelected ? 'var(--accent-gold)' : 'var(--border-subtle)'}; background: ${isSelected ? 'rgba(245, 158, 11, 0.12)' : 'var(--bg-secondary)'}; transition: var(--transition-smooth);">
                      <div style="font-weight: 700; font-size: 0.86rem; color: ${isSelected ? 'var(--accent-gold)' : 'var(--text-primary)'}; margin-bottom: 2px;">
                        ${isAr ? mode.nameAr : mode.nameEn}
                      </div>
                      <div style="font-size: 0.75rem; color: var(--text-muted);">${isAr ? mode.subtitleAr : mode.subtitleEn}</div>
                    </div>
                  `;
                }).join('')}
              </div>

              <!-- Dimmer Slider -->
              <div style="background: var(--bg-secondary); padding: 14px 18px; border-radius: 14px; border: 1px solid var(--border-subtle);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.85rem;">
                  <span style="color: var(--text-secondary); font-weight: 600;">${i18n.t('lightDimmerLabel')}</span>
                  <span id="dimmer-val" class="font-mono" style="font-weight: 700; color: var(--accent-gold);">${this.dimmerLevel}%</span>
                </div>
                <input type="range" id="dimmer-range" class="custom-range" min="15" max="100" step="5" value="${this.dimmerLevel}">
              </div>
            </div>

            <!-- 2. Flooring Material Selector -->
            <div>
              <div style="font-weight: 700; font-size: 1rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <span>🏛️</span> ${i18n.t('floorSelectTitle')}
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                ${FLOORING_MATERIALS.map((floor) => {
                  const isSelected = this.selectedFloor.id === floor.id;
                  return `
                    <div class="swatch-card floor-card" data-floor-id="${floor.id}" style="padding: 14px; border-radius: 14px; cursor: pointer; border: 1.5px solid ${isSelected ? 'var(--accent-gold)' : 'var(--border-subtle)'}; background: ${isSelected ? 'var(--bg-card-hover)' : 'var(--bg-secondary)'}; position: relative; transition: var(--transition-smooth);">
                      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                        <div style="width: 24px; height: 24px; border-radius: 6px; background: ${floor.textureColor}; border: 1px solid var(--border-medium);"></div>
                        <h4 style="font-size: 0.86rem; font-weight: 700; color: var(--text-primary); margin: 0;">${isAr ? floor.nameAr : floor.nameEn}</h4>
                      </div>
                      <div style="display: flex; justify-content: space-between; font-size: 0.78rem; color: var(--text-muted);">
                        <span>${isAr ? floor.originAr : floor.originEn}</span>
                        <strong class="font-mono" style="color: var(--accent-gold);">${floor.pricePerM2} ر.س/م²</strong>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- 3. Wall Cladding Selector -->
            <div>
              <div style="font-weight: 700; font-size: 1rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <span>🧱</span> ${i18n.t('wallSelectTitle')}
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                ${WALL_MATERIALS.map((wall) => {
                  const isSelected = this.selectedWall.id === wall.id;
                  return `
                    <div class="swatch-card wall-card" data-wall-id="${wall.id}" style="padding: 14px; border-radius: 14px; cursor: pointer; border: 1.5px solid ${isSelected ? 'var(--accent-cyan)' : 'var(--border-subtle)'}; background: ${isSelected ? 'var(--bg-card-hover)' : 'var(--bg-secondary)'}; position: relative; transition: var(--transition-smooth);">
                      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                        <div style="width: 24px; height: 24px; border-radius: 6px; background: ${wall.textureColor}; border: 1px solid var(--border-medium);"></div>
                        <h4 style="font-size: 0.86rem; font-weight: 700; color: var(--text-primary); margin: 0;">${isAr ? wall.nameAr : wall.nameEn}</h4>
                      </div>
                      <div style="display: flex; justify-content: space-between; font-size: 0.78rem; color: var(--text-muted);">
                        <span>${isAr ? wall.originAr : wall.originEn}</span>
                        <strong class="font-mono" style="color: var(--accent-cyan);">${wall.pricePerM2} ر.س/م²</strong>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

          </div>

        </div>

      </div>
    `;

    MotionFX.initTiltCards();
  }

  private getFloorPatternRef(): string {
    switch (this.selectedFloor.id) {
      case 'statuario-marble': return 'url(#pat-marble)';
      case 'saudi-travertine': return 'url(#pat-travertine)';
      case 'american-walnut': return 'url(#pat-chevron)';
      case 'seamless-microcement': return 'url(#pat-cement)';
      default: return 'url(#pat-marble)';
    }
  }

  private getWallPatternRef(): string {
    switch (this.selectedWall.id) {
      case 'carved-riyadh-stone': return 'url(#pat-fluted)';
      case 'venetian-plaster': return 'url(#pat-venetian)';
      case 'acoustic-oak-slats': return 'url(#pat-slats)';
      case 'brushed-brass-panels': return 'url(#pat-brass)';
      default: return 'url(#pat-slats)';
    }
  }

  private bindEvents() {
    // Light Mode Cards
    document.querySelectorAll('.light-mode-card').forEach((card) => {
      card.addEventListener('click', () => {
        const modeId = card.getAttribute('data-mode-id');
        const found = LIGHTING_MODES.find((m) => m.id === modeId);
        if (found) {
          audioEngine.playTierChime();
          this.selectedLight = found;
          this.render();
          this.bindEvents();
        }
      });
    });

    // Dimmer Range
    const dimmerRange = document.getElementById('dimmer-range') as HTMLInputElement | null;
    const dimmerVal = document.getElementById('dimmer-val');
    dimmerRange?.addEventListener('input', () => {
      audioEngine.playSliderTick();
      this.dimmerLevel = parseInt(dimmerRange.value, 10);
      if (dimmerVal) dimmerVal.textContent = `${this.dimmerLevel}%`;

      const amb = document.getElementById('ambient-overlay');
      if (amb) amb.style.opacity = String(this.dimmerLevel / 100);

      const cove = document.getElementById('cove-beam');
      if (cove) cove.style.opacity = String((this.dimmerLevel / 100) * 0.9);
    });

    // Floor Cards
    document.querySelectorAll('.floor-card').forEach((card) => {
      card.addEventListener('click', () => {
        const floorId = card.getAttribute('data-floor-id');
        const found = FLOORING_MATERIALS.find((f) => f.id === floorId);
        if (found) {
          audioEngine.playClick();
          this.selectedFloor = found;
          this.render();
          this.bindEvents();
        }
      });
    });

    // Wall Cards
    document.querySelectorAll('.wall-card').forEach((card) => {
      card.addEventListener('click', () => {
        const wallId = card.getAttribute('data-wall-id');
        const found = WALL_MATERIALS.find((w) => w.id === wallId);
        if (found) {
          audioEngine.playClick();
          this.selectedWall = found;
          this.render();
          this.bindEvents();
        }
      });
    });

    // Apply Materials to Estimator
    const btnApply = document.getElementById('btn-apply-materials');
    btnApply?.addEventListener('click', () => {
      audioEngine.playClick();
      // Determine best tier matching the luxury selection
      let tier: 'shell' | 'turnkey' | 'royal' | 'salmani' = 'royal';
      if (this.selectedFloor.id === 'statuario-marble' && this.selectedWall.id === 'carved-riyadh-stone') {
        tier = 'salmani';
      } else if (this.selectedFloor.id === 'seamless-microcement') {
        tier = 'turnkey';
      }
      this.onApplyToEstimatorCallback(tier);
    });
  }
}