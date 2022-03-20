import { LegacyRef, forwardRef, HTMLAttributes } from "react";
import { Movie } from "~/interfaces/movie";
import { MovieCard } from "../MovieCard";

interface Props extends HTMLAttributes<HTMLDivElement> {
  data?: Movie[];
}

const ListComponent = ({ data, ...rest }: Props, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <>
      {data?.length && (
        <div
          ref={ref}
          id="movies"
          {...rest}
          className="flex h-full bg-slate-900 overflow-auto p-2 snap-center"
        >
          <div className="flex h-fit flex-row flex-wrap justify-center content-start">
            {(data || [])
              .sort((a, b) => Number(b.Year) - Number(a.Year))
              .map((item: Movie, index) => (
                <MovieCard key={item.imdbID + index} movie={item} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export const MovieList = forwardRef(ListComponent);
