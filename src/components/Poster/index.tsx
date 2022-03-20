import Image from "next/image";
import styles from "./styles/Poster.module.css";

interface Props {
  src: string;
  size?: [w: number, h: number];
}

export const Poster = ({ src, size = [200, 300] }: Props) => {
  return (
    <>
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
    </>
  );
};
