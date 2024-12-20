import { Component, Input } from '@angular/core';
import { SettingsService } from "../../../core/utils/settings.service";
import { Home } from "../../model/home.interface";
import { DialogService } from 'primeng/dynamicdialog';
import { FormContactameComponent } from 'src/app/contact/modal/form-contactame/form-contactame.component';
import { ViewPdfComponent } from 'src/app/core/components/view-pdf/view-pdf.component';
import { environment } from 'src/environments/environment';

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
    this.dialogService.open(ViewPdfComponent, {
      header: "Mi Currículo Vitae",
      width: this.settings.view.sm ? '100%' : '55%',
      height: '100%',
      contentStyle: {height: '100%'},
      data: {
        pdf: `${environment.base_url_assets}/${this.data.linkCv}`,
      }
    })
  }

  contactame() {
    this.dialogService.open(FormContactameComponent, {
      header: 'Contáctate conmigo',
      width: this.settings.view.sm ? '100%' : '30%'
    });
  }
}
