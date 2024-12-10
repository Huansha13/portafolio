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
  url_asset = import.meta.env.NG_APP_URL_ASSETS;
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
        this.proyectos = proyectos.filter(proy => proy.status == 1);

        this.proyectos.forEach(header => {
          header.url_portada = `${this.url_asset}/${header.url_portada}`;
          header.url_pw = `${this.url_asset}/${header.url_pw}`;
        });

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
    this.fotos = relatedItems;
  }

  openLink(link: string) {
    window.open(link, "_blank");
  }
}
