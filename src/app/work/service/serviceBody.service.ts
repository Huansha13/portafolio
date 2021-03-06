import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import {Home} from './../model/home.interface';
import {About} from './../model/about.interface';
import {Abilities} from './../model/abilities.interface';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Certificate} from '../model/certificates.interface';
@Injectable({
  providedIn: 'root'
})
export class ServiceBodyService {

  homes: Observable<Home[]>;
  about: Observable<About[]>;
  abilities: Observable<Abilities[]>;
  certificate: Observable<Certificate[]>;

  private homeCollection: AngularFirestoreCollection<Home>;
  private aboutCollection: AngularFirestoreCollection<About>;
  private abilitiesCollection: AngularFirestoreCollection<Abilities>;
  private certificateCollection: AngularFirestoreCollection<Certificate>;

  constructor( private readonly asf: AngularFirestore) {
    this.homeCollection = asf.collection<Home>('home');
    this.aboutCollection = asf.collection<About>('about');
    this.abilitiesCollection = asf.collection<Abilities>('abilities');
    this.certificateCollection = asf.collection<Certificate>('cerficiado')
    this.getHomes();
    this.getAbout();
    this.getAbilities();
    this.getCertificate();
  }

  private getHomes(): void {
    this.homes = this.homeCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Home))
    );
  }
  private getAbout(): void {
    this.about = this.aboutCollection.snapshotChanges().pipe(
      map( actions => actions.map(a => a.payload.doc.data() as About))
    );
  }
  private getAbilities(): void {
    this.abilities = this.abilitiesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Abilities))
    );
  }
  private getCertificate(): void {
    this.certificate = this.certificateCollection.snapshotChanges().pipe(
      map(ac => ac.map(a => a.payload.doc.data() as Certificate))
    );
  }

}
