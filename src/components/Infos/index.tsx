import { FullMovie } from "~/interfaces/movie";
import styles from "./styles/Infos.module.css";

interface Props {
  movie: FullMovie;
}

export const Infos = ({ movie }: Props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className="truncate">{movie.Title}</span>
          <span className="text-red-500 ml-1">({movie.Year})</span>
        </div>
        <div className="font-semibold mb-3">{movie.Genre}</div>
        <div className="font-semibold w-60 text-center">
          <span className="text-red-500">Direção:</span>{" "}
          <span>{movie.Director}</span>
        </div>
        <div className={styles.sinopse_container}>
          <span className={styles.sinopse_title}>Sinopse:</span>
          <span>{movie.Plot}</span>
        </div>
      </div>
    </>
  );
};
