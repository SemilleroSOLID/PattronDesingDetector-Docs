import type {ReactNode} from 'react';
import {motion, useReducedMotion} from 'framer-motion';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type Person = {
  name: string;
  github: string;
  role: string;
};

const MEMBERS: Person[] = [
  {name: 'Cristian Garcia Nastar', github: 'CristianGarcia21', role: 'Integrante'},
  {name: 'Juan Diego Henao', github: 'diego-juan3112', role: 'Integrante'},
  {name: 'Juan Alejandro Betancourth', github: 'jAlejandro423', role: 'Integrante'},
];

const DIRECTION: Person[] = [
  {name: 'Yaneth Mejía Rendón', github: 'YanethM', role: 'Directora del semillero'},
  {name: 'Sandra Hurtado', github: 'sandraSoft', role: 'Directora del semillero'},
];

function PersonCard({person, index}: {person: Person; index: number}) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.a
      href={`https://github.com/${person.github}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      initial={shouldReduceMotion ? false : {opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.4}}
      transition={{duration: 0.45, delay: index * 0.08, ease: 'easeOut'}}>
      <img
        className={styles.avatar}
        src={`https://github.com/${person.github}.png?size=160`}
        alt={person.name}
        loading="lazy"
        width={72}
        height={72}
      />
      <div>
        <div className={styles.name}>{person.name}</div>
        <div className={styles.role}>{person.role}</div>
        <div className={styles.handle}>@{person.github}</div>
      </div>
    </motion.a>
  );
}

export default function TeamSection(): ReactNode {
  const universityLogo = useBaseUrl('/img/Logo_de_la_Universidad_de_Caldas.png');
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.intro}>
          <img
            className={styles.universityLogo}
            src={universityLogo}
            alt="Universidad de Caldas"
            width={72}
            height={72}
            loading="lazy"
          />
          <Heading as="h2">Semillero SOLID</Heading>
          <p>
            Pattern Detector es el proyecto del semillero de investigación{' '}
            <strong>SOLID</strong>, de la Universidad de Caldas: un backend en
            Python y una extensión de VS Code enfocados en detectar
            candidatos a <strong>Singleton</strong>,{' '}
            <strong>Factory Method</strong> y <strong>Builder</strong> en
            proyectos Java — y, de forma adicional, violaciones de los
            principios SOLID y otras malas prácticas — con sugerencias de
            refactor generadas y verificadas por IA.
          </p>
        </div>

        <div className={styles.group}>
          <Heading as="h3" className={styles.groupTitle}>
            Integrantes
          </Heading>
          <div className={styles.grid}>
            {MEMBERS.map((person, idx) => (
              <PersonCard key={person.github} person={person} index={idx} />
            ))}
          </div>
        </div>

        <div className={styles.group}>
          <Heading as="h3" className={styles.groupTitle}>
            Dirección
          </Heading>
          <div className={styles.grid}>
            {DIRECTION.map((person, idx) => (
              <PersonCard key={person.github} person={person} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
