import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './pages/resume/resume.component';
import {FooterModule} from '../footer/footer.module';

@NgModule({
  declarations: [ResumeComponent],
  exports:[ResumeComponent],
  imports: [
    CommonModule,
    FooterModule
  ]
})
export class PagesModule { }
