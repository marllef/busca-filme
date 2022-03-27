import Link from "next/link";
import { ReactNode } from "react";
import styles from "./styles/Footer.module.css";

interface Props {
  children?: ReactNode;
}

export const Footer = ({ children }: Props) => {
  return (
    <footer className={styles.footer}>
      {children}
      <p className=" text-xs text-slate-500 font-semibold p-1">
        <span>Dados fornecidos</span> por{" "}
        <a
          className="text-gray-500 font-semibold"
          target="_blank"
          rel="noreferrer"
          href="https://www.themoviedb.org/"
        >
          The Movie Database
        </a>
        .
      </p>
    </footer>
  );
};
