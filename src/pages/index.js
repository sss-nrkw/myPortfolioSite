// pages/index.js

import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';


import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>yuuki's blog</title>
        <meta name="description" content="Joel's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <Skills />
        <Projects />
      </div>
    </>
  );
};

export default Home;