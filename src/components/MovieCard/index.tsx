import { OMDBMovie } from "~/models/OMDBModel";
import { TMDBMovie } from "~/models/TMDBModel";
import Image from "next/image";
import { HTMLAttributes, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Movie } from "~/adapters/MovieAdapter";

interface Props extends HTMLAttributes<HTMLDivElement> {
  movie: Movie;
}

export const MovieCard = ({ movie, ...rest }: Props) => {
  const router = useRouter();

  return (
    <>
      <div
        className="bg-slate-800 hover:bg-slate-700 w-60 h-80 rounded overflow-hidden m-1"
        onClick={() => router.push(`/${movie.id}`)}
        {...rest}
      >
        {true && (
          <Image
            src={movie.poster ? movie.poster : "/not-found.png"}
            width={1000}
            height={1000}
            placeholder="blur"
            blurDataURL="/not-found.png"
            alt="Poster do filme"
            layout="responsive"
          />
        )}

        <div className="flex w-full flex-col p-2 leading-snug">
          <div className="text-slate-100 truncate">{movie?.title}</div>
          <span className="font-semibold truncate text-xs text-red-500">
            {movie?.year}
          </span>
        </div>
      </div>
    </>
  );
};
