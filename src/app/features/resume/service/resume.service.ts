import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }

  getEducacion():Observable<any> {
    // TODO: Implementar fuente de datos alternativa
    return of([]);
  }
  getPp():Observable<any> {
    // TODO: Implementar fuente de datos alternativa
    return of([]);
  }
  getExperciencia():Observable<any> {
    // TODO: Implementar fuente de datos alternativa
    return of([]);
  }
}
