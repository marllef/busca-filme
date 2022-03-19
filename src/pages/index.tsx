import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Filmes</title>
        <meta name="description" content="Encontre seu filme" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Hello</div>
    </div>
  );
};

export default Home;
