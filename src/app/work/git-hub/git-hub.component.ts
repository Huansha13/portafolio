import {Component, OnInit} from '@angular/core';
import {ServiceBodyService} from "../service/serviceBody.service";

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.scss']
})
export class GitHubComponent implements OnInit {
  listaRepositorio: any[] = [];

  constructor(private detalleGitHub: ServiceBodyService) {
  }

  ngOnInit() {
    this.detalleGitHub.detalleGitHub()
      .subscribe(value => this.detalleGitHub.obtenerMoreInfoGitHubByUrl(value.repos_url)
        .subscribe(repo => this.listaRepositorio = repo)
      )
  }

  loadLenguajes(resp: any) {
    this.detalleGitHub.obtenerMoreInfoGitHubByUrl(resp.languages_url).subscribe({
      next: lenguajes => {
        resp.lenguales = lenguajes;
      }
    })
  }
}
