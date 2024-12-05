import {Injectable} from '@angular/core';
import {Home} from "../../work/model/home.interface";
import {About} from "../../work/model/about.interface";
import {Abilities} from "../../work/model/habilities.interface";
import {Certificate} from "../../work/model/certificates.interface";
import {Responsive} from "../model/resoponsive";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  isThemeDark: boolean = true;
  view: Responsive = new Responsive();
  isLoading: boolean = false;
  dataPortafolio: { home: Home; about: About; abilities: Abilities[]; certificates: Certificate[] };
  isTeminalRunning: boolean = false;
  constructor() {
  }

  isEmpty(valor: any): boolean {
    return (
      valor === null ||
      valor === undefined ||
      valor === '' ||
      (
        typeof valor === 'object' &&
        Object.keys(valor).length === 0 &&
        valor.constructor === Object
      ) ||
      (Array.isArray(valor) && valor.length === 0)
    );
  }

  /**
   * Calculate the opacity based on the scroll position.
   * @returns {number} The opacity value between 0 and 1.
   */
  calculateOpacity = (): number => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    return 1 - scrollY / windowHeight;
  };
}
