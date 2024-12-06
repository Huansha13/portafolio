export interface HeaderCertificados {
    correlativo_id: number;
    titulo: string;
    verCertificados: VerCertificado[];
  }

  export interface VerCertificado {
    id_header: number;
    correlativo: number;
    nameTec: string;
    fechaInicio: string;
    fechaFinCertificado: string;
    rutaArchivo: string;
    organizacionEmisora: string;

  }
