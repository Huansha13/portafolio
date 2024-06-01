import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ThemeService} from "../../../services/theme.service";
import {Idioma, keysStorage, Theme} from "../../../core/utils/enum";

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss']
})
export class NavMainComponent implements OnInit {
  version: string = '2.0.1';
  active: boolean = true;
  idioma: string = Idioma.ES;
  optIdioma = [
    {name: 'Español', code: Idioma.ES},
    {name: 'English', code: Idioma.EN}
  ]

  private _selectedTheme: Theme;
  checkedTheme: boolean;
  constructor(private translate: TranslateService,
              public themeService: ThemeService) {
  }

  ngOnInit(): void {
    const idioma = localStorage.getItem(keysStorage.IDIOMA);
    if (idioma) {
      this.idioma = idioma;
      this.selectIdioma();
    }

    this._selectedTheme = (localStorage.getItem(keysStorage.THEME) as Theme) || Theme.DARK;
    this.checkedTheme = this._selectedTheme === Theme.DARK;
    this.themeService.setTheme(this._selectedTheme);
  }

  mostarOcultar() {
    this.active = !this.active;
  }

  selectIdioma() {
    this.translate.use(this.idioma);
    localStorage.setItem(keysStorage.IDIOMA, this.idioma);
  }

  set selectedTheme(theme: Theme) {
    this._selectedTheme = theme;
    this.themeService.setTheme(theme);
    localStorage.setItem(keysStorage.THEME, theme);
  }

  onThemeChange(): void {
    this.checkedTheme = !this.checkedTheme;
    this.selectedTheme = this.checkedTheme ? Theme.DARK : Theme.LIGHT;
  }
}
