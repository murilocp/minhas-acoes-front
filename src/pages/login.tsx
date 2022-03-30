import { useContext, useState } from 'react';

import {
  Flex,
  Stack,
  Button,
  Box,
  Link,
  Heading,
  Image,
} from '@chakra-ui/react';

import { AuthContext } from '../contexts/AuthContext';
import { Input } from '../components/Form/Input';
import SEO from '../components/SEO';

import Logo from '../assets/logo.png';

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const { signIn } = useContext(AuthContext);

  const handleSubmit = async e => {
    setLoading(true);
    e.preventDefault();

    await signIn({
      username: e.target.username.value,
      password: e.target.password.value,
    });

    setLoading(false);
  };

  return (
    <Flex h="100vh" w="100%" justify="center" align="center" marginX="auto">
      <SEO
        title="Login"
        description="Evaluation, múltiplos e os caralho tudo a um clique! Um. Fucking. Click."
      />

      <Box
        align="center"
        alignSelf="center"
        margin="auto 0"
        bg="white"
        maxW="650px"
        boxShadow={'xl'}
        paddingX={{ base: 4, lg: 6 }}
        paddingY={{ base: 6, lg: 12 }}
      >
        <Image
          src={Logo}
          alt="Logo Minhas Ações"
          w="100%"
          h="100%"
          maxW={384}
          maxH={100}
        />

        <Stack
          paddingX={{ base: 2, sm: 4 }}
          spacing={4}
          as="form"
          onSubmit={handleSubmit}
          maxWidth={500}
        >
          <Heading as="h2" size="lg">
            Acesse sua conta
          </Heading>

          <Input
            name="username"
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
          <Button
            bg="teal.300"
            type="submit"
            mt="8"
            colorScheme="teal"
            w="100%"
            isLoading={loading}
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
        </Stack>
      </Box>
    </Flex>
  );
}
