export const COLORS_WRITER = {
  primary:  {
    typeSpeed: 60,
    typeColor: 'var(--primary-color)',
    cursorColor: 'var(--primary-color)'
  },

  orange: {
    typeSpeed: 60,
    typeColor: 'var(--orange-600)',
    cursorColor: 'var(--orange-600)'
  },

  green600: {
    typeSpeed: 60,
    typeColor: 'var(--green-600)',
    cursorColor: 'var(--green-600)'
  },

  green400: {
    typeSpeed: 60,
    typeColor: 'var(--green-400)',
    cursorColor: 'var(--text-color)'
  },

  blue600: {
    typeSpeed: 60,
    typeColor: 'var(--blue-600)',
    cursorColor: 'var(--text-color)'
  },

  blue400: {
    typeSpeed: 60,
    typeColor: 'var(--blue-400)',
    cursorColor: 'var(--text-color)'
  },

  red400: {
    typeSpeed: 60,
    typeColor: 'var(--red-400)',
    cursorColor: 'var(--text-color)'
  },

  text: {
    typeSpeed: 60,
    typeColor: 'var(--text-color)',
    cursorColor: 'var(--text-color)'
  },

  textDefault: {
    typeSpeed: 60,
    typeColor: 'var(--text-400)',
    cursorColor: 'var(--text-color)'
  }
};

export const MssSendEmailConst = {
  ['success_send_email']: {
    key: 'fh-toast',
    severity: 'success',
    summary: '¡Hecho!',
    detail: 'Su mensaje se ha enviado correctamente, en breve me pondré en contacto con usted.'
  },

  ['error_connection']: {
    key: 'fh-toast',
    severity: 'error',
    summary: '¡Error!',
    detail: 'Error de conexion, intente nuevamente.'
  },

  ['error_send_email']: {
    key: 'fh-toast',
    severity: 'warn',
    summary: '¡Atención!',
    detail: 'No se pudo enviar el mensaje.'
  },

  ['campos_obligatorios']: {
    key: 'fh-toast',
    severity: 'warn',
    summary: '¡Atención!',
    detail: 'Todos los campos son obligatorios.'
  }
}
