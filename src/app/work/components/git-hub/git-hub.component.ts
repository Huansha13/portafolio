import {Component, OnInit} from '@angular/core';
import {ServiceBodyService} from "../../service/serviceBody.service";
import {SettingsService} from "../../../core/utils/settings.service";

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.scss']
})
export class GitHubComponent implements OnInit {
  listaRepositorio: any[] = [];
  perfil: any;

  code = `function myFunction() {
  document.getElementById("demo1").innerHTML = "Test 1!";
  document.getElementById("demo2").innerHTML = "Test 2!";
}`;

  constructor(private serviceBody: ServiceBodyService,
              public settings: SettingsService ) {}

  ngOnInit() {
    this.serviceBody.getPerfil().subscribe({
      next: value => this.perfil = value
    })

    this.serviceBody.getRepos().subscribe({
      next: value => this.listaRepositorio = value
    });
  }

  irRepo(html_url: string) {
    window.open(html_url, '_blank');
  }
}
