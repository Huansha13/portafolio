import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from './resume/pages/resume/resume.component';
import {BodyComponent} from './work/body/body.component';
import {ContactComponent} from './contact/pages/contact/contact.component';
import {BlogComponent} from './blog/pages/blog/blog.component';

// @ts-ignore
const routes: Routes = [
  {
    path:'', component:BodyComponent, pathMatch:'full', redirectTo:''
  },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent }
 ];


// @ts-ignore
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
