import {Injectable} from '@angular/core';
import {Home} from "../../work/model/home.interface";
import {About} from "../../work/model/about.interface";
import {Abilities} from "../../work/model/abilities.interface";
import {Certificate} from "../../work/model/certificates.interface";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  isLoading: boolean = false;
  dataPortafolio: { home: Home; about: About[]; abilities: Abilities[]; certificates: Certificate[] };
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
}
