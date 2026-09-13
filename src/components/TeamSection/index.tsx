import type {ReactNode} from 'react';
import {motion, useReducedMotion} from 'framer-motion';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type Role = 'member' | 'director';

type Person = {
  name: string;
  github: string;
  role: Role;
};

const MEMBERS: Person[] = [
  {name: 'Cristian Garcia Nastar', github: 'CristianGarcia21', role: 'member'},
  {name: 'Juan Diego Henao', github: 'diego-juan3112', role: 'member'},
  {name: 'Juan Alejandro Betancourth', github: 'jAlejandro423', role: 'member'},
];

const DIRECTION: Person[] = [
  {name: 'Yaneth Mejía Rendón', github: 'YanethM', role: 'director'},
  {name: 'Sandra Hurtado', github: 'sandraSoft', role: 'director'},
];

function RoleLabel({role}: {role: Role}): ReactNode {
  if (role === 'director') {
    return (
      <Translate id="homepage.team.role.director">
        Directora del semillero
      </Translate>
    );
  }
  return <Translate id="homepage.team.role.member">Integrante</Translate>;
}

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
        <div className={styles.role}>
          <RoleLabel role={person.role} />
        </div>
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
            <Translate
              id="homepage.team.description"
              values={{
                solid: <strong>SOLID</strong>,
                singleton: <strong>Singleton</strong>,
                factory: <strong>Factory Method</strong>,
                builder: <strong>Builder</strong>,
              }}>
              {'Pattern Detector es el proyecto del semillero de investigación {solid}, de la Universidad de Caldas: un backend en Python y una extensión de VS Code enfocados en detectar candidatos a {singleton}, {factory} y {builder} en proyectos Java — y, de forma adicional, violaciones de los principios SOLID y otras malas prácticas — con sugerencias de refactor generadas y verificadas por IA.'}
            </Translate>
          </p>
        </div>

        <div className={styles.group}>
          <Heading as="h3" className={styles.groupTitle}>
            <Translate id="homepage.team.members.title">Integrantes</Translate>
          </Heading>
          <div className={styles.grid}>
            {MEMBERS.map((person, idx) => (
              <PersonCard key={person.github} person={person} index={idx} />
            ))}
          </div>
        </div>

        <div className={styles.group}>
          <Heading as="h3" className={styles.groupTitle}>
            <Translate id="homepage.team.direction.title">Dirección</Translate>
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
