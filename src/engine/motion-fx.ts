/**
 * Motion & Cinematic Interaction Engine
 * GSAP staggered reveals, 3D card perspective tilt, specular spotlight, and confetti celebration.
 */

import { gsap } from 'gsap';
import confetti from 'canvas-confetti';

export class MotionFX {
  /**
   * Initializes 3D card tilt & spotlight effect on all elements matching selector
   */
  public static initTiltCards(selector: string = '.tilt-card') {
    const cards = document.querySelectorAll<HTMLElement>(selector);

    cards.forEach((card) => {
      // Remove existing listeners if any
      card.onmousemove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -7;
        const rotateY = ((x - centerX) / centerX) * 7;

        card.style.setProperty('--spot-x', `${x}px`);
        card.style.setProperty('--spot-y', `${y}px`);
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
      };

      card.onmouseleave = () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      };
    });
  }

  /**
   * Staggered GSAP reveal on scroll
   */
  public static initScrollReveals() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            gsap.fromTo(
              target,
              { opacity: 0, y: 35 },
              {
                opacity: 1,
                y: 0,
                duration: 0.85,
                ease: 'power3.out',
                stagger: 0.08,
                clearProps: 'transform'
              }
            );
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });
  }

  /**
   * Animated Number Counter
   */
  public static animateCounter(element: HTMLElement, targetValue: number, duration: number = 1.2, prefix: string = '', suffix: string = '') {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: targetValue,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        element.textContent = `${prefix}${Math.round(obj.val).toLocaleString('en-US')}${suffix}`;
      }
    });
  }

  /**
   * Fire celebration confetti with royal gold and cyan accents
   */
  public static fireCelebration() {
    try {
      const count = 180;
      const defaults = {
        origin: { y: 0.7 },
        zIndex: 10000
      };

      const fire = (particleRatio: number, opts: confetti.Options) => {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      };

      // Multi-tier burst with gold, amber, cyan and white
      fire(0.25, {
        spread: 26,
        startVelocity: 55,
        colors: ['#f59e0b', '#fbbf24', '#d97706']
      });
      fire(0.2, {
        spread: 60,
        colors: ['#38bdf8', '#0284c7', '#ffffff']
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
        colors: ['#10b981', '#f59e0b', '#38bdf8']
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
        colors: ['#fef3c7', '#dbeafe']
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
        colors: ['#f59e0b', '#38bdf8']
      });
    } catch {
      // Fallback if canvas-confetti encounters canvas issue
    }
  }
}