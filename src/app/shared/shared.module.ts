import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * SharedModule
 * 
 * Este módulo contiene componentes, directivas y pipes reutilizables
 * que se comparten entre múltiples features de la aplicación.
 * 
 * Importar este módulo en cualquier feature que necesite acceso
 * a componentes compartidos.
 */
@NgModule({
  declarations: [
    // Aquí irán los componentes compartidos
    // Ejemplo: ButtonComponent, CardComponent, etc.
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    // Exportar componentes compartidos aquí
  ]
})
export class SharedModule { }
