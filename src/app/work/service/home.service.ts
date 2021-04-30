import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

// @ts-ignore
import {Home} from './../model/home.interface';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  homes: Observable<Home[]>
  private homeCollection: AngularFirestoreCollection<Home>;

  constructor( private readonly asf: AngularFirestore) {
    this.homeCollection = asf.collection<Home>('home');
    this.getHomes();
  }

  private getHomes(): void {
    this.homes = this.homeCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Home))
    );
  }
}
