import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Idioma} from "./core/utils/enum";


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
    this.translate.setDefaultLang(Idioma.ES);

    // Carga las traducciones
    this.translate.use(Idioma.ES);
  }

  cambiarIdioma(idioma: string) {
    this.translate.use(idioma);
  }
}
