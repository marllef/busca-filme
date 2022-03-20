import { useRouter } from "next/router";

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
        className={`text-white select-none cursor-pointer ${sizes[size]}`}
        onClick={() => router.push("/")}
      >
        <span className="italic">Busca</span>
        <span className="italic text-red-500 font-semibold">Filmes</span>
      </div>
    </>
  );
};
