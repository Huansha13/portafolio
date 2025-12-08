import { Component, OnInit } from '@angular/core';

type Theme = 'spring' | 'summer' | 'autumn' | 'winter' | 'halloween' | 'christmas' | 'newyear' | 'fiestas-patrias';

@Component({
  selector: 'app-animated-background',
  templateUrl: './animated-background.component.html',
  styleUrls: ['./animated-background.component.scss']
})
export class AnimatedBackgroundComponent implements OnInit {
  currentTheme: Theme = 'spring';
  particles: Array<{
    left: number;
    top: number;
    delay: string;
    duration: string;
    size: string;
    opacity: number;
  }> = [];

  ngOnInit(): void {
    this.currentTheme = this.getCurrentTheme();
    this.generateParticles(20);
  }

  getCurrentTheme(): Theme {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    // Halloween (25-31 octubre)
    if (month === 10 && day >= 25) return 'halloween';
    
    // Navidad (1-25 diciembre)
    if (month === 12 && day <= 25) return 'christmas';
    
    // Año Nuevo (26 dic - 7 ene)
    if ((month === 12 && day > 25) || (month === 1 && day <= 7)) return 'newyear';
    
    // Fiestas Patrias Perú (23-31 julio)
    if (month === 7 && day >= 23) return 'fiestas-patrias';

    // Estaciones
    if (month >= 3 && month <= 5) return 'spring';
    if (month >= 6 && month <= 8) return 'summer';
    if (month >= 9 && month <= 11) return 'autumn';
    return 'winter';
  }

  generateParticles(count: number) {
    const rnd = (min: number, max: number) => Math.random() * (max - min) + min;
    this.particles = Array.from({ length: count }, () => ({
      left: rnd(0, 100),
      top: rnd(-20, 100),
      delay: `${rnd(0, 10).toFixed(1)}s`,
      duration: `${rnd(15, 30).toFixed(1)}s`,
      size: `${rnd(4, 12).toFixed(1)}px`,
      opacity: rnd(0.3, 0.7)
    }));
  }

  trackByIndex(index: number) {
    return index;
  }
}
