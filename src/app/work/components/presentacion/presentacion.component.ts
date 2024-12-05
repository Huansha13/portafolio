import { Component, Input } from '@angular/core';
import { SettingsService } from "../../../core/utils/settings.service";
import { Home } from "../../model/home.interface";
import { DialogService } from 'primeng/dynamicdialog';
import { FormContactameComponent } from 'src/app/contact/modal/form-contactame/form-contactame.component';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.scss'
})
export class PresentacionComponent {
  @Input() data: Home;
  constructor(
    public settings: SettingsService,
    private readonly dialogService: DialogService
  ) { }

  descargarCv() {
    window.open(this.data.linkCv, '_blank');
  }

  contactame() {
    this.dialogService.open(FormContactameComponent, {
      header: 'Contáctate conmigo',
      width: '30%'
    });
  }
}
