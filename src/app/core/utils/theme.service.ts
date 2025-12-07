import {Injectable} from '@angular/core';
import {keysStorage, Theme} from "./enum";
import {SettingsService} from "./settings.service";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  activeTheme: string = Theme.DARK;
  private systemThemeListener?: MediaQueryList;

  constructor(private settings: SettingsService) {
    const savedTheme = localStorage.getItem(keysStorage.THEME) as Theme || Theme.SYSTEM;
    this.setTheme(savedTheme);
    this.initSystemThemeListener();
  }

  private initSystemThemeListener() {
    this.systemThemeListener = window.matchMedia('(prefers-color-scheme: dark)');
    this.systemThemeListener.addEventListener('change', (e) => {
      if (this.activeTheme === Theme.SYSTEM) {
        this.applyTheme(e.matches ? Theme.DARK : Theme.LIGHT);
      }
    });
  }

  setTheme(theme: string) {
    this.activeTheme = theme;
    localStorage.setItem(keysStorage.THEME, theme);

    if (theme === Theme.SYSTEM) {
      const isDark = this.systemThemeListener?.matches ?? window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.applyTheme(isDark ? Theme.DARK : Theme.LIGHT);
    } else {
      this.applyTheme(theme);
    }
  }

  private applyTheme(theme: string) {
    const themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = theme + '.css';
    }

    this.settings.isThemeDark = theme === Theme.DARK;
    document.body.classList.remove('my-bd-dark-theme', 'my-bd-light-theme');
    document.body.classList.add(this.settings.isThemeDark ? 'my-bd-dark-theme' : 'my-bd-light-theme');
  }
}
