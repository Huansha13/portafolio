import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './pages/resume/resume.component';

@NgModule({
  declarations: [ResumeComponent],
  exports:[ResumeComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
