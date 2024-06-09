import {Component, OnInit} from '@angular/core';
import {SettingsService} from "../../../core/utils/settings.service";

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.scss'
})
export class CertificadoComponent implements OnInit {
  certificados: any[];

  constructor(public settings: SettingsService) {
  }

  ngOnInit(): void {
    this.certificados = [
      {
        certificacion: "Gerente de Proyectos Certificado",
        organizacionEmisora: "Instituto de Gestión de Proyectos",
        fechaObtenida: "Mayo 2021"
      },
      {
        certificacion: "Analista de Datos Certificado",
        organizacionEmisora: "Instituto Internacional de Análisis de Negocios",
        fechaObtenida: "Septiembre 2020"
      },
      {
        certificacion: "Scrum Master Certificado",
        organizacionEmisora: "Alianza Scrum",
        fechaObtenida: "Noviembre 2019"
      },
      {
        certificacion: "Dueño de Producto Certificado",
        organizacionEmisora: "Scrum.org",
        fechaObtenida: "Marzo 2018"
      },
      {
        certificacion: "Analista de Negocios Certificado",
        organizacionEmisora: "Instituto Internacional de Análisis de Negocios",
        fechaObtenida: "Julio 2017"
      }
    ];
  }

}
