# WilmarBarber

Plataforma web para la barbería de Wilmar, «El Niche», en el barrio Ciudad Dorada, Armenia, Quindío (Colombia). Reemplaza los turnos por WhatsApp con una fila inteligente que el cliente puede seguir desde su celular, y le da a Wilmar un panel muy sencillo para administrar el negocio.

> Estado: en desarrollo. El nombre es provisional.

## Estado del proyecto

| Fase | Contenido | Estado |
| --- | --- | --- |
| 1 | Estructura, Angular, backend, Prisma, PostgreSQL, documentación | Frontend listo. Backend pendiente |
| 2 | Identidad visual, layout público, navegación, responsive | Hecho en el frontend |
| 3 | Base de datos, modelos, API, autenticación | Pendiente |
| 4 | Catálogo, WiliList, servicios, galería | Vista previa en inicio. Falta lo demás |
| 5 | Turnos, reservas, fila en tiempo real, notificaciones | Pendiente |
| 6 | Pagos, reseñas, panel administrativo | Pendiente |
| 7 | Estadísticas, PWA, QR, seguridad, pruebas | Pendiente |

## Requisitos

- Node.js 20.19 o superior, 22.12 o superior, o 24 (probado con 24)
- npm
- Git

## Cómo ejecutar el frontend

```bash
cd frontend
npm install
npm start
```

Se abre en `http://localhost:4200/`. Para compilar en modo producción: `npm run build`.

## Estructura

```
wilmar-studio/
├── frontend/   Angular 21 (core, shared, features con carga diferida)
├── backend/    Node.js con arquitectura hexagonal (pendiente)
├── docs/       Decisiones y guías
└── README.md
```

Dentro de `frontend/src/app/`:

- `core/`: servicios globales (por ejemplo, la WiliList).
- `shared/`: piezas reutilizables (navbar, footer).
- `features/`: `public/`, `turnos/` y `admin/`, cada página se carga solo cuando se visita.

## Ramas y commits

- `main`: solo código estable.
- `develop`: integración.
- `feature/<tema>`: trabajo de cada parte, que se une a `develop` al compilar sin errores.

Mensajes de commit: `feat:`, `fix:`, `style:`, `docs:`, `chore:`, `merge:`.

## Datos de demostración

Todo lo que aún no es real está marcado como demostración en pantalla y en el código: la fila (#20, 3 esperando), los estilos del catálogo y los marcadores de foto. No hay opiniones inventadas.

## Pendientes por confirmar con el negocio

- Número de WhatsApp y dirección exacta.
- Horario definitivo (por ahora, aproximado de 12:00 m. a 10:00 p. m.).
- Fotos reales de Wilmar, de los cortes y de la galería.
- Valores finales de los servicios adicionales (hoy, aproximados en $3.000 COP).