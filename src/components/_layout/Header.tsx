import React from 'react';

import Link from 'next/link';

import { Container } from '../../styles/components/Header';

import { Button } from '../Button';

export default function Header() {
  return (
    <Container>
      <div className="div-btn">
        <Link href="/">
          <a href="/">Entrar</a>
        </Link>
        <Button>Cadastrar</Button>
      </div>
    </Container>
  );
}
