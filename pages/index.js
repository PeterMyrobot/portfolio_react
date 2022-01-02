import Head from 'next/head';
import Header from '../src/components/Header';
import Landling from '../src/components/Landling';

export default function Home() {
  return (
    <div className="bg-slate-400 h-screen">
      <Head>
        <title>Peter's Web Lab</title>
      </Head>
      <Header />
      <Landling />
      {/* landing */}
      {/* about me */}
      {/* work experience */}
      {/* skill scroller */}
      {/* contact me */}
    </div>
  );
}
