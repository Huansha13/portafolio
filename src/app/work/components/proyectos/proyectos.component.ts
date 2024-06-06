import {Component, OnInit} from '@angular/core';
import {MenuItem, PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent implements OnInit {
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
  proyectos: String[] = [];
  itemsOptions: MenuItem[]  = [
    {
      label: 'Figma - UI Kit',
      url: '',
      icon: PrimeIcons.PALETTE
    },
    {
      label: 'Repositorio',
      icon: PrimeIcons.GITHUB
    },
    {
      label: 'Demo App',
      icon: PrimeIcons.PLAY
    }
  ];

  ngOnInit() {
    this.proyectos = [
      'https://cdn.pixabay.com/photo/2024/02/01/22/25/dahlia-8546849_1280.jpg',
      'https://cdn.pixabay.com/photo/2024/01/12/17/01/leaves-8504392_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/07/30/09/12/red-hair-girl-8158373_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/08/21/14/49/raspberries-2665618_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/11/12/18/29/red-berries-8383886_1280.jpg',
      'https://cdn.pixabay.com/photo/2013/07/24/14/29/sunset-166637_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/09/20/15/47/fish-8265114_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/03/01/03/21/racial-7822176_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/08/17/17/03/dahlia-8197027_1280.jpg',
      'https://cdn.pixabay.com/photo/2016/08/13/03/17/sunrise-1590214_1280.jpg'
    ]
  }

  /*severityAleatorio(i: any) {
    const miLista = ["secondary", "secondary", "success", "info", "warning", "help", "danger"];
    const indiceAleatorio = Math.floor(Math.random() * miLista.length);
    i = miLista[indiceAleatorio];
  }*/
}
