import { ReactNode } from "react";
import { Footer } from "~/components/Footer";
import { HeaderBar } from "~/components/HeaderBar";
import styles from "./styles/AppLayout.module.css";

interface Props {
  children: ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderBar />
      <div className={styles.container}>{children}</div>
    </>
  );
};
