import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { MovieDetails } from "~/adapters/MovieAdapter";
import { Footer } from "~/components/Footer";
import { Head } from "~/components/Head";
import { HeaderBar } from "~/components/HeaderBar";
import { Infos } from "~/components/Infos";
import { Poster } from "~/components/Poster";
import { OMDBMovie } from "~/models/OMDBModel";
import { TMDBWatchProviders } from "~/models/TMDBModel";
import { MovieServices } from "~/services/OMDBServices";
import { TMDBServices } from "~/services/TMDBServices";
import { getTMDBImagePath } from "~/utils/getTMDBImage";

const MoviePage: NextPage = ({
  data: propsData,
  providers: propsProviders,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const data = new MovieDetails(propsData);
  const providers: TMDBWatchProviders = propsProviders;
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head title={`${data.title} | Busca Filmes`} />

      <main
        className="flex flex-col bg-slate-900 text-slate-100 h-full w-full pt-14 sm:pt-12 justify-between items-center overflow-y-auto overflow-x-hidden"
        ref={mainRef}
      >
        <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:items-start overflow-auto">
          <Poster src={data?.poster!} providers={providers} />
          <Infos details={data!} />
          <article className="sm:hidden text-justify  w-80 mt-2">
            <p className="text-red-500 font-semibold">Sinopse:</p>{" "}
            {data?.overview}
          </article>
        </div>

        <Footer />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const data = await TMDBServices.findMovieByID(`${params?.id!}`);
  const watchProviders: TMDBWatchProviders =
    await TMDBServices.findProvidersByMovieID(`${params?.id!}`);

  return {
    props: {
      data: data || null,
      providers: watchProviders,
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
