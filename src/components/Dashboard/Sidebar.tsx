import { useRouter } from 'next/router';
import { Box, Stack, Icon, Divider } from '@chakra-ui/react';
import {
  RiDashboardLine,
  RiAccountCircleLine,
  RiLogoutCircleLine,
} from 'react-icons/ri';

import SidebarLink from './SidebarLink';

export function Sidebar() {
  const router = useRouter();

  return (
    <Box as="aside" w="64" h="100%" bg="white">
      <Stack spacing="12" align="flex-start">
        <Stack w="100%" spacing="0">
          <SidebarLink route="/" active={router.pathname === '/dashboard'}>
            <Icon mr="1" fontSize={24} as={RiDashboardLine} /> Dashboard
          </SidebarLink>
          <SidebarLink route="/" active={router.pathname === '/'}>
            <Icon mr="1" fontSize={24} as={RiAccountCircleLine} /> Minha Conta
          </SidebarLink>
        </Stack>
      </Stack>
      <Stack m="4">
        <Divider borderBottomWidth="2px" borderColor="gray.700" />
      </Stack>
      <SidebarLink route="/login" active={false}>
        <Icon mr="1" fontSize={24} as={RiLogoutCircleLine} /> Sair
      </SidebarLink>
    </Box>
  );
}
