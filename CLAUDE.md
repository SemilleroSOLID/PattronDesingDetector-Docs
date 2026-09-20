# CLAUDE.md

## Docs — Pattern Detector (Docusaurus)

Sitio de documentación del proyecto (backend + extensión), construido con Docusaurus 3.

### Comandos

```bash
npm run start   # dev server — "Next" siempre visible junto a las versiones oficiales
npm run build   # build de producción — "Next" queda oculto hasta cortar versión
npm run typecheck
```

### No referenciar issues en el contenido de la documentación

El contenido de `docs/` (y cualquier página publicada del sitio) **no debe
mencionar números de issue** (`issue #154`, `#153`, etc.) ni frases del
estilo "se agregó en el issue X". Esta documentación explica **cómo está
hecho y cómo se comporta** el sistema — no es un changelog ni un historial
de tickets. Referenciar issues acopla la doc a un tracker externo, no
envejece bien (el issue se cierra, se renombra, el lector no tiene por qué
tener acceso al repo privado) y lee como nota interna, no como
documentación pulida para quien consume el sitio.

En su lugar: describí la funcionalidad y su razón de ser directamente
("el backend expone rate limiting por IP para no agotar la cuota de IA"),
sin el paréntesis de trazabilidad al issue. Esa trazabilidad vive en el
`CLAUDE.md`/commits del backend, no acá.

Esto aplica a páginas nuevas y a ediciones de las existentes — si al copiar
o basar contenido en el `CLAUDE.md`/README del backend aparece una
referencia a un issue, se quita al traer el contenido a este repo.

### Versionado de la documentación

Ver la sección "Versionado de la documentación" en el README — resumen: `docs/`
es siempre el borrador ("Next"); una versión oficial se congela a mano con
`npm run docusaurus docs:version X.Y`, nunca automáticamente al mergear a `main`.
