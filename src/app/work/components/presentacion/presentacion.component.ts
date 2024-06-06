import {Component, Input, OnInit} from '@angular/core';
import {SettingsService} from "../../../core/utils/settings.service";
import {Home} from "../../model/home.interface";

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.scss'
})
export class PresentacionComponent implements OnInit {
  @Input() data: Home;
  constructor(public settings: SettingsService) { }

  ngOnInit() {
  }

  descargarCv() {
    window.open(this.data.linkCv, '_blank');
  }

  contactame() {
    window.open(`mailto:${this.data.correo}`, '_blank');
  }
}
