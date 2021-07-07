import React from 'react';

import { Box } from '@chakra-ui/react';

const Card: React.FC = ({ children }) => {
  return (
    <Box
      borderRadius={5}
      boxShadow="0px 6px 18px rgba(0, 0, 0, 0.06)"
      bg="white"
      w="100%"
      h="100%"
      px="4"
      py="2"
    >
      {children}
    </Box>
  );
};

export default Card;
