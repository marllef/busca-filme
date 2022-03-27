import Image from "next/image";
import { TMDBWatchProviders } from "~/models/TMDBModel";
import { MovieProviders } from "../MovieProviders";
import styles from "./styles/Poster.module.css";

interface Props {
  src: string;
  size?: [w: number, h: number];
  providers: TMDBWatchProviders;
}

export const Poster = ({ src, size = [200, 300], providers }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className={styles.container}>
          <Image
            draggable={false}
            src={src}
            width={size[0]}
            height={size[1]}
            placeholder="blur"
            blurDataURL="/not-found.png"
            alt={`Poster do filme`}
          />
        </div>
        <MovieProviders providers={providers} />
      </div>
    </>
  );
};
