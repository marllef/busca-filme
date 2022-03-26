import { useContext } from "react";
import { NavContext } from "~/contexts/NavContext";

export default function useNav() {
  const data = useContext(NavContext)!;
  return data;
}
