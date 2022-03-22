import { createContext, ReactNode, useEffect, useState } from "react";
import { OMDBMovie } from "~/models/OMDBModel";
import { MovieServices } from "~/services/OMDBServices";
import { TMDBServices } from "~/services/TMDBServices";

interface Props {
  children: ReactNode;
}

interface Values {
  search: { (search: string): void };
  data: OMDBMovie[];
}

export const MovieContext = createContext<Values | null>(null);

export const DataProvider = ({ children }: Props) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<OMDBMovie[]>();

  useEffect(() => {
    if (search) {
      TMDBServices.searchMovie(search)
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
