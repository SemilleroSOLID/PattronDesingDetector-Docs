import type {ReactNode} from 'react';

type IconProps = {className?: string};

// Iconos de línea simples, un solo color (currentColor) para que hereden
// el color de texto del tema. Reemplazan las ilustraciones mascota de
// Docusaurus — más chicos y neutros a propósito, la marca ya la lleva el
// logo/paleta, no hace falta una ilustración por feature.

export function ShieldCheckIcon({className}: IconProps): ReactNode {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-hidden="true">
      <path
        d="M32 6 L54 14 V30 C54 44 45 53 32 58 C19 53 10 44 10 30 V14 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M22 32 L29 39 L43 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparkBracketIcon({className}: IconProps): ReactNode {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-hidden="true">
      <path
        d="M24 12 C17 12 15 14 15 21 V26 C15 30 13 32 10 32 C13 32 15 34 15 38 V43 C15 50 17 52 24 52"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M40 12 C47 12 49 14 49 21 V26 C49 30 51 32 54 32 C51 32 49 34 49 38 V43 C49 50 47 52 40 52"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M32 22 L34.5 29.5 L42 32 L34.5 34.5 L32 42 L29.5 34.5 L22 32 L29.5 29.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function EditorPlugIcon({className}: IconProps): ReactNode {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-hidden="true">
      <rect
        x="8"
        y="12"
        width="48"
        height="36"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <line x1="8" y1="22" x2="56" y2="22" stroke="currentColor" strokeWidth="3" />
      <line x1="17" y1="12" x2="17" y2="22" stroke="currentColor" strokeWidth="3" />
      <line x1="26" y1="12" x2="26" y2="22" stroke="currentColor" strokeWidth="3" />
      <line x1="18" y1="30" x2="34" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="18" y1="37" x2="42" y2="37" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="18" y1="44" x2="28" y2="44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
