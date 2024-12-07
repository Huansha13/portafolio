import {Component, OnInit} from '@angular/core';
import {ExcelService} from "../../../core/utils/excel.service";
import {HeaderProyectos, ProyectosFoto} from "../../../core/model/excel.model";
import {SettingsService} from "../../../core/utils/settings.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent implements OnInit {
  spinnerProyectos = false
  url_asset = import.meta.env.NG_APP_URL_ASSETS; // Recommended
  project = [
    {
      portada: 'https://res.cloudinary.com/yfr/image/upload/v1616689668/portafolio/proyectos/File_Cover_-_1_q6fuwj.jpg',
      titulo: 'Prototipo App, covit - 19 ',
      fecha: 'Domingo, 21 de febrero 2021',
      recurso: [
        {
          logo: 'https://res.cloudinary.com/yfr/image/upload/v1616704122/portafolio/logos/figma_wgndz4.svg'
        }
      ],
      link: [
        {
          icono: '<i class="uil uil-illustration"></i>',
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
  displayBasic: boolean;
  proyectos: HeaderProyectos[] = [];
  responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5
    },
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  fotos: ProyectosFoto[];

  constructor(private readonly excelService: ExcelService,
              private readonly settings: SettingsService,
              private readonly mensajeService: MessageService) {
  }

  ngOnInit() {
    Promise.resolve().then(() => {
      this.spinnerProyectos = true;
      this.excelService.obtenerMisProyectos().then(proyectos => {
        this.spinnerProyectos = false;
        this.proyectos = proyectos;
        this.proyectos.sort(
          (current, next) =>
            next.id_proyecto - current.id_proyecto
        );
      });
    })
  }

  verFotos(relatedItems: ProyectosFoto[]) {
    if (this.settings.isEmpty(relatedItems)) {
      this.mensajeService.add({
        key: 'fh-toast',
        severity: 'info', summary: '!Información!',
        detail: 'No hay fotos disponibles'
      });
      return;
    }

    this.displayBasic = true;
    this.fotos = relatedItems
  }

  openLink(link: string) {
    window.open(link, "_blank");
  }
}
