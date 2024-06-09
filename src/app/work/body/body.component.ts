import {AfterViewInit, Component, OnInit} from '@angular/core';

//external
import Typewriter from 't-writer.js';
import {WorkService} from '../../services/work.service';
import {ServiceBodyService} from '../service/serviceBody.service';
import {ContactService} from '../../contact/service/contact.service';
import {Home} from "../model/home.interface";
import {About} from "../model/about.interface";
import {Abilities} from "../model/habilities.interface";
import {Certificate} from "../model/certificates.interface";
import {SettingsService} from "../../core/utils/settings.service";
import {COLORS_WRITER} from "../../core/utils/constantes";
import {MenuItem, PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, AfterViewInit {
  homes$ = this._service.homes;
  abouts$ = this._service.about;
  abilities$ = this._service.abilities;
  locations$ = this._contactService.contacto;
  cerfificado$ = this._service.certificate;

  abiliSec = [
    {
      nombre: 'Lenguaje de programación',
      icono: '<i class="uil uil-coffee"></i>',
      tec: [
        {
          nombre: 'Java',
          color: '#CA3132',
          porcentaje: '30'
        },
        {
          nombre: 'TypeScript',
          color: '#3178C6',
          porcentaje: '30'
        }
      ]
    },
    {
      nombre: 'Base de datos',
      icono: '<i class="uil uil-database"></i>',
      tec: [
        {
          nombre: 'Firebase',
          color: '#FFCA28',
          porcentaje: '20'
        },
        {
          nombre: 'Sql, MySql, Oracle',
          color: '#9FA9FF',
          porcentaje: '45'
        }
      ]
    },
    {
      nombre: 'Sistemas operativos',
      icono: '<i class="uil uil-desktop"></i>',
      tec: [
        {
          nombre: 'Windows 10',
          color: '#008AF7',
          porcentaje: '80'
        },
        {
          nombre: 'GNU/Linux ',
          color: '#E8E8E8',
          porcentaje: '36'
        }
      ]
    },
    {
      nombre: 'Herramientas de maquetación',
      icono: '<i class="uil uil-icons"></i>',
      tec: [
        {
          nombre: 'Figma',
          color: '#0ACF83',
          porcentaje: '50'
        },
        {
          nombre: 'Adobe XD, Lunacy ',
          color: '#D71968',
          porcentaje: '65'
        }
      ]
    },
    {
      nombre: 'Otros',
      icono: '<i class="uil uil-wrench"></i>',
      tec: [
        {
          nombre: 'Microsoft Office (.xls .ppt .doc)',
          color: '#FF8F6B',
          porcentaje: '85'
        },
      ]
    },
    {
      nombre: 'Idiomas',
      icono: '<i class="uil uil-graduation-cap"></i>',
      tec: [
        {
          nombre: 'Español, Quechua',
          color: '#F44242',
          porcentaje: '85'
        },
        {
          nombre: 'Ingles',
          color: '#00CBF7',
          porcentaje: '35'
        }
      ]
    }
  ];

  detail: string = "Implementación en proyectos";
  data: { home: Home; about: About; abilities: Abilities[]; certificates: Certificate[] };
  prompt_terminal: boolean = false;
  ejecutarPrompt: boolean = false;
  items: MenuItem[] | undefined;

  constructor(private _workService: WorkService,
              private _service: ServiceBodyService,
              private _contactService: ContactService,
              public settings: SettingsService
  ) {
    this.settings.isLoading = true;
  }

  ngOnInit(): void {

    /*this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          //this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          //this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          //this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload']
      },
      {
        icon: 'pi pi-external-link',
        target: '_blank',
        url: 'http://angular.io'
      }
    ];*/

    Promise.resolve().then(() => {
      this._service.getData()
        .subscribe(data => {
          console.log("=>(body.component.ts:205) data", data);
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

  writerName(): void {
    const target = document.querySelector('.tw-saludo1');
    const target2 = document.querySelector('.tw-saludo2');
    const target3 = document.querySelector('.tw-saludo3');
    const target4 = document.querySelector('.tw-saludo4');
    const target5 = document.querySelector('.tw-saludo5');

    const writer1 = new Typewriter(target, COLORS_WRITER.primary);
    const writer1b = new Typewriter(target, COLORS_WRITER.orange);
    const writer1c = new Typewriter(target, COLORS_WRITER.green600);
    const writer2 = new Typewriter(target2, COLORS_WRITER.primary);
    const writer2b = new Typewriter(target2, COLORS_WRITER.blue600);
    const writer3 = new Typewriter(target3, COLORS_WRITER.text);
    const writer3b = new Typewriter(target3, COLORS_WRITER.green400);
    const writer3c = new Typewriter(target3, COLORS_WRITER.text);
    const writer4 = new Typewriter(target4, COLORS_WRITER.blue600);
    const writer5 = new Typewriter(target5, COLORS_WRITER.green600);

    writer1.type('public class ').removeCursor().then(writer1b.start.bind(writer1b)).start();
    writer1b.type('HolaMundo ').removeCursor().then(writer1c.start.bind(writer1c));
    writer1c.type('{ ').removeCursor().then(writer2.start.bind(writer2));
    writer2.type('public static void ').removeCursor().then(writer2b.start.bind(writer2b));
    writer2b.type('main(String[] args) { ').removeCursor().then(writer3.start.bind(writer3));
    writer3.type('Quien.').removeCursor().then(writer3b.start.bind(writer3b));
    writer3b.type('Soy()').removeCursor().then(writer3c.start.bind(writer3c));
    writer3c.type('; ').removeCursor().then(writer4.start.bind(writer4));
    writer4.type('} ').removeCursor().then(writer5.start.bind(writer5));
    writer5.type('}').then(() => {
      this.ejecutarPrompt = true;
      setTimeout(() => {
        this.prompt_terminal = true;
        this.ejecutarPrompt = false;
      }, 300)
    });
  }

}
