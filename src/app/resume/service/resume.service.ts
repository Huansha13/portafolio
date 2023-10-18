import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor( private firestore:AngularFirestore) { }

  getEducacion():Observable<any> {
    return this.firestore.collection('educacion').snapshotChanges();
  }
  getPp():Observable<any> {
    return this.firestore.collection('pp').snapshotChanges();
  }
  getExperciencia():Observable<any> {
    return this.firestore.collection('experiencia').snapshotChanges();
  }
}
