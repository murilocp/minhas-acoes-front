import { GetServerSideProps } from 'next';

import { parseCookies } from 'nookies';

import { Flex, Image, Input, Icon, Avatar, Text, Box } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

import { Sidebar } from '../components/Dashboard/Sidebar';
import DashboardContent from '../components/Dashboard/Content';
import SEO from '../components/SEO';

import Logo from '../assets/logo.png';

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <SEO title="Dashboard" />
      <Flex px="6" py="4" w="100%" maxWidth={1440} mx="auto" bg="white">
        <Image mr="8" maxW={220} maxH={100} src={Logo} />

        <Flex
          as="label"
          bg="gray.200"
          py="2"
          px="4"
          ml="8"
          flex="1"
          maxWidth={450}
          alignSelf="center"
          alignItems="center"
          position="relative"
          borderRadius={6}
        >
          <Input
            fontWeight={600}
            textTransform="uppercase"
            variant="unstyled"
            bg="gray.200"
            placeholder="Procurar ativo"
            _placeholder={{ textTransform: 'none' }}
          />
          <Icon fontSize={20} as={RiSearchLine} />
        </Flex>

        <Flex align="center" ml="auto">
          <Flex align="center">
            <Text mr="4">Olá, Murilo Picinato</Text>
            <Avatar size="md" name="Murilo Picinato" />
          </Flex>
        </Flex>
      </Flex>
      <Flex w="100%" h="100vh">
        <Sidebar />
        <DashboardContent />
      </Flex>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const cookies = parseCookies(ctx);

  if (!cookies['@ma.token']) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
