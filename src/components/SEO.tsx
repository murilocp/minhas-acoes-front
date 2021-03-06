import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  shouldExcludeTitleSuffix?: boolean;
  isArticle?: boolean;
  url?: string;
}

export default function SEO({
  title,
  description = 'Descrição padrão',
  image = '/assets/signin-bg.png',
  shouldExcludeTitleSuffix = false,
  isArticle = false,
  url = '',
}: SEOProps) {
  const pageTitle = `${title} ${
    !shouldExcludeTitleSuffix ? '| Minhas Ações' : ''
  }`;

  const pageUrl = `https://minhasacoes.com.br/${url}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta charSet="UTF-8" />
      <meta name="language" content="pt-BR" />
      <meta name="image" content={image} />
      <meta name="description" content={description} />
      <meta name="robots" content="all" />
      <meta name="author" content="Autor" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {isArticle ? (
        <meta property="og:type" content="article" key="type" />
      ) : (
        <meta property="og:type" content="page" />
      )}
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />

      <meta property="article:author" content="Autor" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}
