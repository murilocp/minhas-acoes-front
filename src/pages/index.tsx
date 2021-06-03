import React, { useEffect } from 'react';

import axios from 'axios';
import SEO from '../components/SEO';

import { Container } from '../styles/pages/Home';

import Logo from '../assets/logo.png';

const Home: React.FC = () => {
  useEffect(() => {
    async function init() {
      try {
        const response = await axios.get(
          'http://localhost:5000/Integ/Importante'
        );

        console.log(response);
      } catch (e) {
        console.log(e);
      }
    }

    init();
  }, []);
  return (
    <Container>
      <SEO title="Home" />
      <div className="content">
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="search-input">
          <input />
        </div>
      </div>
    </Container>
  );
};

export default Home;
