import {Component, OnInit} from '@angular/core';
import {SettingsService} from 'src/app/core/utils/settings.service';
import {MenuItem} from "primeng/api";
import {TranslateService} from '@ngx-translate/core';

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
  proyectos: any[] = [];
  proyectosDestacados: any[] = [];
  mostrarTodos = false;

  constructor(
    public readonly settings: SettingsService,
    private readonly translate: TranslateService
  ) {}

  ngOnInit() {
    this.items = [
      { label: 'Tabla', icon: 'pi pi-table', id: '1' },
      { label: 'GitHub', icon: 'pi pi-github', id: '2' },
    ];
    this.activeItem = this.items[0];
    this.loadProjects();
    this.translate.onLangChange.subscribe(() => this.loadProjects());
  }

  loadProjects() {
    this.spinnerProyectos = true;
    this.translate.get('projects.data').subscribe((data: any[]) => {
      this.proyectos = data.filter(p => p.status === 1);
      this.proyectos.sort((a, b) => b.id - a.id);
      this.proyectosDestacados = this.proyectos.slice(0, 3);
      this.spinnerProyectos = false;
    });
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
