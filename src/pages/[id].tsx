import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Image from "next/image";
import { useRef } from "react";
import { Head } from "~/components/Head";
import { HeaderBar } from "~/components/HeaderBar";
import { Infos } from "~/components/Infos";
import { Poster } from "~/components/Poster";
import { FullMovie } from "~/interfaces/movie";
import { MovieServices } from "~/services/MovieDB";

const Home: NextPage = ({
  data: d,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const data: FullMovie = d;
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head />
      <HeaderBar />

      <main
        className="flex bg-slate-900 text-slate-100 h-full w-full pt-14 sm:pt-12 justify-center items-start overflow-auto lg:px-40"
        ref={mainRef}
      >
        <div className="flex flex-col sm:flex-row  items-center sm:items-start">
          <Poster src={data.Poster} />
          <Infos movie={data} />
          <img
            className="sm:hidden border-red-500 rounded-lg border-4"
            src={data.Poster}
          />
          <div className=" sm:hidden text-justify  w-80 mt-2">
            <span className="text-red-500 font-semibold">Sinopse:</span>{" "}
            {data.Plot}
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const data = await MovieServices.findMovieByID(`${params?.id}`);

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const params = {
    id: "tt0992911",
  };

  return {
    paths: [{ params }],
    fallback: "blocking", // false or 'blocking'
  };
};

export default Home;
