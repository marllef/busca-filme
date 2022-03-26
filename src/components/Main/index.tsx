import { HTMLAttributes } from "react";
import styles from "./styles/Main.module.css";

interface Props extends HTMLAttributes<HTMLElement> {}

export const Main = ({ children, className, ...rest }: Props) => {
  return (
    <main className={`${styles.container} ${className}`} {...rest}>
      {children}
    </main>
  );
};
