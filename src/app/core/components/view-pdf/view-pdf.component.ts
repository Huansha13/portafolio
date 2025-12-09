import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../utils/settings.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-view-pdf',
  templateUrl: './view-pdf.component.html',
  styleUrl: './view-pdf.component.scss'
})
export class ViewPdfComponent implements OnInit {
  data: { pdf: string };
  currentPage = 1;
  totalPages = 0;
  zoom = 1;
  isLoading = true;
  error = false;

  constructor(
    public settings: SettingsService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.data = this.config.data;
    console.log('PDF URL:', this.data.pdf);
    
    // Zoom inicial: 50% en web, 100% en móvil
    this.zoom = this.settings.view.sm ? 1 : 0.5;
    
    // Timeout para manejar casos donde el PDF no carga
    setTimeout(() => {
      if (this.isLoading && this.totalPages === 0) {
        this.onError('Timeout loading PDF');
      }
    }, 10000);
  }

  onLoadComplete(pdf: any): void {
    this.totalPages = pdf.numPages;
    this.currentPage = 1;
    this.isLoading = false;
    this.error = false;
  }

  onError(error: any): void {
    console.error('PDF Error:', error);
    this.error = true;
    this.isLoading = false;
  }

  onProgress(progress: any): void {
    // PDF loading progress
  }

  onPageRendered(event: any): void {
    // Remover este método ya que causa problemas con show-all
  }

  previousPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  zoomIn(): void {
    this.zoom = Math.min(this.zoom + 0.25, 3);
  }

  zoomOut(): void {
    this.zoom = Math.max(this.zoom - 0.25, 0.5);
  }

  resetZoom(): void {
    this.zoom = 1;
  }

  download(): void {
    const link = document.createElement('a');
    link.href = this.data.pdf;
    link.download = 'CV-Frank-Huansha.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  close(): void {
    this.ref.close();
  }
}
