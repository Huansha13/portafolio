import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import {NavBarModule} from '../nav-bar/nav-bar.module';
import {FooterModule} from '../footer/footer.module';
import { GitHubComponent } from './git-hub/git-hub.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [BodyComponent, GitHubComponent],
  exports: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    NavBarModule,
    FooterModule,
    HttpClientModule,
    RouterLink
  ]

})
export class WorkModule { }
