import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BodyComponent} from './body/body.component';
import {NavBarModule} from '../../layout/navbar/nav-bar.module';
import {FooterModule} from '../../layout/footer/footer.module';
import {GitHubComponent} from './components/git-hub/git-hub.component';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {PrimeNgModule} from "../../prime-ng/prime-ng.module";
import {TerminalComponent} from 'src/app/core/components/terminal/terminal.component';
import {WsCodeComponent} from 'src/app/core/components/ws-code/ws-code.component';
import {ProyectosComponent} from "./components/proyectos/proyectos.component";
import {SobreMiComponent} from "./components/sobre-mi/sobre-mi.component";
import {AnimatedBackgroundComponent} from "./components/animated-background/animated-background.component";
import {PresentacionComponent} from "./components/presentacion/presentacion.component";
import {HabilidadesComponent} from "./components/habilidades/habilidades.component";
import {CertificadoComponent} from "./components/certificado/certificado.component";
import { ViewPdfComponent } from 'src/app/core/components/view-pdf/view-pdf.component';
import {ExperienciaComponent} from "./components/experiencia/experiencia.component";
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { BlogModule } from '../blog/blog.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    BodyComponent,
    GitHubComponent,
    TerminalComponent,
    WsCodeComponent,
    ProyectosComponent,
    SobreMiComponent,
    AnimatedBackgroundComponent,
    PresentacionComponent,
    HabilidadesComponent,
    CertificadoComponent,
    ViewPdfComponent,
    ExperienciaComponent
  ],
  exports: [
    BodyComponent,
    TerminalComponent,
    WsCodeComponent,
    ProyectosComponent,
    SobreMiComponent,
    AnimatedBackgroundComponent,
    HabilidadesComponent,
    CertificadoComponent,
    ViewPdfComponent,
    ExperienciaComponent
  ],
  imports: [
    CommonModule,
    NavBarModule,
    FooterModule,
    RouterLink,
    TranslateModule,
    PrimeNgModule,
    BrowserModule,
    PdfViewerModule,
    FormsModule,
    BlogModule,
    SharedModule
  ],


})
export class WorkModule {
}
