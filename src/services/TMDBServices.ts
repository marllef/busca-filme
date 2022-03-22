import { OMDBMovie } from "~/models/OMDBModel";

export const TMDBServices = {
  searchMovie: async (search: string) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${search}&language=pt-BR`
      );

      const data = await response.json();
      if (response.ok) {
        const movie: OMDBMovie[] = data.results;
        return movie;
      }
    } catch (err: any) {
      console.log(err.message);
    }
  },
  findMovieByID: async (id: string) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR`
      );
      const data = await response.json();

      if (response.ok) {
        const movie: OMDBMovie = data;
        return movie;
      }
    } catch (err: any) {
      console.log(err.message);
    }
  },
};
