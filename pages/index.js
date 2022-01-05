import Head from 'next/head';
import Header from '../src/components/Header';
import Landling from '../src/components/Landling';
import About from '../src/components/About';
import WorkExperience from '../src/components/WorkExperience';
import Projects from '../src/components/Projects';
import Skills from '../src/components/Skills';
import ContactMe from '../src/components/ContactMe';

export default function Home() {
  return (
    <div className="bg-slate-400 h-screen font-mono w-full">
      <Head>
        <title>Peter's Web Lab</title>
      </Head>
      <Header />
      <Landling />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}
