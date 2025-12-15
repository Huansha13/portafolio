import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from './directives/scroll-animate.directive';

/**
 * SharedModule
 * 
 * Este módulo contiene componentes, directivas y pipes reutilizables
 * que se comparten entre múltiples features de la aplicación.
 * 
 * Importar este módulo en cualquier feature que necesite acceso
 * a componentes compartidos.
 * 
 */
@NgModule({
  declarations: [
    ScrollAnimateDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ScrollAnimateDirective
  ]
})
export class SharedModule { }
