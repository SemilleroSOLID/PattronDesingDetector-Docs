import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import {motion, useReducedMotion} from 'framer-motion';
import {EditorPlugIcon, ShieldCheckIcon, SparkBracketIcon} from './icons';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Icon: React.ComponentType<{className?: string}>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Detecta patrones creacionales',
    Icon: ShieldCheckIcon,
    description: (
      <>
        Identifica candidatos a <strong>Singleton</strong>,{' '}
        <strong>Factory Method</strong> y <strong>Builder</strong> en tu
        código Java — y de paso, también marca God Class y violaciones de
        SRP, DIP, OCP y LSP, con umbrales configurables.
      </>
    ),
  },
  {
    title: 'Sugerencias con IA verificadas',
    Icon: SparkBracketIcon,
    description: (
      <>
        Un agente de refactor propone la extracción de clases y un segundo
        agente de QA la revisa antes de mostrártela — nunca una sugerencia
        sin chequear.
      </>
    ),
  },
  {
    title: 'Directo en tu flujo de VS Code',
    Icon: EditorPlugIcon,
    description: (
      <>
        La extensión analiza al guardar y genera un reporte Markdown
        navegable — sin salir del editor ni correr nada por consola.
      </>
    ),
  },
];

function Feature({title, Icon, description, index}: FeatureItem & {index: number}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={clsx('col col--4')}
      initial={shouldReduceMotion ? false : {opacity: 0, y: 24}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.4}}
      transition={{duration: 0.5, delay: index * 0.1, ease: 'easeOut'}}>
      <div className="text--center">
        <Icon className={styles.featureIcon} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} index={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
