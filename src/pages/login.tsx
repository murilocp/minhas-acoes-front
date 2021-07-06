import { Flex, Stack, Button, Box, Link } from '@chakra-ui/react';

import SignInBg from '../assets/signin-bg.png';
import Logo from '../assets/logo.png';
import SEO from '../components/SEO';

import { Input } from '../components/Form/Input';

export default function SignIn() {
  return (
    <Flex h="100vh" w="100%" justify="center" align="center">
      <SEO
        title="Login"
        description="Evaluation, múltiplos e os caralho tudo a um clique! Um. Fucking. Click."
      />

      <Box
        bg="white"
        paddingX={4}
        paddingY={10}
        maxW="40%"
        margin="auto"
        justify="center"
        align="center"
        borderRadius={8}
        boxShadow="lg"
      >
        <img src={Logo} style={{ maxWidth: '80%' }} />
        <Stack spacing={4} as="form" w="70%">
          <Input
            name="email"
            label="E-mail"
            type="email"
            required
            variant="flushed"
          />

          <Input
            name="password"
            label="Senha"
            type="password"
            required
            variant="flushed"
            helpText={
              <div style={{ textAlign: 'left' }}>
                <Link isExternal href="/" color="teal.300">
                  Esqueci a senha
                </Link>
              </div>
            }
          />
        </Stack>
        <Button
          bg="teal.300"
          type="submit"
          mt="8"
          colorScheme="teal"
          w="100%"
          maxW="70%"
        >
          Entrar
        </Button>
        <div>
          Ainda não tem conta? Clique{' '}
          <Link isExternal href="/" color="teal.300">
            aqui
          </Link>{' '}
          e cadastre-se agora!
        </div>
      </Box>

      {/*
      <Flex maxH="100vh" w="55%">
        <img src={SignInBg} alt="BackgroundSignIn" />
      </Flex> */}
    </Flex>
  );
}
