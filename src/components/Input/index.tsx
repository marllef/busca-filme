import { FaSearch } from "react-icons/fa";
import { useField } from "@unform/core";
import styles from "./styles/Input.module.css";
import { InputHTMLAttributes, useEffect, useRef } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Input = ({ name, ...rest }: Props) => {
  const searchRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: searchRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <label className={`${styles.container}`}>
      <span className="sr-only">Buscar Filmes</span>
      <span className={styles.searchIcon}>
        <FaSearch size={14} />
      </span>
      <input
        ref={searchRef}
        type="search"
        className={`${styles.input}`}
        defaultValue={defaultValue}
        placeholder="Buscar título..."
        {...rest}
      />
    </label>
  );
};
