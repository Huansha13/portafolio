import {Component, OnInit} from '@angular/core';
import {ExcelService} from "../../../core/utils/excel.service";
import {HeaderProyectos} from "../../../core/model/excel.model";
import {SettingsService} from "../../../core/utils/settings.service";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent implements OnInit {
  items: MenuItem[] | undefined;
  activeItem: MenuItem;
  spinnerProyectos = false
  url_asset = import.meta.env.NG_APP_URL_ASSETS;
  proyectos: HeaderProyectos[] = [];
  proyectosDestacados: HeaderProyectos[] = [];
  mostrarTodos = false;

  constructor(public readonly settings: SettingsService,
              private readonly excelService: ExcelService) {
  }

  ngOnInit() {
    this.items = [
      { label: 'Tabla', icon: 'pi pi-table', id: '1' },
      { label: 'GitHub', icon: 'pi pi-github', id: '2' },
    ];
    this.activeItem = this.items[0];

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
        
        // Mostrar solo los primeros 3 proyectos
        this.proyectosDestacados = this.proyectos.slice(0, 3);
      });
    })
  }

  verTodosProyectos() {
    this.mostrarTodos = true;
    this.proyectosDestacados = this.proyectos;
  }

  openLink(link: string) {
    window.open(link, "_blank");
  }

  onTabChange(event: MenuItem) {
    this.activeItem = event;
  }
}
