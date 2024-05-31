import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ThemeService} from "../../../services/theme.service";
import {Theme} from "../../../core/utils/enum";

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss']
})
export class NavMainComponent implements OnInit {
  version: string = '2.0.1';
  active: boolean = true;
  idioma: string = 'es';
  optionesIdioma = [
    {name: 'Español', code: 'es'},
    {name: 'English', code: 'en'}
  ]
  checkedTheme: boolean = false;
  selectedTheme: string = Theme.LIGHT;
  constructor(private translate: TranslateService,
              public themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.selectedTheme = localStorage.getItem('theme') || Theme.LIGHT;
    this.themeService.setTheme(this.selectedTheme);
  }

  mostarOcultar() {
    this.active = !this.active;
  }

  seleccionIdioma() {
    this.translate.use(this.idioma);
    console.log(this.idioma);
  }

  onThemeChange() {
    this.selectedTheme = this.checkedTheme ? Theme.DARK : Theme.LIGHT;
    this.themeService.setTheme(this.selectedTheme);
    localStorage.setItem('theme', this.selectedTheme);
  }
}
