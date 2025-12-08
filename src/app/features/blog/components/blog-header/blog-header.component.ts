import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Idioma, keysStorage } from '../../../../core/utils/enum';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrl: './blog-header.component.scss'
})
export class BlogHeaderComponent implements OnInit {
  idioma: string = Idioma.ES;
  optIdioma = [
    { name: 'ES', code: Idioma.ES },
    { name: 'EN', code: Idioma.EN }
  ];

  constructor(
    private router: Router,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    const idioma = localStorage.getItem(keysStorage.IDIOMA);
    if (idioma) {
      this.idioma = idioma;
    }
  }

  changeLanguage(lang: string) {
    this.idioma = lang;
    this.translate.use(lang);
    localStorage.setItem(keysStorage.IDIOMA, lang);
  }

  goHome() {
    window.location.href = '/';
  }

  goToBlog() {
    this.router.navigate(['/blog']);
  }
}
