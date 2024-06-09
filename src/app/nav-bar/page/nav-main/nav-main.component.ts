import {Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ThemeService} from "../../../core/utils/theme.service";
import {Idioma, keysStorage, Theme} from "../../../core/utils/enum";
import {PrimeIcons} from 'primeng/api';
import {SelectButtonOptionClickEvent} from "primeng/selectbutton";
import {SettingsService} from "../../../core/utils/settings.service";

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss']
})
export class NavMainComponent implements OnInit {
  version: string = '3.2.1';
  _selectedTheme: Theme = Theme.DARK;
  active: boolean = true;
  idioma: string = Idioma.ES;
  optIdioma = [
    {name: 'Español', code: Idioma.ES},
    {name: 'English', code: Idioma.EN}
  ]
  stateOptionsTheme = this.getStateOptionsTheme();
  sidebarVisible: boolean = false;
  constructor(public themeService: ThemeService,
              public settings: SettingsService,
              private translate: TranslateService,
              private renderer: Renderer2,
              private el: ElementRef) {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Calcula la opacidad. Aquí estamos haciendo que la opacidad disminuya a medida que te desplazas hacia abajo.
    let opacidad = 1 - window.pageYOffset / window.innerHeight;

    // Asegúrate de que la opacidad esté entre 0 y 1.
    opacidad = Math.max(opacidad, 0);
    opacidad = Math.min(opacidad, 1);

    // Finalmente, establece la opacidad de la barra de navegación.
    const navBar = this.el.nativeElement.querySelector('#miNavBar');
    if (opacidad < 1) {
      this.renderer.setStyle(navBar, 'background-color', 'var(--surface-0)');
    } else {
      this.renderer.setStyle(navBar, 'background-color', 'transparent');
    }
  }

  ngOnInit(): void {
    const idioma = localStorage.getItem(keysStorage.IDIOMA);
    if (idioma) {
      this.idioma = idioma;
      this.selectIdioma();
    }
  }

  mostarOcultar() {
    this.active = !this.active;
  }

  selectIdioma() {
    this.translate.use(this.idioma);
    localStorage.setItem(keysStorage.IDIOMA, this.idioma);
    this.sidebarVisible = false;
  }

  set selectedTheme(theme: Theme) {
    this._selectedTheme = theme;
    this.themeService.setTheme(theme);
    this.stateOptionsTheme = this.getStateOptionsTheme();
  }

  onThemeChange(event: SelectButtonOptionClickEvent): void {
    this.selectedTheme = event.option.value as Theme;
  }

  private getStateOptionsTheme() {
    return [
      {value: Theme.LIGHT, icon: PrimeIcons.SUN, constant: this._selectedTheme == Theme.LIGHT},
      {value: Theme.DARK, icon: PrimeIcons.MOON, constant: this._selectedTheme == Theme.DARK}
    ];
  }
}
