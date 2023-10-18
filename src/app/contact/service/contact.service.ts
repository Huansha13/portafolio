import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

// @ts-ignore
import {Contact} from '../../contact/model/contact.interface'
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacto: Observable<Contact[]>
  private contactCollection: AngularFirestoreCollection<Contact>;

  constructor( private readonly asf: AngularFirestore ) {
    this.contactCollection = asf.collection<Contact>('contact');
    this.getContact();
  }

  private getContact(): void {
    this.contacto = this.contactCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Contact))
    )
  }
}
