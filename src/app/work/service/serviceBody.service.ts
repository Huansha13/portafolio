import {Injectable} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {map} from "rxjs/operators";

import {Home} from '../model/home.interface';
import {About} from '../model/about.interface';
import {Abilities} from '../model/habilities.interface';
import {Certificate} from '../model/certificates.interface';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceBodyService {

  private apiGitHubUrl = 'https://api.github.com';
  private username: string = 'Huansha13';
  private apiGitHub: string = "https://api.github.com/users/Huansha13"

  homes: Observable<Home[]>;
  about: Observable<About[]>;
  abilities: Observable<Abilities[]>;
  certificate: Observable<Certificate[]>;

  private homeCollection: AngularFirestoreCollection<Home>;
  private aboutCollection: AngularFirestoreCollection<About>;
  private abilitiesCollection: AngularFirestoreCollection<Abilities>;
  private certificateCollection: AngularFirestoreCollection<Certificate>;

  constructor(private readonly asf: AngularFirestore,
              private http: HttpClient) {
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
      map((actions) => actions.map(a => a.payload.doc.data()))
    );
  }

  private getAbout(): void {
    this.about = this.aboutCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data()))
    );
  }

  private getAbilities(): void {
    this.abilities = this.abilitiesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data()))
    );
  }

  private getCertificate(): void {
    this.certificate = this.certificateCollection.snapshotChanges().pipe(
      map(ac => ac.map(a => a.payload.doc.data()))
    );
  }


  getPerfil(): Observable<any> {
    return this.http.get(this.apiGitHub);
  }

  getRepos(): Observable<any> {
    const url = `${this.apiGitHubUrl}/users/${this.username}/repos`;
    return this.http.get(url);
  }

  ///home/EA6uhRDihhah3p8UDpwJ
  getData(): Observable<{
    home: Home,
    about: About,
    abilities: Abilities[],
    certificates: Certificate[]
  }> {

    const homes$ = this.homeCollection.doc('EA6uhRDihhah3p8UDpwJ').snapshotChanges().pipe(
      map(actions => actions.payload.data())
    );

    /**
     * /about/MJcFpB9Oowl99EHaLirX
     */
    const about$ = this.aboutCollection.doc('MJcFpB9Oowl99EHaLirX').snapshotChanges().pipe(
      map(actions => actions.payload.data())
    );

    const abilities$ = this.abilitiesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data()))
    );
    const certificates$ = this.certificateCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data()))
    );

    return combineLatest([homes$, about$, abilities$, certificates$]).pipe(
      map(([home, about, abilities, certificates]) => ({
        home,
        about,
        abilities,
        certificates
      }))
    );
  }

}
