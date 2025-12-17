import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
  experiencias: any[] = [];
  experienciasVisible: any[] = [];
  educacion: any[] = [];
  mostrarTodas = false;
  activeTab: string = 'experience';

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadData();
    this.translate.onLangChange.subscribe(() => this.loadData());
  }

  loadData() {
    this.translate.get('experience.companies').subscribe(data => {
      this.experiencias = data;
      this.experienciasVisible = data.slice(0, 2);
    });
    this.translate.get('experience.education').subscribe(data => {
      this.educacion = data;
    });
  }

  verMas() {
    this.mostrarTodas = true;
    this.experienciasVisible = this.experiencias;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  getTotalDuration(positions: any[]): string {
    const lang = this.translate.currentLang || 'es';
    const yearText = lang === 'es' ? 'año' : 'year';
    const yearsText = lang === 'es' ? 'años' : 'years';
    
    // Obtener fecha más antigua y más reciente
    let oldestDate: Date | null = null;
    let newestDate: Date | null = null;
    
    positions.forEach(pos => {
      const dates = pos.fecha.split(' - ');
      const startDate = this.parseDate(dates[0]);
      const endDate = dates[1] ? this.parseDate(dates[1]) : new Date();
      
      if (!oldestDate || startDate < oldestDate) oldestDate = startDate;
      if (!newestDate || endDate > newestDate) newestDate = endDate;
    });
    
    if (!oldestDate || !newestDate) return '';
    
    const totalMonths = (newestDate.getFullYear() - oldestDate.getFullYear()) * 12 + 
                        (newestDate.getMonth() - oldestDate.getMonth());
    
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    if (years === 0) return `${months} ${months === 1 ? (lang === 'es' ? 'mes' : 'month') : (lang === 'es' ? 'meses' : 'months')}`;
    if (months === 0) return `${years} ${years === 1 ? yearText : yearsText}`;
    return `${years} ${years === 1 ? yearText : yearsText}`;
  }
  
  parseDate(dateStr: string): Date {
    const months: any = {
      'ene': 0, 'feb': 1, 'mar': 2, 'abr': 3, 'may': 4, 'jun': 5,
      'jul': 6, 'ago': 7, 'sep': 8, 'oct': 9, 'nov': 10, 'dic': 11,
      'jan': 0, 'apr': 3, 'aug': 7, 'dec': 11
    };
    
    if (dateStr.toLowerCase().includes('presente') || dateStr.toLowerCase().includes('present')) {
      return new Date();
    }
    
    const parts = dateStr.trim().split(' ');
    if (parts.length >= 2) {
      const month = months[parts[0].toLowerCase().substring(0, 3)] || 0;
      const year = parseInt(parts[1]);
      return new Date(year, month);
    }
    
    return new Date(parseInt(dateStr), 0);
  }
}
