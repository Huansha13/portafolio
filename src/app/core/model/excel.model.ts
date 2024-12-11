export interface HeaderCertificados {
  correlativo_id: number;
  titulo: string;
  relatedItems: VerCertificado[];
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

export interface HeaderProyectos {
  id_proyecto: number;
  nombre: string;
  fecha_creacion: string;
  link_github: string;
  link_demo: string;
  version: string;
  url_portada: string;
  url_pw: string;
  status: number;
  relatedItems: ProyectosFoto[];
}

export interface ProyectosFoto {
  id_proyecto: number;
  correlativo: number;
  url_foto: string;
}


export interface WsCodeExcel {
  mss: string;
  id: number;
}
