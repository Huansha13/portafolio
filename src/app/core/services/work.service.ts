import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor() { }

  gethome():Observable<any> {
    // TODO: Implementar fuente de datos alternativa
    return of([]);
  }
  getAbout():Observable<any>{
    // TODO: Implementar fuente de datos alternativa
    return of([]);
  }
  getAbility():Observable<any>{
    // TODO: Implementar fuente de datos alternativa
    return of([]);
  }

  getCertificado():Observable<any> {
    // TODO: Implementar fuente de datos alternativa
    return of([]);
  }


}
