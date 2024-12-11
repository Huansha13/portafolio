import {Component, Input, OnInit} from '@angular/core';
import {ServiceBodyService} from "../../service/serviceBody.service";
import {SettingsService} from "../../../core/utils/settings.service";
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
    if (this.settings.isEmpty(this.busqueda)) {
      this.listaRepositorio$ = this.serviceBody.getRepos().pipe(
        map((repos: any[]) => repos)
      );
    } else {
      this.listaRepositorio$ = this.serviceBody.getRepos().pipe(
        map((repos: any[]) => repos
          .filter(
            repo => repo.name
              .toLowerCase()
              .includes(this.busqueda.toLowerCase())
          )
        )
      );
    }
  }
}
