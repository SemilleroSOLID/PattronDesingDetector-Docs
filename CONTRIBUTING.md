# Cómo contribuir

## Flujo

1. Una rama por issue, desde `main`: `feat/issue-N-descripcion`, `fix/...` o `chore/...`.
2. Commits con [conventional commits](https://www.conventionalcommits.org/es/) (`feat:`, `fix:`, `chore:`, `docs:`): de ahí sale la versión automática al llegar a `main`.
3. PR a `main` con la plantilla completa y `Closes #N`, así la tarjeta del tablero se mueve sola.

## Capturas o video: obligatorios

Cada PR muestra lo que cambia. **Sin capturas o video, el PR no se revisa.**

- **Qué mostrar en el sitio de documentación:** capturas de cada página nueva o cambiada, vista con `npm start` (o el build), en modo claro.
- **Si la issue tiene la sección "Evidencia en el PR"**, se sube exactamente eso: es parte de los criterios de aceptación.
- **Videos de menos de 2 minutos.** Si no entran en GitHub, un link a Drive o YouTube no listado.
- **Cambios sin nada que se vea** (CI, refactors internos): la salida del comando o de los tests en un bloque de código.

Las imágenes y los videos se arrastran al cuadro de la descripción del PR: GitHub los sube solo.

El workflow `PR evidence` revisa la sección "Capturas / video" en cada PR y deja un aviso si está vacía. No bloquea el merge: el acuerdo es no aprobar sin evidencia.

## Antes de abrir el PR

- `npm run build` (falla si hay links rotos).
- Las reglas de código (issue #275): archivos de 60 líneas de código como máximo, sin comentarios dentro de las funciones y encabezados de 10 líneas como máximo.
