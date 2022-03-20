import { Form } from "@unform/web";
import useData from "~/hooks/useData";
import { Brand } from "../Brand";

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
        {data?.length ? (
          <Form onSubmit={(data) => search(data.search)}>
            <SearchBar />
          </Form>
        ) : (
          <div />
        )}
      </header>
    </>
  );
};
