import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Idioma, Tamanos} from "./core/utils/enum";
import {SettingsService} from "./core/utils/settings.service";
import Typewriter from 't-writer.js';
import {Responsive} from "./core/model/resoponsive";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  textLoader: string = `while(true) {
                            <b class="text-primary">yefer<span class="text-900">Frank();</span></b>
                        }`;

  constructor(private translate: TranslateService,
              public settings: SettingsService) {
    this.onResize();
  }

  ngOnInit(): void {
    // Configura el idioma inicial
    this.translate.setDefaultLang(Idioma.ES);

    // Carga las traducciones
    this.translate.use(Idioma.ES);
  }

  ngAfterViewInit() {
    this.writerLoader();
  }

  cambiarIdioma(idioma: string) {
    this.translate.use(idioma);
  }

  writerLoader(): void {
    const target2 = document.querySelector('.text-loader2');

    const writer1 = new Typewriter(target2, {
      typeSpeed: 60,
      typeColor: 'var(--primary-color)',
      cursorColor: 'var(--text-color)'
    });

    const writer2 = new Typewriter(target2, {
      typeSpeed: 60,
      typeColor: 'var(--text-color)',
      cursorColor: 'var(--text-color)'
    });

    const writer3 = new Typewriter(target2, {
      typeSpeed: 60,
      typeColor: 'var(--text-color)',
      cursorColor: 'var(--text-color)',
    });

    writer1.type('Yefer')
      .removeCursor()
      .then(writer2.start.bind(writer2))
      .start();

    writer2.type(`.frank()`)
      .removeCursor()
      .then(writer3.start.bind(writer3))

    writer3
      .type(';')
  }

  @HostListener('window:resize')
  onResize(): void {
    // DETECTAR RESPONSIVE
    const anchoVentana = window.innerWidth;
    const responsiveInstance = new Responsive();
    responsiveInstance.sm = anchoVentana < Tamanos.MD;
    responsiveInstance.md = anchoVentana >= Tamanos.MD && anchoVentana < Tamanos.LG;
    responsiveInstance.lg = anchoVentana >= Tamanos.LG
    this.settings.view = responsiveInstance;
  }

  private detectarPantallaMovil(): boolean {
    const anchoVentana = window.innerWidth;
    const altoVentana = window.innerHeight;
    return anchoVentana <= 991 || (anchoVentana > altoVentana && altoVentana <= 500);
  }

}
