export interface Abilities {
  id?: string;
  color: string;
  icono: string;
  nombre: string;
  porcentaje: string;
}

//nombre: string, icon: string, tecnologia: string[]
export interface Habilidad {
  nombre: string;
  tecnologia: Tecnologia[];
}

export interface Tecnologia {
  icon: string;
  label: string;
}
