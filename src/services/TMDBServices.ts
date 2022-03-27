import { TMDBMovie } from "~/models/TMDBModel";

export const TMDBServices = {
  searchMovie: async (search: string) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${search}&language=pt-BR`
      );

      const data = await response.json();
      if (response.ok) {
        const movie: TMDBMovie[] = data.results;
        return movie;
      }
    } catch (err: any) {
      console.log(err.message);
    }
  },
  getPopular: async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR`
      );

      const data = await response.json();
      if (response.ok) {
        const movie: TMDBMovie[] = data.results;
        return movie;
      }
    } catch (err: any) {
      console.log(err.message);
    }
  },
  findProvidersByMovieID: async (id: string) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR`
      );
      const data = await response.json();

      if (response.ok) {
        const watchProviders = data.results;

        return watchProviders.BR || null;
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
        const movie: TMDBMovie = data;
        return movie;
      }
    } catch (err: any) {
      console.log(err.message);
    }
  },
};
