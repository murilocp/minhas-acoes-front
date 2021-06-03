import React from 'react';

import { Container } from '../../styles/components/Layout';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
