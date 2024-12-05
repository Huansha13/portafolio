import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../utils/settings.service';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-view-pdf',
  templateUrl: './view-pdf.component.html',
  styleUrl: './view-pdf.component.scss'
})
export class ViewPdfComponent implements OnInit {
  data: { pdf: any };

  currentPage: number = 1;
  totalPages: number = 0;

  constructor(public settings: SettingsService,
    private readonly config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.data = this.config.data;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    this.currentPage++;
  }

  onLoadComplete(pdf: any) {
    this.totalPages = pdf.numPages;
  }

  private downloadPdf(objectUrl: string): void {
    const link = document.createElement('a');
    link.href = objectUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  download() {
    try {
      const objectUrl = this.data.pdf;
      this.downloadPdf(objectUrl);
      URL.revokeObjectURL(objectUrl);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
