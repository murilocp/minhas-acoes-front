import React from 'react';

import Logo from '../assets/logo.svg';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div>
      <SEO title="Home" />
      <Logo />
      <h1>Site Boilerplate</h1>
    </div>
  );
};

export default Home;
