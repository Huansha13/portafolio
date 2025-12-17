export interface Home {
  id?:string;
  correo: string;
  descripcion: string;
  linkCv: string;
  linkedin?: string;
}

export interface Experiencia {
  icon: string;
  label: string;
  description: string;
}
