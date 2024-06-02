import { Injectable } from '@angular/core';
import {keysStorage, Theme} from "../core/utils/enum";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  activeTheme: string = Theme.DARK;

  constructor() {
    const theme =  (localStorage.getItem(keysStorage.THEME) as Theme) || Theme.DARK;
    if (theme) {
     this.setTheme(theme);
    }
  }

  getTheme(): string {
    return this.activeTheme;
  }

  setTheme(theme: string) {
   let themeLink = document.getElementById('app-theme') as HTMLLinkElement;
   if(themeLink){
     themeLink.href = theme + '.css';
   }

   this.activeTheme = theme;
  }
}
