import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Image from "next/image";
import { useRef } from "react";
import { MovieDetails } from "~/adapters/MovieAdapter";
import { Head } from "~/components/Head";
import { HeaderBar } from "~/components/HeaderBar";
import { Infos } from "~/components/Infos";
import { Poster } from "~/components/Poster";
import { OMDBMovie } from "~/models/OMDBModel";
import { MovieServices } from "~/services/OMDBServices";
import { TMDBServices } from "~/services/TMDBServices";

const MoviePage: NextPage = ({
  data: propsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const data = new MovieDetails(propsData);
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head title={`${data.title} | Filme`} />
      <HeaderBar />

      <main
        className="flex bg-slate-900 text-slate-100 h-full w-full pt-14 sm:pt-12 justify-center items-start overflow-auto"
        ref={mainRef}
      >
        <div className="flex flex-col sm:flex-row  items-center sm:items-start">
          <Poster src={data?.poster!} />
          <Infos details={data!} />
          <div className=" sm:hidden text-justify  w-80 mt-2">
            <span className="text-red-500 font-semibold">Sinopse:</span>{" "}
            {data?.overview}
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const data = await TMDBServices.findMovieByID(`${params?.id!}`);

  return {
    props: {
      data: data || null,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const params = {
    id: "1927",
  };

  return {
    paths: [{ params }],
    fallback: "blocking", // false or 'blocking'
  };
};

export default MoviePage;
