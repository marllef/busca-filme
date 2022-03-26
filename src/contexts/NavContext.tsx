import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

interface Values {
  activeItem: string;
}

export const NavContext = createContext<Values | null>(null);

export const NavProvider = ({ children }: Props) => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState(router.asPath);

  useEffect(() => {
    if (router.asPath === "/" || router.asPath === "/about") {
      setActiveItem(router.asPath);
    } else {
      setActiveItem("/#");
    }
  }, [router]);

  const values = {
    activeItem,
  };
  return <NavContext.Provider value={values}>{children}</NavContext.Provider>;
};
