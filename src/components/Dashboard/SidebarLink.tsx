import Link from 'next/link';
import { Box } from '@chakra-ui/react';

interface ISidebarLinkProps {
  children: React.ReactNode;
  route: string;
  active?: boolean;
}

const SidebarLink: React.FC<ISidebarLinkProps> = ({
  children,
  route,
  active,
}) => {
  return (
    <Link href={route}>
      <Box
        display="flex"
        alignItems="center"
        pl="6"
        py="4"
        w="100%"
        borderLeftWidth="4px"
        borderColor={active ? 'orange.300' : 'transparent'}
        _hover={{
          backgroundColor: 'gray.400',
          cursor: 'pointer',
          borderLeft: '4px',
          borderColor: 'orange.300',
        }}
        textTransform="uppercase"
        letterSpacing="wide"
        fontWeight="600"
        color="gray.700"
      >
        {children}
      </Box>
    </Link>
  );
};

export default SidebarLink;
