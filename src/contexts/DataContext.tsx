import { createContext, ReactNode, useEffect, useState } from "react";
import { Movie } from "~/interfaces/movie";
import { MovieServices } from "~/services/MovieDB";

interface Props {
  children: ReactNode;
}

interface Values {
  search: { (search: string): void };
  data: Movie[];
}

export const MovieContext = createContext<Values | null>(null);

export const DataProvider = ({ children }: Props) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<Movie[]>();

  useEffect(() => {
    if (search) {
      MovieServices.searchMovie(search)
        .then((value) => {
          setData(value);
        })
        .catch((err) => console.log(err.message));
    }
  }, [search]);

  const values = {
    search: setSearch,
    data: data!,
  };
  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};
