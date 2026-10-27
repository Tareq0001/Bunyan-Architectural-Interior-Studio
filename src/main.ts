/**
 * BUNYAN ARCHITECTURAL & INTERIOR STUDIO - MAIN ORCHESTRATOR
 * Lead Architect & Designer: أ. طارق ابوعشي (Tareq Aboushi)
 */

import { BlueprintCanvas } from './engine/blueprint-canvas';
import { MotionFX } from './engine/motion-fx';
import { i18n } from './ui/i18n';
import { Navigation } from './ui/navigation';
import { CalculatorView } from './ui/calculator-view';
import { LightingStudioView } from './ui/lighting-studio-view';
import { AtlasView } from './ui/atlas-view';
import { BOQModal } from './ui/boq-modal';
import { ComparisonView } from './ui/comparison-view';
import { SBC_STANDARDS } from './data/sbc-standards';

class BunyanApp {
  private blueprintCanvas: BlueprintCanvas | null = null;
  private navigation: Navigation | null = null;
  private calculatorView: CalculatorView | null = null;
  private studioView: LightingStudioView | null = null;
  private atlasView: AtlasView | null = null;
  private comparisonView: ComparisonView | null = null;
  private boqModal: BOQModal | null = null;

  public init() {
    // 1. Initialize i18n
    i18n.init();

    // 2. Initialize 3D Blueprint Canvas
    try {
      this.blueprintCanvas = new BlueprintCanvas('blueprint-canvas');
    } catch (e) {
      console.warn('Canvas initialization notice:', e);
    }

    // 3. Initialize Header Navigation & Controls
    this.navigation = new Navigation();

    // 4. Initialize BOQ Modal
    this.boqModal = new BOQModal();

    // 5. Initialize Comparison View
    this.comparisonView = new ComparisonView('comparison-mount', (res) => {
      if (this.calculatorView) {
        this.calculatorView.setInput({
          landArea: res.landArea,
          finishingTier: res.finishingTier.id
        });
        const section = document.getElementById('estimator-section');
        section?.scrollIntoView({ behavior: 'smooth' });
      }
    });
    this.comparisonView.init();

    // 6. Initialize Cost Estimator View
    this.calculatorView = new CalculatorView(
      'calculator-mount',
      (res) => {
        this.boqModal?.open(res);
      },
      (res) => {
        this.comparisonView?.saveEstimate(res);
        const compSection = document.getElementById('comparison-section');
        compSection?.scrollIntoView({ behavior: 'smooth' });
      }
    );
    this.calculatorView.init();

    // 7. Initialize Room Lighting & Material Studio View
    this.studioView = new LightingStudioView('lighting-studio-mount', (tier) => {
      this.calculatorView?.setInput({ finishingTier: tier });
      const est = document.getElementById('estimator-section');
      est?.scrollIntoView({ behavior: 'smooth' });
    });
    this.studioView.init();

    // 8. Initialize Architectural Atlas View
    this.atlasView = new AtlasView('atlas-mount', (style) => {
      this.calculatorView?.setInput({
        landArea: style.presetEstimator.landArea,
        footprintRatio: style.presetEstimator.footprintRatio,
        hasBasement: style.presetEstimator.hasBasement,
        hasFirstFloor: style.presetEstimator.hasFirstFloor,
        hasPenthouseAnnex: style.presetEstimator.hasPenthouseAnnex,
        finishingTier: style.presetEstimator.finishingTier,
        selectedAddOns: style.presetEstimator.selectedAddOns
      });
      const est = document.getElementById('estimator-section');
      est?.scrollIntoView({ behavior: 'smooth' });
    });
    this.atlasView.init();

    // 9. Render SBC Standards Cards
    this.renderSBCCards();

    // 10. Subscribe to language changes for dynamic static cards
    i18n.subscribe(() => {
      this.renderSBCCards();
    });

    // 11. Trigger Motion & Staggered Scroll Reveals
    MotionFX.initScrollReveals();
    MotionFX.initTiltCards();

    // Animated Hero Counters
    document.querySelectorAll('[data-counter]').forEach((el) => {
      const target = parseInt(el.getAttribute('data-counter') || '0', 10);
      if (target > 0) {
        const isPercent = el.textContent?.includes('%');
        MotionFX.animateCounter(el as HTMLElement, target, 1.6, '', isPercent ? '%' : '');
      }
    });

    console.log('🏛️ Bunyan Architectural Studio initialized successfully | Lead Architect: أ. طارق ابوعشي');
  }

  private renderSBCCards() {
    const sbcContainer = document.getElementById('sbc-cards-grid');
    if (!sbcContainer) return;
    const isAr = i18n.getLang() === 'ar';

    sbcContainer.innerHTML = SBC_STANDARDS.map((sbc) => `
      <div class="tilt-card" style="padding: 22px; border-radius: 18px; border: 1px solid var(--border-subtle); background: var(--bg-secondary); display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span style="font-size: 1.8rem;">${sbc.icon}</span>
          <span class="badge badge-gold font-mono" style="font-size: 0.78rem;">${sbc.code}</span>
        </div>
        <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">
          ${isAr ? sbc.titleAr : sbc.titleEn}
        </h4>
        <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45; margin-bottom: 14px;">
          ${isAr ? sbc.scopeAr : sbc.scopeEn}
        </p>
        <div style="margin-top: auto; padding: 10px 14px; background: rgba(56, 189, 248, 0.08); border-radius: 10px; border: 1px solid var(--border-cyan); font-size: 0.76rem; color: var(--accent-cyan);">
          <strong>${isAr ? 'الاشتراط الفني:' : 'Requirement:'}</strong> ${isAr ? sbc.complianceRuleAr : sbc.complianceRuleEn}
        </div>
      </div>
    `).join('');

    MotionFX.initTiltCards();
  }
}

// Bootstrap on DOM load
window.addEventListener('DOMContentLoaded', () => {
  const app = new BunyanApp();
  app.init();
});