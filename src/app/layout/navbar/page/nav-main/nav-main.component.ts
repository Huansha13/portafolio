import {Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ThemeService} from "../../../../core/utils/theme.service";
import {Idioma, keysStorage, Theme} from "../../../../core/utils/enum";
import {MenuItem, PrimeIcons} from 'primeng/api';
import {SelectButtonOptionClickEvent} from "primeng/selectbutton";
import {SettingsService} from "../../../../core/utils/settings.service";
import {environment} from "../../../../../environments/environment";
import {SeasonalThemeService, SeasonalTheme} from "../../../../core/utils/seasonal-theme.service";

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss']
})
export class NavMainComponent implements OnInit {
  version: string = environment.appVersion;
  _selectedTheme: Theme = Theme.DARK;
  idioma: string = Idioma.ES;
  currentTheme: SeasonalTheme | null = null;
  optIdioma = [
    {name: 'Español', code: Idioma.ES},
    {name: 'English', code: Idioma.EN}
  ]
  stateOptionsTheme = this.getStateOptionsTheme();
  themeOptions: any[] = [];
  sidebarVisible: boolean = false;
  constructor(public themeService: ThemeService,
              public settings: SettingsService,
              private translate: TranslateService,
              private renderer: Renderer2,
              private el: ElementRef,
              private seasonalTheme: SeasonalThemeService) {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let opacidad = this.settings.calculateOpacity();
    opacidad = Math.max(opacidad, 0);
    opacidad = Math.min(opacidad, 1);

    const navBar = this.el.nativeElement.querySelector('#miNavBar');
    if (navBar) {
      if (opacidad < 1) {
        this.renderer.setStyle(navBar, 'background-color', 'var(--surface-0)');
      } else {
        this.renderer.setStyle(navBar, 'background-color', 'transparent');
      }
    }
  }

  ngOnInit(): void {
    const idioma = localStorage.getItem(keysStorage.IDIOMA) || localStorage.getItem('selectedLanguage');
    if (idioma) {
      this.idioma = idioma;
    }

    const savedTheme = localStorage.getItem(keysStorage.THEME) as Theme;
    if (savedTheme) {
      this._selectedTheme = savedTheme;
      this.stateOptionsTheme = this.getStateOptionsTheme();
    }

    this.seasonalTheme.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    });

    this.translate.onLangChange.subscribe(() => {
      this.buildThemeOptions();
    });

    this.buildThemeOptions();
  }

  getLogoColorClass(): string {
    return this.currentTheme ? this.currentTheme.logoColor : 'text-primary';
  }

  selectIdioma() {
    this.translate.use(this.idioma);
    localStorage.setItem(keysStorage.IDIOMA, this.idioma);
    localStorage.setItem('selectedLanguage', this.idioma);
    this.sidebarVisible = false;
  }

  set selectedTheme(theme: Theme) {
    this._selectedTheme = theme;
    this.themeService.setTheme(theme);
    this.stateOptionsTheme = this.getStateOptionsTheme();
  }

  buildThemeOptions() {
    this.themeOptions = [
      {
        label: this.translate.instant('menu.theme.light'),
        value: Theme.LIGHT,
        icon: PrimeIcons.SUN
      },
      {
        label: this.translate.instant('menu.theme.dark'),
        value: Theme.DARK,
        icon: PrimeIcons.MOON
      },
      {
        label: this.translate.instant('menu.theme.system'),
        value: Theme.SYSTEM,
        icon: PrimeIcons.DESKTOP
      }
    ];
  }

  onThemeDropdownChange() {
    this.selectedTheme = this._selectedTheme;
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
