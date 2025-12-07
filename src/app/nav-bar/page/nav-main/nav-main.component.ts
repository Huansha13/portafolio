import {Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ThemeService} from "../../../core/utils/theme.service";
import {Idioma, keysStorage, Theme} from "../../../core/utils/enum";
import {PrimeIcons} from 'primeng/api';
import {SelectButtonOptionClickEvent} from "primeng/selectbutton";
import {SettingsService} from "../../../core/utils/settings.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss']
})
export class NavMainComponent implements OnInit {
  version: string = environment.appVersion;
  _selectedTheme: Theme = Theme.DARK;
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
    let opacidad = this.settings.calculateOpacity();

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

    const savedTheme = localStorage.getItem(keysStorage.THEME) as Theme;
    if (savedTheme) {
      this._selectedTheme = savedTheme;
      this.stateOptionsTheme = this.getStateOptionsTheme();
    }
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

  cycleTheme(): void {
    const themes = [Theme.LIGHT, Theme.DARK, Theme.SYSTEM];
    const currentIndex = themes.indexOf(this._selectedTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    this.selectedTheme = themes[nextIndex];
  }

  getCurrentThemeIcon(): string {
    switch (this._selectedTheme) {
      case Theme.LIGHT: return PrimeIcons.SUN;
      case Theme.DARK: return PrimeIcons.MOON;
      case Theme.SYSTEM: return PrimeIcons.DESKTOP;
      default: return PrimeIcons.MOON;
    }
  }

  getCurrentThemeLabel(): string {
    switch (this._selectedTheme) {
      case Theme.LIGHT: return 'Modo Claro';
      case Theme.DARK: return 'Modo Oscuro';
      case Theme.SYSTEM: return 'Modo Sistema';
      default: return 'Tema';
    }
  }

  private getStateOptionsTheme() {
    return [
      {value: Theme.LIGHT, icon: PrimeIcons.SUN, constant: this._selectedTheme == Theme.LIGHT},
      {value: Theme.DARK, icon: PrimeIcons.MOON, constant: this._selectedTheme == Theme.DARK},
      {value: Theme.SYSTEM, icon: PrimeIcons.DESKTOP, constant: this._selectedTheme == Theme.SYSTEM}
    ];
  }
}
