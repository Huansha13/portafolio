import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    // Configura el idioma inicial
    this.translate.setDefaultLang('es');
    // Carga las traducciones
    this.translate.use('es');
  }

  cambiarIdioma(idioma: string) {
    this.translate.use(idioma);
  }
}
