import { isOMDbMovie, OMDBMovie } from "~/models/OMDBModel";
import { TMDBMovie } from "~/models/TMDBModel";

interface BasicMovie {
  id: string | number;
  title: string;
  poster: string | null;
  year: string;
}

interface BasicMovieDetails extends BasicMovie {
  genre: string;
  production: string;
}

export class Movie implements BasicMovie {
  id: string | number;
  title: string;
  poster: string | null;
  year: string;

  constructor(movie: OMDBMovie | TMDBMovie) {
    if (isOMDbMovie(movie)) {
      this.id = movie.imdbID;
      this.title = movie.Title;
      this.poster = movie.Poster !== "N/A" ? movie.Poster : null;
      this.year = movie.Year;
    } else {
      this.id = movie.id;
      this.title = movie.title;
      this.poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

      const release = new Date(movie.release_date).getFullYear();
      this.year = release.toString();
    }
  }
}

export class MovieDetails extends Movie implements BasicMovieDetails {
  overview: string | null;
  genre: string;
  production: string;

  constructor(movie: OMDBMovie | TMDBMovie) {
    super(movie);
    if (isOMDbMovie(movie)) {
      this.overview = movie.Plot;
      this.genre = movie.Genre;
      this.production = movie.Production;
    } else {
      this.overview = movie.overview;
      this.genre = movie.genres?.map((item) => item.name).join(", ");
      this.production = movie.production_companies
        ?.map((item) => item.name)
        .slice(0, 2)
        .join(", ");
    }
  }
}
