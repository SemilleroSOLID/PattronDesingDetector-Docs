# Pattern Detector — Docs

Sitio de documentación del proyecto Pattern Detector del semillero: arquitectura de los dos repos hermanos (backend Python y extensión VS Code, ambos privados), heurísticas de detección de antipatrones, contrato de API y comandos de la extensión. Construido con [Docusaurus](https://docusaurus.io/) + React + TypeScript.

> **Para abrir un PR:** seguí [CONTRIBUTING.md](CONTRIBUTING.md). Cada PR lleva capturas o un video corto de lo que cambia; sin eso no se revisa.

## Installation

```bash
npm install
```

**Note**: feel free to use the package manager of your choice.

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Versionado de la documentación

La carpeta `docs/` es siempre el borrador de trabajo ("Next"), oculto al público en el build de producción. Cuando algo pasa a producción, esa foto de `docs/` se congela como versión oficial.

**Numeración: 0.x hasta la versión pública.** La aplicación todavía no tiene una versión publicada, así que la documentación se versiona en `0.x` (la oficial actual es `0.2`), igual que el backend y la extensión. La `1.0` de la documentación se corta recién cuando se publique la 1.0 de la aplicación.

Para cortar una versión:

1. Dejá `docs/` reflejando lo que se está integrando a producción.
2. Cortá la versión (ejemplo con `0.3`):
   ```bash
   npm run docusaurus docs:version 0.3
   ```
   Esto crea `versioned_docs/version-0.3/`, `versioned_sidebars/version-0.3-sidebars.json` y agrega `0.3` a `versions.json`.
3. En `docusaurus.config.ts`, actualizá:
   - `lastVersion` → `'0.3'`
   - `onlyIncludeVersions` (rama de producción) → agregá `'0.3'` a la lista, manteniendo como máximo las 2 versiones más recientes.
4. Si ya hay 3 versiones guardadas, jubilá la más vieja: borrá su carpeta en `versioned_docs/`, su archivo en `versioned_sidebars/`, y sacá su entrada de `versions.json` y de `onlyIncludeVersions`.
5. Seguís editando `docs/` con normalidad — eso vuelve a ser el borrador para la próxima versión, sin tocar las ya congeladas.

En `npm run start` (desarrollo) siempre se ve "Next" además de las versiones oficiales, para poder previsualizar antes de cortar. En `npm run build` (producción) "Next" queda oculto.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
