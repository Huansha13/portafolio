# Sistema de Traducciones Remotas

## Estructura de Carpetas

Crea la siguiente estructura en tu servidor/almacenamiento en la nube:

```
translations/
├── es/
│   ├── menu.json
│   ├── home.json
│   ├── about.json
│   ├── projects.json
│   ├── contact.json
│   └── skills.json
├── en/
│   ├── menu.json
│   ├── home.json
│   ├── about.json
│   ├── projects.json
│   ├── contact.json
│   └── skills.json
└── fr/
    ├── menu.json
    ├── home.json
    ├── about.json
    ├── projects.json
    ├── contact.json
    └── skills.json
```

## Ejemplo de Archivos JSON

### es/menu.json
```json
{
  "home": "Inicio",
  "about": "Sobre Mí",
  "projects": "Proyectos",
  "contact": "Contacto",
  "skills": "Habilidades"
}
```

### en/menu.json
```json
{
  "home": "Home",
  "about": "About Me",
  "projects": "Projects",
  "contact": "Contact",
  "skills": "Skills"
}
```

### es/home.json
```json
{
  "title": "Bienvenido a mi Portafolio",
  "subtitle": "Desarrollador Full Stack",
  "description": "Creando experiencias digitales increíbles"
}
```

### en/home.json
```json
{
  "title": "Welcome to my Portfolio",
  "subtitle": "Full Stack Developer",
  "description": "Creating amazing digital experiences"
}
```

## Configuración

1. **Sube los archivos JSON** a tu servidor o almacenamiento en la nube (AWS S3, Firebase Storage, etc.)

2. **Configura la URL** en tu archivo `.env`:
   ```
   NG_APP_TRANSLATIONS_URL=https://your-storage-url.com/translations
   ```

3. **Asegúrate de configurar CORS** en tu servidor para permitir peticiones desde tu dominio.

## Uso en Componentes

```typescript
// En tu componente
constructor(private translate: TranslateService) {}

ngOnInit() {
  // El texto se carga automáticamente según el idioma seleccionado
}
```

```html
<!-- En tu template -->
<h1>{{ 'menu.home' | translate }}</h1>
<p>{{ 'home.description' | translate }}</p>
```

## Agregar Nuevos Idiomas

1. Crea una nueva carpeta con el código del idioma (ej: `fr`, `de`, `pt`)
2. Copia todos los archivos JSON de un idioma existente
3. Traduce el contenido manteniendo la misma estructura
4. Agrega el nuevo idioma al selector en `nav-main.component.ts`:

```typescript
optIdioma = [
  {name: 'Español', code: 'es'},
  {name: 'English', code: 'en'},
  {name: 'Français', code: 'fr'}
]
```

## Notas Importantes

- Todos los archivos JSON deben mantener la misma estructura
- Solo cambia el contenido traducido, no las claves
- El sistema carga automáticamente todos los archivos al cambiar de idioma
- Si un archivo falla al cargar, el sistema continúa con los demás
