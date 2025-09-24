import {Component, Input, OnInit} from '@angular/core';
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
export class PresentacionComponent implements OnInit {
  @Input() data: Home;
  aniosExperiencia!: number;
  techIcons = [];

  constructor(
    public settings: SettingsService,
    private readonly dialogService: DialogService
  ) { }

  ngOnInit(): void {
    const fechaInicio = new Date(2021, 0, 13);
    const hoy = new Date();

    let anios = hoy.getFullYear() - fechaInicio.getFullYear();

    if (
      hoy.getMonth() < fechaInicio.getMonth() ||
      (hoy.getMonth() === fechaInicio.getMonth() && hoy.getDate() < fechaInicio.getDate())
    ) {
      anios--;
    }

    this.aniosExperiencia = anios;

    // load tech icons
    const baseIcons = [
      { icon: 'ip-angular17', label: 'Angular 17' },
      { icon: 'ip-code-catalyst', label: 'Code Catalyst' },
      { icon: 'ip-docker', label: 'Docker' },
      { icon: 'ip-figma', label: 'Figma' },
      { icon: 'ip-git', label: 'Git' },
      { icon: 'ip-postgresql', label: 'PostgreSQL' },
      { icon: 'ip-spring', label: 'Spring' }
    ];

    // 🎨 Paleta de colores (1 por cada ícono)
    const gradients = [
      'linear-gradient(135deg, rgba(79,172,254,0.2), rgba(79,172,254,0.1))',   // Angular
      'linear-gradient(135deg, rgba(255,193,7,0.2), rgba(255,193,7,0.1))',     // Code Catalyst
      'linear-gradient(135deg, rgba(0,123,255,0.2), rgba(0,123,255,0.1))',     // Docker
      'linear-gradient(135deg, rgba(244,114,182,0.2), rgba(244,114,182,0.1))', // Figma
      'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(16,185,129,0.1))',   // Git
      'linear-gradient(135deg, rgba(52,152,219,0.2), rgba(52,152,219,0.1))',   // PostgreSQL
      'linear-gradient(135deg, rgba(240,147,251,0.2), rgba(240,147,251,0.1))'  // Spring
    ];

    const radius = 50; // distancia de los íconos respecto al centro
    const centerX = 45;
    const centerY = 45;

    this.techIcons = baseIcons.map((item, index) => {
      const angle = (index / baseIcons.length) * 2 * Math.PI;
      return {
        ...item,
        position: {
          top: `${centerY + radius * Math.sin(angle)}%`,
          left: `${centerX + radius * Math.cos(angle)}%`
        },
        delay: `${index * 1.5}s`,
        background: gradients[index % gradients.length] // asignar color según el índice
      };
    });
  }

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
