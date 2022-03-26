import { createContext, ReactNode, useEffect, useState } from "react";
import { Movie } from "~/adapters/MovieAdapter";
import { TMDBServices } from "~/services/TMDBServices";

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
    TMDBServices.getPopular()
      .then((movies) => {
        const popularMovies = movies?.map((item) => new Movie(item));
        setData(popularMovies);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    if (search) {
      TMDBServices.searchMovie(search)
        .then((value) => {
          const listMovies = value?.map((item) => new Movie(item));
          setData(listMovies);
        })
        .catch((err) => console.log(err.message));
    }
  }, [search]);

  const values = {
    search: setSearch,
    data: data || [],
  };
  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};
