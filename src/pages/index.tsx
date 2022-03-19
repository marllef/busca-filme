import type { NextPage } from "next";
import { Head } from "~/components/Head";
import { HeaderBar } from "~/components/HeaderBar";
import { MovieCard } from "~/components/MovieCard";
import { MovieList } from "~/components/MovieList";
import data from "~/utils/data.json";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <HeaderBar />
      <main className="bg-slate-900 h-screen pt-14 sm:pt-12 overflow-hidden">
        <MovieList data={data.Search} />
      </main>
    </>
  );
};

export default Home;
