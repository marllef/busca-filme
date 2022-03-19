import { Movie } from "~/interfaces/movie";
import { MovieCard } from "../MovieCard";

interface Props {
  data?: Movie[];
}

export const MovieList = ({ data }: Props) => {
  return (
    <>
      <div className="flex h-full overflow-auto p-2">
        <div className="flex h-screen flex-row flex-wrap justify-center">
          {(data || [])
            .sort((a, b) => Number(b.Year) - Number(a.Year))
            .map((item: Movie) => (
              <MovieCard key={item.imdbID} movie={item} />
            ))}
        </div>
      </div>
    </>
  );
};
