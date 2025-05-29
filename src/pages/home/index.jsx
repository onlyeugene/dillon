import React from 'react';
import Hero from './hero';
import Products from './products';
import Services from './services';
import About from './about';
import Contact from './contact';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Products />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
