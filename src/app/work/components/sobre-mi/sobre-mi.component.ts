import {Component, Input, OnInit} from '@angular/core';
import {About} from "../../model/about.interface";
import {Experiencia} from "../../model/home.interface";
import {PrimeIcons} from "primeng/api";
import {SettingsService} from "../../../core/utils/settings.service";

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.scss'
})
export class SobreMiComponent implements OnInit {
  @Input() data: About;
  dataHabilidadesResumen: Experiencia[] = [];

  constructor(
    public settings: SettingsService,
  ) {
  }

  ngOnInit() {
    this.dataHabilidadesResumen = [
      {
        label: 'Diseñador',
        icon: PrimeIcons.PALETTE,
        description: 'Prototipado de aplicaciones interactivas y visualmente atractivas.'
      },
      {
        label: 'Desarrollador Full Stack',
        icon: PrimeIcons.CODE,
        description: 'Maquetación y desarrollo de aplicaciones web responsivas y servicios API.'
      },
      {
        label: 'Desarrollador móvil',
        icon: PrimeIcons.MOBILE,
        description: 'Experiencia en el desarrollo de aplicaciones móviles para Android e iOS.'
      },
    ]
  }
}
