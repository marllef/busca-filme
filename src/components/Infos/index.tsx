import { MovieDetails } from "~/adapters/MovieAdapter";
import { OMDBMovie } from "~/models/OMDBModel";
import styles from "./styles/Infos.module.css";

interface Props {
  details: MovieDetails;
}

export const Infos = ({ details: movie }: Props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className="truncate">{movie.title}</span>
          <span className="text-red-500 ml-1">({movie.year})</span>
        </div>
        <div className="font-semibold mb-3">{movie.genre}</div>
        <div className="font-semibold w-60 text-center">
          <span className="text-red-500">Produção:</span>{" "}
          <span>{movie.production}</span>
        </div>
        <div className={styles.sinopse_container}>
          <span className={styles.sinopse_title}>Sinopse:</span>
          <span>{movie.overview}</span>
        </div>
      </div>
    </>
  );
};
