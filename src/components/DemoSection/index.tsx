import type {ReactNode} from 'react';
import {motion, useReducedMotion} from 'framer-motion';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function DemoSection(): ReactNode {
  const shouldReduceMotion = useReducedMotion();
  const videoSrc = useBaseUrl('/img/extension-demo.mp4');

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.intro}
          initial={shouldReduceMotion ? false : {opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.4}}
          transition={{duration: 0.5, ease: 'easeOut'}}>
          <Heading as="h2">Así se usa</Heading>
          <p>
            Guardás el archivo, la extensión analiza el código y te muestra
            los patrones detectados y las sugerencias de refactor sin salir
            de VS Code.
          </p>
        </motion.div>

        <motion.div
          className={styles.frame}
          initial={shouldReduceMotion ? false : {opacity: 0, scale: 0.97}}
          whileInView={{opacity: 1, scale: 1}}
          viewport={{once: true, amount: 0.3}}
          transition={{duration: 0.5, delay: 0.1, ease: 'easeOut'}}>
          <video
            className={styles.video}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </motion.div>
      </div>
    </section>
  );
}
