import {Component, Input, OnInit} from '@angular/core';
import { SettingsService } from "../../../../core/utils/settings.service";
import { Home } from "../../model/home.interface";
import { DialogService } from 'primeng/dynamicdialog';
import { FormContactameComponent } from 'src/app/features/contact/modal/form-contactame/form-contactame.component';
import { ViewPdfComponent } from 'src/app/core/components/view-pdf/view-pdf.component';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { SeasonalThemeService } from 'src/app/core/utils/seasonal-theme.service';

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
    private readonly dialogService: DialogService,
    private translate: TranslateService,
    private seasonalTheme: SeasonalThemeService
  ) { }

  rolesKeys = ['frontend', 'backend', 'cloud', 'database'];
  currentRoleIndex = 0;
  codeSkills: string[] = [];
  currentTheme: string = 'default';

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

    this.loadCodeSkills();
    this.translate.onLangChange.subscribe(() => {
      this.loadCodeSkills();
    });

    setInterval(() => {
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.rolesKeys.length;
    }, 2500);

    this.currentTheme = this.getCurrentSeasonTheme();
  }

  getCurrentSeasonTheme(): string {
    const theme = this.seasonalTheme.getCurrentTheme();
    return theme ? theme.id : 'default';
  }

  loadCodeSkills() {
    this.translate.get('home.codeWindow.skills').subscribe((skills: string[]) => {
      this.codeSkills = skills;
    });
  }

  descargarCv() {
    this.dialogService.open(ViewPdfComponent, {
      showHeader: false,
      width: this.settings.view.sm ? '100vw' : '70vw',
      height: this.settings.view.sm ? '100vh' : '90vh',
      contentStyle: {
        padding: '0',
        overflow: 'hidden',
        borderRadius: this.settings.view.sm ? '0' : '12px'
      },
      styleClass: 'pdf-dialog',
      data: {
        pdf: this.translate.instant('home.urlCV')
      }
    });
  }

  contactame() {
    this.dialogService.open(FormContactameComponent, {
      header: 'Contáctate conmigo',
      width: this.settings.view.sm ? '100%' : '30%'
    });
  }

  protected openLinkedIn(): void {
    const url = this.translate.instant('contact.methods.linkedin.value');
    console.log(url)
    window.open(url, '_blank');
  }
}
