import { HTMLAttributes, useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import useData from "~/hooks/useData";

interface Props extends HTMLAttributes<HTMLDivElement> {
  direction?: { (): "up" | "down" } | string;
}

export const FloatButton = ({ direction: dir = "down", ...rest }: Props) => {
  const [arrowDirection, setArrowDirection] = useState(dir);
  const { data } = useData();

  useEffect(() => {
    setArrowDirection(dir);
  }, [dir]);

  return (
    <>
      {data?.length && (
        <div
          className="absolute p-4 bg-red-500 text-white rounded-full cursor-pointer right-8 bottom-8"
          {...rest}
        >
          {arrowDirection === "down" ? <FaArrowDown /> : <FaArrowUp />}
        </div>
      )}
    </>
  );
};
