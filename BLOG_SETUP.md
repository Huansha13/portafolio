# 📝 Configuración del Blog

## ✅ Instalado

- `ngx-markdown@18.0.0` - Renderizado de Markdown
- `marked` - Parser de Markdown  
- `highlight.js` - Syntax highlighting para código

## 📁 Estructura Creada

```
src/
├── assets/blog/
│   ├── posts/           # Archivos .md de posts
│   └── images/          # Imágenes de posts
│
└── app/features/blog/
    ├── models/          # Interfaces
    ├── services/        # BlogService
    ├── components/      # Componentes reutilizables
    └── pages/           # Páginas del blog
```

## 📝 Cómo Crear un Post

### 1. Crear archivo Markdown

Crea un archivo en `src/assets/blog/posts/fundamentos-python-2026.md`:

```markdown
# Fundamentos de Programación con Python 2026

## Introducción

Python es uno de los lenguajes más populares para aprender programación...

## Variables y Tipos de Datos

```python
# Ejemplo de variables
nombre = "Juan"
edad = 25
altura = 1.75
es_estudiante = True
```

## Estructuras de Control

### Condicionales

```python
if edad >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")
```

### Bucles

```python
for i in range(5):
    print(f"Iteración {i}")
```

## Conclusión

Python es un excelente lenguaje para comenzar...
```

### 2. Agregar metadata del post

Edita `src/assets/blog/posts.json`:

```json
{
  "posts": [
    {
      "id": "fundamentos-python-2026",
      "title": "Fundamentos de Programación con Python 2026",
      "slug": "fundamentos-python-2026",
      "excerpt": "Aprende los conceptos básicos de programación con Python desde cero.",
      "author": "Tu Nombre",
      "date": "2026-01-15",
      "readTime": "10 min",
      "tags": ["Python", "Programación", "Tutorial"],
      "category": "Tutorial",
      "coverImage": "/assets/blog/images/python-2026.jpg",
      "published": true
    }
  ]
}
```

## 🎨 Editor Visual Recomendado

Para escribir posts con preview en tiempo real:

### Opción 1: StackEdit (Online, Gratis)
- URL: https://stackedit.io/
- ✅ Preview en tiempo real
- ✅ Syntax highlighting
- ✅ Exportar a .md
- ✅ No requiere instalación

### Opción 2: Typora (Desktop, Pago)
- URL: https://typora.io/
- ✅ WYSIWYG editor
- ✅ Muy intuitivo
- ❌ $14.99 (pago único)

### Opción 3: VS Code + Extension
- Extension: "Markdown All in One"
- ✅ Gratis
- ✅ Preview integrado
- ✅ Ya lo tienes instalado

**Recomendación:** Usa **StackEdit** para empezar (gratis y fácil)

## 🚀 Próximos Pasos

1. ✅ Librerías instaladas
2. ✅ Estructura creada
3. ⏳ Crear interfaces y servicios
4. ⏳ Crear componentes del blog
5. ⏳ Crear páginas (listado y detalle)
6. ⏳ Configurar routing
7. ⏳ Agregar syntax highlighting
8. ⏳ Crear tu primer post

## 📚 Recursos

- [Markdown Guide](https://www.markdownguide.org/)
- [ngx-markdown Docs](https://github.com/jfcere/ngx-markdown)
- [Highlight.js Themes](https://highlightjs.org/static/demo/)

---

**¿Listo para continuar con la implementación?** 🚀
