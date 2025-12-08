import {Injectable} from '@angular/core';
import {keysStorage, Theme} from "./enum";
import {SettingsService} from "./settings.service";
import {SeasonalThemeService} from "./seasonal-theme.service";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  activeTheme: string = Theme.DARK;
  private systemThemeListener?: MediaQueryList;

  constructor(private settings: SettingsService, private seasonalTheme: SeasonalThemeService) {
    const savedTheme = localStorage.getItem(keysStorage.THEME) as Theme || Theme.SYSTEM;
    this.initSystemThemeListener();
    
    // Espera a que se cargue el tema estacional y luego aplica el tema
    this.seasonalTheme.currentTheme$.subscribe(() => {
      this.setTheme(savedTheme);
    });
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
      const finalTheme = this.getSeasonalTheme(theme);
      themeLink.href = finalTheme + '.css';
    }

    this.settings.isThemeDark = theme === Theme.DARK;
    document.body.classList.remove('my-bd-dark-theme', 'my-bd-light-theme');
    document.body.classList.add(this.settings.isThemeDark ? 'my-bd-dark-theme' : 'my-bd-light-theme');
  }

  private getSeasonalTheme(theme: string): string {
    const seasonal = this.seasonalTheme.getCurrentTheme();
    if (seasonal) {
      const themeName = theme === Theme.DARK ? seasonal.primeThemeDark : seasonal.primeThemeLight;
      return themeName;
    }
    // Tema por defecto: azul
    return theme === Theme.DARK ? 'dark' : 'light';
  }
}
