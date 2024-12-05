export interface Contact {
  phone: string;
  email: string,
  address: string
}

export interface Email {
  nombre: string;
  correo: string;
  tipo: string;
  mensaje: string;
}

export interface ResponseEmail {
  subject:   string;
  to:        string;
  emailBody: string;
  markdown:  boolean;
  sentAt:    Date;
}
