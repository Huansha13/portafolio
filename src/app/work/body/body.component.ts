import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

import {ServiceBodyService} from '../service/serviceBody.service';
import {Home} from "../model/home.interface";
import {About} from "../model/about.interface";
import {Abilities} from "../model/habilities.interface";
import {Certificate} from "../model/certificates.interface";
import {SettingsService} from "../../core/utils/settings.service";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, AfterViewInit {
  data: { home: Home; about: About; abilities: Abilities[]; certificates: Certificate[] };
  prompt_terminal: boolean = false;
  items: MenuItem[] | undefined;

  constructor(private _service: ServiceBodyService,
              public settings: SettingsService,
              private renderer: Renderer2,
              private el: ElementRef) {
    this.settings.isLoading = true;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let opacidad = 1 - window.pageYOffset / window.innerHeight;

    opacidad = Math.max(opacidad, 0);
    opacidad = Math.min(opacidad, 1);

    const imagen = this.el.nativeElement.querySelector('#mibgFondo');
    if (imagen) {
      this.renderer?.setStyle(imagen, 'opacity', opacidad);
    }

  }


  ngOnInit(): void {
    Promise.resolve().then(() => {
      this._service.getData()
        .subscribe(data => {
          this.data = data;
          this.settings.dataPortafolio = data;
          this.settings.isLoading = false;
          this.loadItemsOption();

          if (!this.prompt_terminal) {
            //this.writerName();
          }
        })
    });
  }

  loadItemsOption(): void {
    this.items = [
      {
        label: 'Descargar C.V.',
        url: this.data.home.linkCv
      },
      {
        label: 'Contáctate Conmigo',
        url: `mailto:${this.data.home.correo}`
      }
    ];
  }

  ngAfterViewInit() {

  }

}
