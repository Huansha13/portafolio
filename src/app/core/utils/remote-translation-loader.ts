import { TranslateLoader } from '@ngx-translate/core';
import { Observable, forkJoin, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export class RemoteTranslationLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    private baseUrl: string = 'assets/i18n'
  ) {}

  getTranslation(lang: string): Observable<any> {
    const sections = ['menu', 'home', 'about', 'projects', 'contact', 'skills', 'blog', 'pdf-viewer', 'experience'];
    
    const requests = sections.map(section =>
      this.http.get(`${this.baseUrl}/${lang}/${section}.json`).pipe(
        catchError(() => of({}))
      )
    );

    return forkJoin(requests).pipe(
      map(responses => {
        const merged = {};
        responses.forEach((response, index) => {
          merged[sections[index]] = response;
        });
        return merged;
      })
    );
  }
}

export function RemoteTranslationLoaderFactory(http: HttpClient) {
  return new RemoteTranslationLoader(http);
}
