import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import * as XLSX from 'xlsx';
import {HeaderCertificados, HeaderProyectos} from '../model/excel.model';
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  constructor(private readonly http: HttpClient) {
  }

  private async fetchExcelData<T>(
    sheetNames: string[],
    keyMapping: { [key: string]: string }
  ): Promise<T[]> {
    try {
      const response = await lastValueFrom(
        this.http.get(environment.data_cv, {responseType: 'blob'})
      );

      const file = new File([response], 'archivo.xlsx');
      const data = await this.readFileAsArrayBuffer(file);

      const workbook = XLSX.read(new Uint8Array(data), {type: 'array'});

      const parsedData = sheetNames.reduce((acc, sheetName) => {
        acc[sheetName] = XLSX.utils.sheet_to_json<T>(
          workbook.Sheets[sheetName]
        );
        return acc;
      }, {} as { [key: string]: T[] });

      return this.mapRelatedData(parsedData, keyMapping);
    } catch (error) {
      console.error('Error fetching Excel data:', error);
      throw error;
    }
  }

  private readFileAsArrayBuffer(file: File): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as ArrayBuffer);
      reader.onerror = () => reject(reader.error);
      reader.readAsArrayBuffer(file);
    });
  }

  private mapRelatedData<T>(
    data: { [key: string]: T[] },
    keyMapping: { [key: string]: string }
  ): T[] {
    const [parentKey, childKey] = Object.keys(keyMapping);
    const parentData = data[parentKey];
    const childData = data[childKey];

    return parentData.map((parentItem) => ({
      ...parentItem,
      relatedItems: childData.filter(
        (childItem) =>
          childItem[keyMapping[childKey]] === parentItem[keyMapping[parentKey]]
      ),
    }));
  }

  obtenerCertificados(): Promise<HeaderCertificados[]> {
    return this.fetchExcelData<HeaderCertificados>(
      ['certificado_header', 'certificado_items'],
      {certificado_header: 'correlativo_id', certificado_items: 'id_header'}
    );
  }

  obtenerMisProyectos(): Promise<HeaderProyectos[]> {
    return this.fetchExcelData<HeaderProyectos>(
      ['proyectos_header', 'proyecto_foto'],
      {proyectos_header: 'id_proyecto', proyecto_foto: 'id_proyecto'}
    );
  }
}
