import { Injectable } from '@angular/core';
import {Theme} from "../core/utils/enum";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  activeTheme: string = Theme.LIGHT;

  getTheme(): string {
    return this.activeTheme;
  }

  setTheme(theme: string): void {
   let themeLink = document.getElementById('app-theme') as HTMLLinkElement;
   if(themeLink){
     themeLink.href = theme + '.css';
   }

   this.activeTheme = theme;
  }
}