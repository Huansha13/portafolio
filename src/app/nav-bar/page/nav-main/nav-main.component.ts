import {Component, OnInit} from '@angular/core';
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
  version: string = '2.0.1';
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
              private translate: TranslateService) {
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
