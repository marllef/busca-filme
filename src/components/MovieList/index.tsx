import Link from "next/link";
import { LegacyRef, forwardRef, HTMLAttributes } from "react";
import { Movie } from "~/adapters/MovieAdapter";
import { Footer } from "../Footer";

import { MovieCard } from "../MovieCard";

interface Props extends HTMLAttributes<HTMLDivElement> {
  data?: Movie[];
}

const ListComponent = (
  { data, ...rest }: Props,
  ref: LegacyRef<HTMLDivElement>
) => {
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
              .sort((a, b) => Number(b.year) - Number(a.year))
              .map((item, index) => (
                <MovieCard key={item.id.toString() + index} movie={item} />
              ))}
            <p className="text-xs text-white p-1">
              <Link href="/about">
                <a className="text-red-500 font-semibold">Dados</a>
              </Link>{" "}
              fornecidos pelo{" "}
              <a
                className="text-red-500 font-semibold"
                target="_blank"
                rel="noreferrer"
                href="https://www.themoviedb.org/"
              >
                The Movie Database
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export const MovieList = forwardRef(ListComponent);
