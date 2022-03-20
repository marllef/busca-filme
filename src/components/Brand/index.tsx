import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./styles/Brand.module.css";

interface Props {
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  onClick?: { (): void };
}

export const Brand = ({ size = "lg", onClick }: Props) => {
  const router = useRouter();
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl",
  };
  return (
    <>
      <div
        className={`${styles.container} ${sizes[size]} ${
          size === "4xl" ? "flex-col" : "flex-row"
        } ${size === "4xl" ? "animate-bounce" : null}`}
        onClick={() => router.push("/")}
      >
        <span className="mr-1">
          <Image
            src="/favicon.svg"
            width={size === "4xl" ? 120 : 30}
            height={size === "4xl" ? 120 : 30}
            draggable={false}
          />
        </span>
        <span>
          <span className="italic">Busca</span>
          <span className="italic text-red-500 font-semibold">Filmes</span>
        </span>
      </div>
    </>
  );
};
