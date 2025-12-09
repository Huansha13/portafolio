import {Component, Input, OnInit} from '@angular/core';
import {ServiceBodyService} from "../../service/serviceBody.service";
import {SettingsService} from 'src/app/core/utils/settings.service';
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.scss']
})
export class GitHubComponent implements OnInit {
  @Input('isVistaBody') isVistaBody: boolean = false;
  busqueda: string = '';
  listaRepositorio$: Observable<any[]> = of([]);
  perfil: any;
  filtroActivo: string = 'Todos';
  reposPaginados: any[] = [];
  paginaActual: number = 1;
  reposPorPagina: number = 6;
  totalRepos: number = 0;
  totalPaginas: number = 0;
  Math = Math;

  constructor(private readonly serviceBody: ServiceBodyService,
              public settings: SettingsService) {
  }

  ngOnInit() {
    this.buscar();
    this.serviceBody.getPerfil().subscribe({
      next: value => {
        this.perfil = value;
      }
    });
  }

  irRepo(html_url: string) {
    window.open(html_url, '_blank');
  }

  buscar() {
    this.serviceBody.getRepos().subscribe((repos: any[]) => {
      let filtrados = repos;
      
      if (this.filtroActivo !== 'Todos') {
        filtrados = filtrados.filter(repo => 
          repo.language?.toLowerCase() === this.filtroActivo.toLowerCase()
        );
      }
      
      if (!this.settings.isEmpty(this.busqueda)) {
        filtrados = filtrados.filter(repo =>
          repo.name.toLowerCase().includes(this.busqueda.toLowerCase())
        );
      }
      
      this.totalRepos = filtrados.length;
      this.totalPaginas = Math.ceil(this.totalRepos / this.reposPorPagina);
      const inicio = (this.paginaActual - 1) * this.reposPorPagina;
      const fin = inicio + this.reposPorPagina;
      this.reposPaginados = filtrados.slice(inicio, fin);
    });
  }

  filtrarPorLenguaje(lenguaje: string) {
    this.filtroActivo = lenguaje;
    this.paginaActual = 1;
    this.buscar();
  }



  getPaginas(): number[] {
    return Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
  }

  irAPagina(pagina: number) {
    this.paginaActual = pagina;
    this.serviceBody.getRepos().subscribe((repos: any[]) => {
      let filtrados = repos;
      
      if (this.filtroActivo !== 'Todos') {
        filtrados = filtrados.filter(repo => 
          repo.language?.toLowerCase() === this.filtroActivo.toLowerCase()
        );
      }
      
      if (!this.settings.isEmpty(this.busqueda)) {
        filtrados = filtrados.filter(repo =>
          repo.name.toLowerCase().includes(this.busqueda.toLowerCase())
        );
      }
      
      const inicio = (this.paginaActual - 1) * this.reposPorPagina;
      const fin = inicio + this.reposPorPagina;
      this.reposPaginados = filtrados.slice(inicio, fin);
    });
  }

  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.irAPagina(this.paginaActual - 1);
    }
  }

  paginaSiguiente() {
    if (this.paginaActual < this.totalPaginas) {
      this.irAPagina(this.paginaActual + 1);
    }
  }

  getLanguageColor(language: string): string {
    const colors: { [key: string]: string } = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#3178c6',
      'Python': '#3572A5',
      'Java': '#b07219',
      'Go': '#00ADD8',
      'React': '#61dafb',
      'Angular': '#dd0031',
      'Vue': '#42b883',
      'HTML': '#e34c26',
      'CSS': '#563d7c',
      'PHP': '#4F5D95',
      'Ruby': '#701516',
      'C++': '#f34b7d',
      'C#': '#178600',
      'Swift': '#ffac45',
      'Kotlin': '#A97BFF',
      'Rust': '#dea584',
      'Dart': '#00B4AB'
    };
    return colors[language] || '#858585';
  }
}
