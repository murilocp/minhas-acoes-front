import React, { useEffect } from 'react';

import axios from 'axios';

import { Image, Input, Stack } from '@chakra-ui/react';

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
      <SEO
        title="Home"
        description="Evaluation, múltiplos e os caralho tudo a um clique! Um. Fucking. Click."
      />
      <Stack h="100%" m="auto" maxWidth="750px" align="center" justify="center">
        <Image
          src={Logo}
          alt="Logo Minhas Ações"
          w="100%"
          h="100%"
          maxW={384}
          maxH={100}
        />
        <Input
          width="100%"
          p="6"
          fontSize={24}
          bg="white"
          borderColor="gray.200"
          focusBorderColor="teal.300"
          fontWeight={600}
          textTransform="uppercase"
        />
      </Stack>
    </Container>
  );
};

export default Home;
