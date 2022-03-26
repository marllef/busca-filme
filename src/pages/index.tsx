import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { FloatButton } from "~/components/FloatButton";
import { Head } from "~/components/Head";
import { MovieList } from "~/components/MovieList";
import { SearchView } from "~/layout/SearchLayout";
import useData from "~/hooks/useData";
import styles from "~/styles/Home.module.css";

const Home: NextPage = () => {
  const [arrow, setArrow] = useState("up");
  const { data } = useData();
  const listRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => scrollToTop(), 1200);
  }, []);

  useEffect(() => {
    if (data) {
      scrollToDown();
    }
  }, [data]);

  function scrollToDown() {
    const element = mainRef.current!;
    mainRef.current?.scrollBy({
      top: element?.scrollHeight,
      behavior: "smooth",
    });
    setArrow("up");
  }

  function scrollToTop() {
    const element = mainRef.current!;
    mainRef.current?.scrollBy({
      top: -element?.scrollHeight,
      behavior: "smooth",
    });
    setArrow("down");
  }

  function scroll(delta: number) {
    if (delta < 0) {
      mainRef.current?.scrollBy({
        behavior: "smooth",
        top: -10000,
      });
      setArrow("down");
    } else {
      mainRef.current?.scrollBy({
        behavior: "smooth",
        top: 10000,
      });
      setArrow("up");
    }
  }

  return (
    <>
      <Head />

      <main
        ref={mainRef}
        className={styles.container}
        onWheel={(e) => {
          if (e.deltaY > 0) {
            scrollToDown();
          } else if (e.deltaY < 0) {
            if (listRef.current?.scrollTop === 0) {
              scrollToTop();
            }
          } else {
            scroll(e.deltaY);
          }
        }}
      >
        <SearchView ref={searchRef} />
        <MovieList ref={listRef} data={data} />
        <FloatButton
          direction={arrow}
          onClick={() => {
            arrow === "down" ? scrollToDown() : scrollToTop();
          }}
        />
      </main>
    </>
  );
};

export default Home;
