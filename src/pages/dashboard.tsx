import { Flex, Image } from '@chakra-ui/react';

import { Sidebar } from '../components/Sidebar';
import Logo from '../assets/logo.png';

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Flex pl="8">
        <Image maxW={220} maxH={100} src={Logo} />
      </Flex>
      <Flex w="100%" my="6" mx="auto" px="6">
        <Sidebar />
      </Flex>
    </Flex>
  );
}
