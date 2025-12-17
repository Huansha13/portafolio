# 🎯 Core Module

## Propósito

El módulo Core contiene servicios singleton y funcionalidades que se cargan una sola vez en toda la aplicación.

## Estructura

```
core/
├── guards/              # Guards de navegación
├── interceptors/        # HTTP interceptors
├── services/            # Servicios globales
├── models/              # Interfaces globales
├── utils/               # Utilidades y helpers
└── components/          # Componentes core
```

## Servicios Principales

- `settings.service.ts` - Configuración global
- `theme.service.ts` - Manejo de temas
- `seasonal-theme.service.ts` - Temas estacionales
- `excel.service.ts` - Servicios de datos

## Reglas

1. **Singleton**: Importar CoreModule solo en AppModule
2. **No exportar componentes**: Solo servicios y utilidades
3. **Servicios globales**: Solo servicios usados en toda la app
