import {Injectable} from '@angular/core';
import {combineLatest, Observable, of} from 'rxjs';
import {map} from "rxjs/operators";

import {Home} from '../model/home.interface';
import {About} from '../model/about.interface';
import {Abilities} from '../model/habilities.interface';
import {Certificate} from '../model/certificates.interface';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {
    this.getHomes();
    this.getAbout();
    this.getAbilities();
    this.getCertificate();
  }

  private getHomes(): void {
    // TODO: Implementar fuente de datos alternativa
    this.homes = of([]);
  }

  private getAbout(): void {
    // TODO: Implementar fuente de datos alternativa
    this.about = of([]);
  }

  private getAbilities(): void {
    // TODO: Implementar fuente de datos alternativa
    this.abilities = of([]);
  }

  private getCertificate(): void {
    // TODO: Implementar fuente de datos alternativa
    this.certificate = of([]);
  }


  getPerfil(): Observable<any> {
    return this.http.get(this.apiGitHub);
  }

  getRepos() {
    const url = `https://api.github.com/users/${this.username}/repos`;
    const params = {
      type: 'all',
      sort: 'updated',
      direction: 'desc'
    };
    return this.http.get(url, { params });
  }

  getData(): Observable<{
    home: Home,
    about: About,
    abilities: Abilities[],
    certificates: Certificate[]
  }> {
    // TODO: Implementar fuente de datos alternativa
    const homes$ = of({} as Home);
    const about$ = of({} as About);
    const abilities$ = of([] as Abilities[]);
    const certificates$ = of([] as Certificate[]);

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
