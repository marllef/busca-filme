import Link from "next/link";
import { LiHTMLAttributes, ReactNode, useEffect, useState } from "react";
import useNav from "~/hooks/useNav";
import styles from "../styles/NavItem.module.css";

interface ItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  href: string;
  active?: boolean;
}

export const NavItem = ({
  children,
  href,

  ...rest
}: ItemProps) => {
  const { activeItem } = useNav();

  return (
    <>
      <li
        className={`${styles.navItem} ${
          activeItem === href ? "underline" : ""
        } `}
        {...rest}
      >
        <Link href={href}>
          <a>{children}</a>
        </Link>
      </li>
    </>
  );
};
