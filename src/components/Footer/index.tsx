import { ReactNode } from "react";
import styles from "./styles/Footer.module.css";

interface Props {
  children?: ReactNode;
}

export const Footer = ({ children }: Props) => {
  return <footer className={styles.footer}>{children}</footer>;
};
