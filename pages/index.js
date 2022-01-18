import Head from 'next/head';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Header from '../src/components/Header';
import Landling from '../src/components/Landling';
import About from '../src/components/About';
import WorkExperience from '../src/components/WorkExperience';
import Projects from '../src/components/Projects';
import Skills from '../src/components/Skills';
import ContactMe from '../src/components/ContactMe';

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className="bg-bluedark font-mono w-full">
      <Head>
        <title>Peter's Web Lab</title>
      </Head>
      <Header isLanding={!inView} />
      <Landling />
      <About />
      <div className=" h-0" ref={ref} />
      <Skills />
      <WorkExperience />
      <Projects />
      <ContactMe />
    </div>
  );
}
