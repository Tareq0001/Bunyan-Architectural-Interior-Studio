/**
 * Interactive 3D Architectural Blueprint Canvas
 * Renders an isometric perspective drafting grid and floating golden nodes reacting to mouse coordinates.
 */

export class BlueprintCanvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private width: number = 0;
  private height: number = 0;
  private dpr: number = 1;
  private mouseX: number = 0;
  private mouseY: number = 0;
  private targetMouseX: number = 0;
  private targetMouseY: number = 0;
  private particles: Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    baseAlpha: number;
  }> = [];
  private animId: number = 0;

  constructor(canvasId: string) {
    const el = document.getElementById(canvasId);
    if (!el || !(el instanceof HTMLCanvasElement)) {
      throw new Error(`Canvas element #${canvasId} not found`);
    }
    this.canvas = el;
    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get 2D context');
    this.ctx = ctx;

    this.init();
  }

  private init() {
    this.handleResize();
    window.addEventListener('resize', () => this.handleResize());
    window.addEventListener('mousemove', (e) => {
      this.targetMouseX = e.clientX;
      this.targetMouseY = e.clientY;
    });

    // Generate architectural particles
    const particleCount = Math.min(Math.floor((this.width * this.height) / 25000), 55);
    this.particles = [];
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.4 + 0.15
      });
    }

    this.startLoop();
  }

  private handleResize() {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;

    this.ctx.scale(this.dpr, this.dpr);
  }

  private startLoop() {
    const render = () => {
      this.render();
      this.animId = requestAnimationFrame(render);
    };
    this.animId = requestAnimationFrame(render);
  }

  private render() {
    // Smooth mouse interpolation
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

    this.ctx.clearRect(0, 0, this.width, this.height);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const gridColor = isLight ? 'rgba(15, 23, 42, 0.04)' : 'rgba(245, 158, 11, 0.04)';
    const cyanGrid = isLight ? 'rgba(2, 132, 199, 0.03)' : 'rgba(56, 189, 248, 0.035)';
    const nodeColor = isLight ? 'rgba(217, 119, 6,' : 'rgba(245, 158, 11,';

    // 1. Draw subtle isometric perspective lines
    const gridSize = 80;
    const offsetX = (this.mouseX - this.width / 2) * 0.03;
    const offsetY = (this.mouseY - this.height / 2) * 0.03;

    this.ctx.beginPath();
    this.ctx.strokeStyle = gridColor;
    this.ctx.lineWidth = 1;

    // Vertical grid lines
    for (let x = -gridSize; x < this.width + gridSize; x += gridSize) {
      this.ctx.moveTo(x + offsetX, 0);
      this.ctx.lineTo(x + offsetX * 1.5, this.height);
    }

    // Horizontal grid lines
    for (let y = -gridSize; y < this.height + gridSize; y += gridSize) {
      this.ctx.moveTo(0, y + offsetY);
      this.ctx.lineTo(this.width, y + offsetY * 1.5);
    }
    this.ctx.stroke();

    // 2. Draw subtle secondary angled isometric diagonals
    this.ctx.beginPath();
    this.ctx.strokeStyle = cyanGrid;
    this.ctx.lineWidth = 0.8;
    const diagStep = gridSize * 2;
    for (let d = -this.height; d < this.width + this.height; d += diagStep) {
      this.ctx.moveTo(d + offsetX * 0.5, 0);
      this.ctx.lineTo(d + this.height + offsetX * 0.5, this.height);
    }
    this.ctx.stroke();

    // 3. Update & render particles (floating golden nodes)
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      // Mouse repulsion / attraction aura
      const dx = this.mouseX - p.x;
      const dy = this.mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 180) {
        const force = (180 - dist) / 180;
        p.x -= (dx / dist) * force * 1.5;
        p.y -= (dy / dist) * force * 1.5;
      }

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `${nodeColor} ${p.baseAlpha})`;
      this.ctx.fill();

      // Connect neighboring nodes
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dxx = p.x - p2.x;
        const dyy = p.y - p2.y;
        const pDist = Math.sqrt(dxx * dxx + dyy * dyy);
        if (pDist < 120) {
          const lineAlpha = (1 - pDist / 120) * 0.18;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `${nodeColor} ${lineAlpha})`;
          this.ctx.lineWidth = 0.75;
          this.ctx.stroke();
        }
      }
    }
  }

  public destroy() {
    cancelAnimationFrame(this.animId);
  }
}