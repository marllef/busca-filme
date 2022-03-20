import { useContext } from "react";
import { MovieContext } from "~/contexts/DataContext";

export default function useData() {
  const data = useContext(MovieContext)!;
  return data;
}
