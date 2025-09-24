import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-background',
  templateUrl: './animated-background.component.html',
  styleUrls: ['./animated-background.component.scss']
})
export class AnimatedBackgroundComponent implements OnInit {

  // Particles used by the template *ngFor
  particles: Array<{
    left: number;      // percentage 0-100
    delay: string;     // e.g. '0s'
    duration: string;  // e.g. '20s'
    size: string;      // e.g. '2px'
    opacity: number;   // 0-1
  }> = [];

  ngOnInit(): void {
    this.generateParticles(28);
  }

  generateParticles(count: number) {
    const rnd = (min: number, max: number) => Math.random() * (max - min) + min;
    this.particles = Array.from({ length: count }, (_v, _i) => {
      const left = rnd(0, 100);
      const delay = `${Math.round(rnd(0, 16))}s`;
      const duration = `${Math.round(rnd(16, 28))}s`;
      const size = `${rnd(1, 3).toFixed(1)}px`;
      const opacity = Number(rnd(0.35, 0.9).toFixed(2));
      return { left, delay, duration, size, opacity };
    });
  }

  trackByIndex(index: number) {
    return index;
  }
}
