import { Box, Stack, Link, Icon } from '@chakra-ui/react';
import { RiDashboardLine, RiAccountCircleLine } from 'react-icons/ri';

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Stack spacing="8">
          <Box px="4" py="6" w="100%">
            <Link display="flex" alignItems="center">
              <Icon as={RiDashboardLine} /> Dashboard
            </Link>
          </Box>
          <Box px="4" py="6" w="100%" _hover={{ backgroundColor: 'gray.400' }}>
            <Link display="flex" alignItems="center">
              <Icon as={RiAccountCircleLine} /> Minha Conta
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
