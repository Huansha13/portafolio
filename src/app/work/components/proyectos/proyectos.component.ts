import {Component, OnInit} from '@angular/core';
import {ExcelService} from "../../../core/utils/excel.service";
import {HeaderProyectos} from "../../../core/model/excel.model";
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
  proyectos: HeaderProyectos[] = [];

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

  openLink(link: string) {
    window.open(link, "_blank");
  }
}
