import React from 'react';
import useSpecData from '@theme/useSpecData';
import clsx from 'clsx';
import 'docusaurus-theme-redoc/dist/global';
import { RedocStandalone } from 'redoc';
import type { RedocProps } from '../../types/common';
import { useSpecOptions } from 'docusaurus-theme-redoc/dist/utils/useSpecOptions';
import './styles.css';

// Pattern Detector: el componente original de docusaurus-theme-redoc
// pre-renderiza a HTML estatico en build time (ServerRedoc) siempre que el
// spec viene de un archivo local — eso significa que el tema queda fijado
// en "claro" para siempre en produccion, sin importar el toggle del sitio
// (useSpecOptions solo reacciona a useColorMode() del lado del cliente).
// Se elimina esa rama a proposito para que el contrato de API siga el
// modo claro/oscuro global igual que el resto del sitio.
function Redoc(initProps: RedocProps): JSX.Element {
  // eslint-disable-next-line react/destructuring-assignment
  const specProps = useSpecData(initProps.id, initProps.spec);
  const finalProps = {
    ...specProps,
    ...initProps,
  };

  const {className, spec, url, themeId, optionsOverrides} = finalProps;
  const { options } = useSpecOptions(themeId, optionsOverrides);

  // `spec` ya viene parseado por el plugin en build time (evita un fetch
  // client-side del archivo relativo que el plugin genera para descarga,
  // que no resuelve bien desde una ruta anidada como /api-contrato/).
  return (
    <div className={clsx(['redocusaurus', className])}>
      {spec ? (
        <RedocStandalone spec={spec} options={options} />
      ) : (
        <RedocStandalone specUrl={url} options={options} />
      )}
    </div>
  );
}

export default Redoc;
