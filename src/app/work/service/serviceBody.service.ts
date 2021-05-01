import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

// @ts-ignore
import {Home} from './../model/home.interface';
// @ts-ignore
import {About} from './../model/about.interface';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceBodyService {

  homes: Observable<Home[]>
  about: Observable<About[]>

  private homeCollection: AngularFirestoreCollection<Home>;
  private aboutCollection: AngularFirestoreCollection<About>

  constructor( private readonly asf: AngularFirestore) {
    this.homeCollection = asf.collection<Home>('home');
    this.aboutCollection = asf.collection<About>('about')
    this.getHomes();
    this.getAbout();
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

}
