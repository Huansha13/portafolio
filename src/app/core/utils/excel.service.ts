import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as XLSX from 'xlsx';
import { HeaderCertificados, VerCertificado } from '../model/excel.model';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  constructor(private readonly http: HttpClient) { }

  obtenerCertificados(): Promise<HeaderCertificados[]> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.data_cv, { responseType: 'blob' }).subscribe({
        next: (response) => {
          const file = new File([response], 'archivo.xlsx');
          const reader = new FileReader();
          reader.onload = (e: ProgressEvent<FileReader>) => {
            const data = new Uint8Array(e.target.result as ArrayBuffer);
            const workbook = XLSX.read(data, { type: 'array' });

            // Leer ambas hojas
            const headerData: HeaderCertificados[] = XLSX.utils.sheet_to_json(workbook.Sheets['certificado_header']);
            const verCertificadosData: VerCertificado[] = XLSX.utils.sheet_to_json(workbook.Sheets['certificado_items']);

            const combinedData: HeaderCertificados[] = headerData.map((headerItem) => {
              const relatedVerCertificados = verCertificadosData.filter((verCert) => verCert.id_header === headerItem.correlativo_id);
              return {
                ...headerItem,
                verCertificados: relatedVerCertificados
              };
            });

            resolve(combinedData);
          };
          reader.readAsArrayBuffer(file);
        },
        error: (error) => {
          reject(error);
        }
      });
    });
  }
}
