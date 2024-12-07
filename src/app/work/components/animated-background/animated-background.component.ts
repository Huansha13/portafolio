import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-animated-background',
  templateUrl: './animated-background.component.html',
  styleUrl: './animated-background.component.scss'
})
export class AnimatedBackgroundComponent {
  isPaused: boolean = false;

  @HostListener('document:visibilitychange', ['$event'])
  handleVisibilityChange() {
    this.isPaused = document.hidden;
    const elementsToAnimate = document.querySelectorAll('.circles li, .imagen-flotante');

    elementsToAnimate.forEach(circle => {
      const circleElement = circle as HTMLElement;
      if (this.isPaused) {
        circleElement.style.animationPlayState = 'running';
      }
    });
  }
}
