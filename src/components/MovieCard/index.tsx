import { Movie } from "~/interfaces/movie";
import Image from "next/image";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  return (
    <>
      <div className="bg-slate-800 hover:bg-slate-700 w-60 h-80 rounded overflow-hidden m-1">
        <Image
          src={movie.Poster}
          width={1000}
          height={1000}
          layout="responsive"
        />
        <div className="flex w-full flex-col p-2 leading-snug">
          <div className="text-slate-100 truncate">{movie.Title}</div>
          <span className="font-semibold truncate text-xs text-red-500">
            {movie.Year}
          </span>
        </div>
      </div>
    </>
  );
};
