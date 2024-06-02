import {Injectable} from '@angular/core';
import {Theme} from "./enum";
import {SettingsService} from "./settings.service";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  activeTheme: string = Theme.DARK;

  constructor(private settings: SettingsService) {
    this.setTheme(this.activeTheme);
  }

  setTheme(theme: string) {
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = theme + '.css';
    }

    this.activeTheme = theme;
    this.settings.isThemeDark = this.activeTheme === Theme.DARK;
  }
}
