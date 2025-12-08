import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from './features/resume/pages/resume/resume.component';
import {BodyComponent} from './features/home/work/body/body.component';
import {ContactComponent} from './features/contact/pages/contact/contact.component';
import {GitHubComponent} from "./features/home/work/components/git-hub/git-hub.component";

const routes: Routes = [
  {
    path: '', component: BodyComponent
  },
  {path: 'resume', component: ResumeComponent},
  {path: 'contact', component: ContactComponent},
  {
    path: 'blog',
    loadChildren: () => import('./features/blog/blog.module').then(m => m.BlogModule)
  },
  {path: 'git-hub', component: GitHubComponent},
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
