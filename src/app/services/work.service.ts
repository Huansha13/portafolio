import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor( private  firestore:AngularFirestore) { }

  gethome():Observable<any> {
    return this.firestore.collection('home').snapshotChanges();
  }
  getAbout():Observable<any>{
    return this.firestore.collection('about').snapshotChanges();
  }
  getAbility():Observable<any>{
    return this.firestore.collection('abilities').snapshotChanges();
  }

  getCertificado():Observable<any> {
    return this.firestore.collection('cerficiado').snapshotChanges();
  }


}
