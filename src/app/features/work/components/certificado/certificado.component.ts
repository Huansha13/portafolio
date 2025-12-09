import {Component, OnInit} from '@angular/core';
import {SettingsService} from 'src/app/core/utils/settings.service';
import { DialogService } from 'primeng/dynamicdialog';
import { ViewPdfComponent } from 'src/app/core/components/view-pdf/view-pdf.component';
import { ExcelService } from 'src/app/core/utils/excel.service';
import {HeaderCertificados} from 'src/app/core/model/excel.model';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.scss'
})
export class CertificadoComponent implements OnInit {
  certificados: HeaderCertificados[];


  constructor(
    public settings: SettingsService,
    private readonly excelService: ExcelService,
    private readonly dialogService: DialogService) {
  }

  ngOnInit(): void {
    this.excelService.obtenerCertificados().then(certificados => {
      this.certificados = certificados;
    });
  }

  verCertificado(urlPdf: string, name: string) {
    if (this.settings.isEmpty(urlPdf)) {
      return;
    }

    this.dialogService.open(ViewPdfComponent, {
      header: name,
      width: this.settings.view.sm ? '100%' : '55%',
      height: '100%',
      contentStyle: {height: '100%'},
      data: {
        pdf: `${environment.base_url_assets}/${urlPdf}`,
      }
    })
  }

}
