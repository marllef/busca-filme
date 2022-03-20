import NextHead from "next/head";
import { ReactNode } from "react";

interface Props {
  title?: string;
  children?: ReactNode;
}

export const Head = ({ title = "Buscar Filmes", children }: Props) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content="Encontre seu filme" />
      <link rel="icon" href="/favicon.svg" />
      {children}
    </NextHead>
  );
};
