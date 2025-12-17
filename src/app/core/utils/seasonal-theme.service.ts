import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

export interface SeasonalTheme {
  id: string;
  name: string;
  enabled: boolean;
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
  primeThemeDark: string;
  primeThemeLight: string;
  logoColor: string;
  favicon?: string;
  logoIcon?: string;
}

export interface SeasonalConfig {
  enableSeasonalThemes: boolean;
  forceTheme: string | null;
  themes: SeasonalTheme[];
}

@Injectable({
  providedIn: 'root'
})
export class SeasonalThemeService {
  private config: SeasonalConfig = { enableSeasonalThemes: false, forceTheme: null, themes: [] };
  private currentThemeSubject = new BehaviorSubject<SeasonalTheme | null>(null);
  public currentTheme$ = this.currentThemeSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadThemes();
  }

  private loadThemes(): void {
    this.http.get<SeasonalConfig>('assets/seasonal-themes.json')
      .pipe(
        catchError(() => of({ enableSeasonalThemes: false, forceTheme: null, themes: [] })),
        tap(data => {
          this.config = data;
          const theme = this.calculateCurrentTheme();
          this.currentThemeSubject.next(theme);
          this.updateFavicon(theme);
        })
      )
      .subscribe();
  }

  private updateFavicon(theme: SeasonalTheme | null): void {
    if (theme?.favicon) {
      const link = document.getElementById('app-icon') as HTMLLinkElement;
      if (link) {
        link.href = theme.favicon;
      }
    }
  }

  getCurrentTheme(): SeasonalTheme | null {
    return this.currentThemeSubject.value;
  }

  private calculateCurrentTheme(): SeasonalTheme | null {
    // Si los temas estacionales están desactivados, retornar null
    if (!this.config.enableSeasonalThemes) {
      return null;
    }

    // Si hay un tema forzado, usarlo
    if (this.config.forceTheme) {
      const forced = this.config.themes.find(t => t.id === this.config.forceTheme && t.enabled);
      if (forced) return forced;
    }

    // Detectar por fecha
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    for (const theme of this.config.themes) {
      if (theme.enabled && this.isDateInRange(month, day, theme)) {
        return theme;
      }
    }
    return null;
  }

  private isDateInRange(month: number, day: number, theme: SeasonalTheme): boolean {
    // Caso especial: rango que cruza el año (ej: 26 dic - 7 ene)
    if (theme.startMonth > theme.endMonth) {
      return (
        (month === theme.startMonth && day >= theme.startDay) ||
        (month === theme.endMonth && day <= theme.endDay) ||
        (month > theme.startMonth || month < theme.endMonth)
      );
    }
    
    // Caso normal: mismo mes o meses consecutivos
    if (theme.startMonth === theme.endMonth) {
      return month === theme.startMonth && day >= theme.startDay && day <= theme.endDay;
    }
    
    return (
      (month === theme.startMonth && day >= theme.startDay) ||
      (month === theme.endMonth && day <= theme.endDay) ||
      (month > theme.startMonth && month < theme.endMonth)
    );
  }

  getPrimeThemeForDate(baseTheme: string): string {
    const currentTheme = this.getCurrentTheme();
    if (currentTheme) {
      return baseTheme === 'dark' 
        ? currentTheme.primeThemeDark 
        : currentTheme.primeThemeLight;
    }
    return baseTheme === 'dark' ? 'lara-dark-indigo' : 'lara-light-indigo';
  }
}
