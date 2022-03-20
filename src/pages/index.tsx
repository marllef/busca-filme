import type { NextPage } from "next";
import { useCallback, useEffect, useRef, useState } from "react";
import { FloatButton } from "~/components/FloatButton";
import { Head } from "~/components/Head";
import { HeaderBar } from "~/components/HeaderBar";
import { MovieList } from "~/components/MovieList";
import { Search } from "~/components/Search";
import useData from "~/hooks/useData";

const Home: NextPage = () => {
  const [arrow, setArrow] = useState("up");
  const { data } = useData();
  const listRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

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
      <HeaderBar />

      <main
        ref={mainRef}
        className="bg-slate-900 h-full pt-14 sm:pt-12 overflow-hidden snap-mandatory snap-y"
      >
        <Search
          ref={searchRef}
          onWheel={(e) => {
            if (e.deltaY > 0 && mainRef.current?.scrollTop! > 0) {
              scrollToDown();
            }
          }}
        />
        <MovieList
          ref={listRef}
          data={data}
          onWheel={(e) => {
            if (e.deltaY < 0) {
              if (e.currentTarget.scrollTop === 0) {
                scrollToTop();
              }
            } else {
              scroll(e.deltaY);
            }
          }}
        />
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
