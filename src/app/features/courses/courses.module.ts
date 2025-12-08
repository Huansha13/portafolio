import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/**
 * CoursesModule
 * 
 * Módulo para gestionar cursos gratuitos.
 * Incluye listado de cursos, detalles y lecciones.
 */

const routes: Routes = [
  // {
  //   path: '',
  //   component: CoursesPageComponent
  // },
  // {
  //   path: ':id',
  //   component: CourseDetailPageComponent
  // }
];

@NgModule({
  declarations: [
    // Componentes del módulo de cursos
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoursesModule { }
