import { FaSearch } from "react-icons/fa";
import styles from "./styles/SearchBar.module.css";

export const SearchBar = () => {
  return (
    <label className={`${styles.searchBar}`}>
      <span className="sr-only">Buscar Filmes</span>
      <span className={styles.searchIcon}>
        <FaSearch size={14} />
      </span>
      <input
        type="search"
        className={`${styles.input}`}
        placeholder="Buscar título..."
      />
    </label>
  );
};
