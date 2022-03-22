import { FormHandles, FormHelpers, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import { useRouter } from "next/router";
import { forwardRef, HTMLAttributes, LegacyRef } from "react";
import useData from "~/hooks/useData";
import { Brand } from "../Brand";
import { Input } from "../Input";
import styles from "./styles/Search.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const SearchComponent = (
  { ...rest }: Props,
  ref: LegacyRef<HTMLDivElement>
) => {
  const { search } = useData();

  function handleSubmit(data: any, { reset }: FormHelpers) {
    search(data.movie);
    reset();
  }

  return (
    <>
      <div ref={ref} className={styles.container} {...rest}>
        <div className="mb-2">
          <Brand size="4xl" />
        </div>

        <Form className="sm:w-96" onSubmit={handleSubmit}>
          <Input name="movie" placeholder="Pesquisar Filmes..." />
        </Form>
      </div>
    </>
  );
};

export const Search = forwardRef(SearchComponent);
