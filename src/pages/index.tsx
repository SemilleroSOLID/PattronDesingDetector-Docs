import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import {motion, useReducedMotion} from 'framer-motion';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const shouldReduceMotion = useReducedMotion();

  // Entrada escalonada del hero (título -> subtítulo -> botón). Es el
  // único lugar del sitio donde animamos "al cargar" en vez de "al
  // scrollear" — es lo primero que ve cualquiera que entra.
  const container = {
    hidden: {},
    show: {transition: {staggerChildren: shouldReduceMotion ? 0 : 0.15}},
  };
  const item = shouldReduceMotion
    ? {hidden: {opacity: 1}, show: {opacity: 1}}
    : {
        hidden: {opacity: 0, y: 16},
        show: {opacity: 1, y: 0, transition: {duration: 0.5, ease: 'easeOut'}},
      };

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <motion.div
        className="container"
        variants={container}
        initial="hidden"
        animate="show">
        <motion.div variants={item}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
        </motion.div>
        <motion.p variants={item} className="hero__subtitle">
          {siteConfig.tagline}
        </motion.p>
        <motion.div variants={item} className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </motion.div>
      </motion.div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
