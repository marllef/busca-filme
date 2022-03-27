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
          <span>{`${movie.title} (${movie.year})`}</span>
        </div>
        <div className={styles.genre}>{movie.genre}</div>
        <div className={styles.production}>
          <span className={styles.production_heading}>Produção:</span>{" "}
          <span className={styles.production_content}>{movie.production}</span>
        </div>
        <div className={styles.sinopse_container}>
          <span className={styles.sinopse_title}>Sinopse:</span>
          <span>{movie.overview}</span>
        </div>
      </div>
    </>
  );
};
