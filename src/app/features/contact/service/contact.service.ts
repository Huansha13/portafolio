import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

// @ts-ignore
import {Contact} from '../../contact/model/contact.interface'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacto: Observable<Contact[]>

  constructor() {
    this.getContact();
  }

  private getContact(): void {
    // TODO: Implementar fuente de datos alternativa
    this.contacto = of([]);
  }
}
