import {AfterViewInit, Component, OnInit} from '@angular/core';

//external
import Typewriter from 't-writer.js';
import {WorkService} from '../../services/work.service';
import {element} from 'protractor';
import {ServiceBodyService} from '../service/serviceBody.service';
import {ContactService} from '../../contact/service/contact.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, AfterViewInit{

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
      tec:[
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
      tec:[
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
      tec:[
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
      tec:[
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
      tec:[
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
  project= [
    {
      portada: 'https://res.cloudinary.com/yfr/image/upload/v1616689668/portafolio/proyectos/File_Cover_-_1_q6fuwj.jpg',
      titulo: 'Prototipo App, covit - 19 ',
      fecha: 'Domingo, 21 de febrero 2021',
      recurso:[
        {
          logo:'https://res.cloudinary.com/yfr/image/upload/v1616704122/portafolio/logos/figma_wgndz4.svg'
        }
      ],
      link:[
        {
          icono:'<i class="uil uil-illustration"></i>',
          url: 'https://www.figma.com/file/ezEp9mQEzMsPkQEqFDq6t6/Miniaturas?node-id=191%3A362'
        }
      ]
    },
    {
      portada: 'https://res.cloudinary.com/yfr/image/upload/v1616689496/portafolio/proyectos/cove-sistema_inventario_jixjx7.jpg',
      titulo: 'Sistema web, control de inventario',
      fecha: 'Sábado, 20 de febrero 2021',
      recurso: [{
        logo: 'https://res.cloudinary.com/yfr/image/upload/v1616704122/portafolio/logos/figma_wgndz4.svg'
      }],
      link: [
        {
        icono: '<i class="uil uil-illustration"></i>',
        url: ''
        },
        {
          icono: '<i class="uil uil-github"></i>  ',
          url: ''
        }
      ]
    },
    {
      portada: 'https://res.cloudinary.com/yfr/image/upload/v1616689588/portafolio/proyectos/book_i44mn8.jpg',
      titulo: 'Prototipo, Web Book',
      fecha: 'Viernes, 19 de febrero 2021',
      recurso: [{
        logo: 'https://res.cloudinary.com/yfr/image/upload/v1616704122/portafolio/logos/figma_wgndz4.svg'
      }],
      link: [
        {
          icono: '<i class="uil uil-illustration"></i>',
          url: 'https://www.figma.com/file/ezEp9mQEzMsPkQEqFDq6t6/Miniaturas?node-id=144%3A0'
        }
      ]
    },
    {
      portada: 'https://res.cloudinary.com/yfr/image/upload/v1616704938/portafolio/proyectos/radio_nlqscd.jpg',
      titulo: 'Pagina web, RADIO 101.3 FM',
      fecha: 'Sábado, 20 de febrero 2021',
      recurso: [
        {
          logo: 'https://res.cloudinary.com/yfr/image/upload/v1616704122/portafolio/logos/js_l9h19a.svg'
        },
        {
         logo: 'https://res.cloudinary.com/yfr/image/upload/v1616704122/portafolio/logos/html_vll1uw.svg'
        },
        {
          logo: 'https://res.cloudinary.com/yfr/image/upload/v1616704122/portafolio/logos/css_frcktu.svg'
        },
        {
          logo: 'https://res.cloudinary.com/yfr/image/upload/v1616704122/portafolio/logos/bt_d69kbc.svg'
        }

      ],
      link: [
        {
          icono: '<i class="uil uil-gitlab"></i>',
          url: 'https://gitlab.com/Yefer13/radio'
        }
      ]
    }
  ];
  cerfificado:any[]=[];

  detail: string = "Implementación en proyectos";

  public phone = '[ +51944519328 ]'
  public msm = "Hola! Quieres contactarte conmigo!";

  constructor( private _workService: WorkService,
               private _service: ServiceBodyService,
               private _contactService: ContactService
               ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.writerName();
  }

  writerName():void {
    const target = document.querySelector('.tw');
    const target2 = document.querySelector('.tw2');

    const writer1 = new Typewriter(target, {
      typeSpeed: 60,
      typeColor: '#fff',
      cursorColor: '#fff'
    });

    const writer2 = new Typewriter(target2, {
      typeSpeed: 60,
      typeColor: '#fff',
      cursorColor: '#fff'
    });

    writer1
      .type('Hola soy,')
      .removeCursor()
      .then(writer2.start.bind(writer2))
      .start();

    writer2
      .type('Yefer')
      .rest(900)
      .clear()
      .type('Frank Huansha')
      .rest(50000)
      .clear()
      .removeCursor()
      .then(writer1.start.bind(writer1));
  }

}
