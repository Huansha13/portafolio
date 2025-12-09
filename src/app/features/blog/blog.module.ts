import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogSectionComponent } from './components/blog-section/blog-section.component';
import { BlogHeaderComponent } from './components/blog-header/blog-header.component';
import { BlogListPageComponent } from './pages/blog-list-page/blog-list-page.component';
import { BlogDetailPageComponent } from './pages/blog-detail-page/blog-detail-page.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: '', component: BlogListPageComponent },
  { path: ':slug', component: BlogDetailPageComponent }
];

@NgModule({
  declarations: [
    BlogComponent,
    BlogSectionComponent,
    BlogHeaderComponent,
    BlogListPageComponent,
    BlogDetailPageComponent,
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
    TranslateModule,
    MarkdownModule.forChild(),
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    BlogSectionComponent
  ]
})
export class BlogModule { }
