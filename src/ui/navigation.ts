/**
 * Header Navigation, Theme Engine & Controls Orchestrator
 */

import { i18n } from './i18n';
import { audioEngine } from '../engine/audio';
import { LEAD_ARCHITECT_INFO } from '../data/sbc-standards';

export class Navigation {
  private currentTheme: 'dark' | 'light' = 'dark';

  constructor() {
    this.initTheme();
    this.render();
    this.bindEvents();

    i18n.subscribe(() => {
      this.render();
      this.bindEvents();
    });
  }

  private initTheme() {
    const saved = localStorage.getItem('bunyan_theme');
    if (saved === 'light' || saved === 'dark') {
      this.currentTheme = saved;
    } else {
      this.currentTheme = 'dark';
    }
    document.documentElement.setAttribute('data-theme', this.currentTheme);
  }

  public toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    localStorage.setItem('bunyan_theme', this.currentTheme);
    audioEngine.playClick();
    this.render();
    this.bindEvents();
  }

  private render() {
    const headerEl = document.getElementById('main-header');
    if (!headerEl) return;
    const isAr = i18n.getLang() === 'ar';
    const isLight = this.currentTheme === 'light';
    const isMuted = audioEngine.getIsMuted();

    headerEl.innerHTML = `
      <div class="container" style="display: flex; align-items: center; justify-content: space-between; height: var(--header-height);">
        
        <!-- Brand & Lead Architect Credit -->
        <a href="#" style="display: flex; align-items: center; gap: 14px;">
          <div style="width: 44px; height: 44px; border-radius: 12px; background: linear-gradient(135deg, var(--accent-gold), var(--accent-gold-dark)); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: #030712; font-weight: 900; box-shadow: 0 0 20px var(--accent-gold-glow);">
            ب
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="font-display" style="font-size: 1.5rem; font-weight: 800; color: var(--accent-gold); letter-spacing: 0.05em; line-height: 1;">
                ${i18n.t('brandName')}
              </span>
              <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600; padding: 2px 6px; border-radius: 4px; background: var(--bg-card); border: 1px solid var(--border-subtle);">
                STUDIO
              </span>
            </div>
            <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
              <span>${i18n.t('leadArchitectLabel')}</span> 
              <strong style="color: var(--accent-gold); font-weight: 700;">${isAr ? LEAD_ARCHITECT_INFO.nameAr : LEAD_ARCHITECT_INFO.nameEn}</strong>
            </div>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="nav-links" style="display: flex; align-items: center; gap: 24px; font-size: 0.9rem; font-weight: 600;">
          <a href="#estimator-section" class="nav-link" style="color: var(--text-primary); transition: var(--transition-smooth);">
            ${i18n.t('navEstimator')}
          </a>
          <a href="#studio-section" class="nav-link" style="color: var(--text-secondary); transition: var(--transition-smooth);">
            ${i18n.t('navStudio')}
          </a>
          <a href="#atlas-section" class="nav-link" style="color: var(--text-secondary); transition: var(--transition-smooth);">
            ${i18n.t('navAtlas')}
          </a>
          <a href="#standards-section" class="nav-link" style="color: var(--text-secondary); transition: var(--transition-smooth);">
            ${i18n.t('navStandards')}
          </a>
          <a href="#comparison-section" class="nav-link" style="color: var(--text-secondary); transition: var(--transition-smooth);">
            ${i18n.t('navSaved')}
          </a>
        </nav>

        <!-- Right Quick Actions (Theme, Sound, Lang, CTA) -->
        <div style="display: flex; align-items: center; gap: 10px;">
          
          <!-- Sound Toggle -->
          <button id="btn-toggle-sound" class="btn btn-glass" style="padding: 8px 12px; border-radius: 10px;" title="${i18n.t('soundToggle')}">
            <span>${isMuted ? '🔇' : '🔊'}</span>
          </button>

          <!-- Theme Toggle -->
          <button id="btn-toggle-theme" class="btn btn-glass" style="padding: 8px 12px; border-radius: 10px;" title="${isLight ? i18n.t('themeDark') : i18n.t('themeLight')}">
            <span>${isLight ? '🌙' : '☀️'}</span>
          </button>

          <!-- Language Toggle -->
          <button id="btn-toggle-lang" class="btn btn-glass" style="padding: 8px 14px; font-weight: 700; border-radius: 10px;">
            <span>${isAr ? 'EN' : 'العربية'}</span>
          </button>

          <!-- Primary CTA Button -->
          <a href="#estimator-section" class="btn btn-gold" style="padding: 10px 20px; font-size: 0.88rem;">
            <span>📐</span> ${i18n.t('ctaEstimateNow')}
          </a>

        </div>

      </div>
    `;
  }

  private bindEvents() {
    // Theme Toggle
    document.getElementById('btn-toggle-theme')?.addEventListener('click', () => {
      this.toggleTheme();
    });

    // Sound Toggle
    document.getElementById('btn-toggle-sound')?.addEventListener('click', () => {
      const isMuted = audioEngine.toggleMute();
      audioEngine.playClick();
      const btn = document.getElementById('btn-toggle-sound');
      if (btn) btn.innerHTML = `<span>${isMuted ? '🔇' : '🔊'}</span>`;
    });

    // Language Toggle
    document.getElementById('btn-toggle-lang')?.addEventListener('click', () => {
      audioEngine.playClick();
      i18n.toggleLanguage();
    });

    // Nav Links hover & click
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        audioEngine.playClick();
      });
    });
  }
}