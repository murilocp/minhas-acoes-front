import { Image, Input, Stack } from '@chakra-ui/react';

import SEO from '../components/SEO';

import { Container } from '../styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <SEO
        title="Home"
        description="Evaluation, múltiplos e os caralho tudo a um clique! Um. Fucking. Click."
      />
      <Stack h="100%" m="auto" maxWidth="750px" align="center" justify="center">
        <Image
          src="/assets/logo.png"
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
}
