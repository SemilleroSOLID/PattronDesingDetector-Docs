import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import {motion, useReducedMotion} from 'framer-motion';
import {EditorPlugIcon, ShieldCheckIcon, SparkBracketIcon} from './icons';
import styles from './styles.module.css';

type FeatureItem = {
  id: string;
  title: ReactNode;
  Icon: React.ComponentType<{className?: string}>;
  description: ReactNode;
};

function useFeatureList(): FeatureItem[] {
  return [
    {
      id: 'creational',
      title: (
        <Translate id="homepage.feature.creational.title">
          Detecta patrones creacionales
        </Translate>
      ),
      Icon: ShieldCheckIcon,
      description: (
        <Translate
          id="homepage.feature.creational.description"
          values={{
            singleton: <strong>Singleton</strong>,
            factory: <strong>Factory Method</strong>,
            builder: <strong>Builder</strong>,
          }}>
          {'Identifica candidatos a {singleton}, {factory} y {builder} en tu código Java — y de paso, también marca God Class y violaciones de SRP, DIP, OCP y LSP, con umbrales configurables.'}
        </Translate>
      ),
    },
    {
      id: 'ai',
      title: (
        <Translate id="homepage.feature.ai.title">
          Sugerencias con IA verificadas
        </Translate>
      ),
      Icon: SparkBracketIcon,
      description: (
        <Translate id="homepage.feature.ai.description">
          Un agente de refactor propone la extracción de clases y un segundo
          agente de QA la revisa antes de mostrártela — nunca una sugerencia
          sin chequear.
        </Translate>
      ),
    },
    {
      id: 'vscode',
      title: (
        <Translate id="homepage.feature.vscode.title">
          Directo en tu flujo de VS Code
        </Translate>
      ),
      Icon: EditorPlugIcon,
      description: (
        <Translate id="homepage.feature.vscode.description">
          La extensión analiza al guardar y genera un reporte Markdown
          navegable — sin salir del editor ni correr nada por consola.
        </Translate>
      ),
    },
  ];
}

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
  const featureList = useFeatureList();
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {featureList.map((props, idx) => (
            <Feature key={props.id} index={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
