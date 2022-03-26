import Link from "next/link";
import { createContext, ReactNode } from "react";
import { NavProvider } from "~/contexts/NavContext";

interface NavProps {
  children?: ReactNode;
}

export const Nav = ({ children }: NavProps) => {
  return (
    <NavProvider>
      <nav>
        <ul className="flex flex-row">{children}</ul>
      </nav>
    </NavProvider>
  );
};
