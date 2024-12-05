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
    const circles = document.querySelectorAll('.circles li');
    circles.forEach(circle => {
      const circleElement = circle as HTMLElement;
      if (this.isPaused) {
        circleElement.style.animationPlayState = 'paused';
      } else {
       setTimeout(() => {
        circleElement.style.animationPlayState = 'running';
       }, 2000);
      }
    });
  }
}
