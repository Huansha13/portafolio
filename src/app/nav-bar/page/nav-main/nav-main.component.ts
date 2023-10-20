import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss']
})
export class NavMainComponent implements OnInit {

  active: boolean = true;
  idioma: string = 'es';

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {

  }

  mostarOcultar() {
    this.active = !this.active;
  }

  seleccionIdioma() {
    this.translate.use(this.idioma);
    console.log(this.idioma);
  }
}
