import { Brand } from "../Brand";
import { SearchBar } from "../SearchBar";
import styles from "./styles/HeaderBar.module.css";

export const HeaderBar = () => {
  return (
    <>
      <header className={styles.header}>
        <Brand />
        <SearchBar />
      </header>
    </>
  );
};
