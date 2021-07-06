import { ComponentStyleConfig, extendTheme } from '@chakra-ui/react';

const Input: ComponentStyleConfig = {
  baseStyle: {
    borderColor: 'gray.200',
    backgroundColor: 'gray.200',
    _focus: { borderColor: 'teal.300' },
  },
  defaultProps: {
    variants: {
      outline: {
        borderColor: 'gray.200',
        backgroundColor: 'gray.200',
        focusBorderColor: 'teal.300',
      },
    },
  },
};

const theme = extendTheme({
  fonts: {
    body: ['KoHo', 'san-serif'].join(','),
    heading: ['KoHo', 'san-serif'].join(','),
  },
  colors: {
    orange: {
      300: '#F36D55',
    },
    teal: {
      300: '#259f9e',
    },
  },
  styles: {
    global: {
      body: { bg: 'gray.50', color: 'gray.900' },
    },
  },
  components: {
    Input,
  },
});

export default theme;
