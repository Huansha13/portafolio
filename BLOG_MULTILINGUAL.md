# Sistema Multiidioma del Blog

## Estructura de Posts

Los posts del blog ahora soportan múltiples idiomas de forma escalable. Cada post se define en `/assets/blog/posts.json` con la siguiente estructura:

```json
{
  "posts": [
    {
      "id": "unique-post-id",
      "slug": "post-url-slug",
      "author": "Nombre del Autor",
      "date": "2026-01-15",
      "coverImage": "/assets/blog/images/image.jpg",
      "published": true,
      "translations": {
        "es": {
          "title": "Título en Español",
          "excerpt": "Descripción corta en español...",
          "readTime": "15 min",
          "tags": ["Tag1", "Tag2"],
          "category": "Categoría"
        },
        "en": {
          "title": "Title in English",
          "excerpt": "Short description in English...",
          "readTime": "15 min",
          "tags": ["Tag1", "Tag2"],
          "category": "Category"
        }
      }
    }
  ]
}
```

## Agregar un Nuevo Post

1. Abre `/assets/blog/posts.json`
2. Agrega un nuevo objeto al array `posts` con:
   - `id`: Identificador único
   - `slug`: URL amigable
   - `author`: Nombre del autor
   - `date`: Fecha en formato YYYY-MM-DD
   - `coverImage`: Ruta de la imagen
   - `published`: true/false
   - `translations`: Objeto con traducciones por idioma

## Agregar un Nuevo Idioma

### 1. Crear archivos de traducción
Crea los archivos en `/assets/i18n/{lang}/blog.json`:

```json
{
  "header": {
    "backToPortfolio": "Traducción",
    "allPosts": "Traducción"
  },
  "list": {
    "title": "Traducción",
    "subtitle": "Traducción"
  }
}
```

### 2. Agregar idioma al enum
Edita `/src/app/core/utils/enum.ts` y agrega el nuevo idioma:

```typescript
export enum Idioma {
  ES = 'es',
  EN = 'en',
  FR = 'fr'  // Nuevo idioma
}
```

### 3. Actualizar selector de idioma
Edita `/src/app/features/blog/components/blog-header/blog-header.component.ts`:

```typescript
optIdioma = [
  { name: 'ES', code: Idioma.ES },
  { name: 'EN', code: Idioma.EN },
  { name: 'FR', code: Idioma.FR }  // Nuevo idioma
];
```

### 4. Agregar traducciones a posts existentes
En `/assets/blog/posts.json`, agrega la traducción al objeto `translations`:

```json
"translations": {
  "es": { ... },
  "en": { ... },
  "fr": {
    "title": "Titre en français",
    "excerpt": "Description en français...",
    "readTime": "15 min",
    "tags": ["Tag1", "Tag2"],
    "category": "Catégorie"
  }
}
```

## Características

- ✅ Selector de idioma en el header del blog
- ✅ Posts filtrados automáticamente por idioma actual
- ✅ Traducciones dinámicas desde JSON
- ✅ Escalable para agregar más idiomas
- ✅ Sincronización con el idioma del portafolio
- ✅ Recarga automática al cambiar idioma

## Notas

- El idioma se guarda en `localStorage` con la key `IDIOMA`
- Si un post no tiene traducción para el idioma actual, no se mostrará
- El idioma por defecto es español (`es`)
