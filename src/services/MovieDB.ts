import { FullMovie, Movie } from "~/interfaces/movie";

export const MovieServices = {
  searchMovie: async (search: string) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${search}`
      );

      const data = await response.json();
      if (response.ok) {
        const movie: Movie[] = data.Search;
        return movie;
      }
    } catch (err: any) {
      console.log(err.message);
    }
  },
  findMovieByID: async (id: string) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&i=${id}`
      );
      const data = await response.json();

      if (response.ok) {
        const movie: FullMovie = data;
        return movie;
      }
    } catch (err: any) {
      console.log(err.message);
    }
  },
};
