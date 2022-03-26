import { Form } from "@unform/web";
import useData from "~/hooks/useData";
import { Brand } from "../Brand";
import { Nav } from "../Nav";
import { NavItem } from "../Nav/NavItem";

import { SearchBar } from "../SearchBar";
import styles from "./styles/HeaderBar.module.css";

interface Props {
  brandClick?: { (): void };
}

export const HeaderBar = ({ brandClick }: Props) => {
  const { search, data } = useData();
  return (
    <>
      <header className={styles.header}>
        <Brand onClick={brandClick} />

        <Nav>
          <NavItem href="/">Início</NavItem>
          <NavItem href="/#">Filmes</NavItem>
          <NavItem href="/about">Sobre</NavItem>
        </Nav>
      </header>
    </>
  );
};
