import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";

import { useRef } from "react";
import { MovieDetails } from "~/adapters/MovieAdapter";
import { Footer } from "~/components/Footer";
import { Head } from "~/components/Head";
import { Infos } from "~/components/Infos";
import { Poster } from "~/components/Poster";
import { TMDBWatchProviders } from "~/models/TMDBModel";
import { TMDBServices } from "~/services/TMDBServices";
import styles from "~/styles/MoviePage.module.css";

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

      <main className={styles.main} ref={mainRef}>
        <div className={styles.content}>
          <Poster src={data?.poster!} providers={providers} />
          <Infos details={data!} />
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
