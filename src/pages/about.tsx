import Image from "next/image";
import { Footer } from "~/components/Footer";
import { Head } from "~/components/Head";
import { Main } from "~/components/Main";

const CreditsPage = () => {
  return (
    <>
      <Head title="Creditos | Busca Filmes" />

      <Main>
        <article className=" flex flex-col justify-center items-center p-1">
          <section className="flex flex-col justify-center items-center w-72 text-slate-100 mb-6">
            <h3 className="text-red-500 font-semibold text-xl">
              Desenvolvimento
            </h3>
            <p>
              Esse site foi desenvolvido por{" "}
              <a
                href="https://instagram.com/marllef"
                target="_blank"
                rel="noreferrer"
                className="text-red-500 font-semibold"
              >
                Marllef
              </a>
              .
            </p>
          </section>

          <section className="flex flex-col justify-center items-center p-2">
            <h3 className="text-red-500 font-semibold text-xl">
              Dados de Filmes e API
            </h3>

            <p className=" text-slate-100 w-72 text-justify pb-4">
              Todos os metadados relacionados a filmes usados neste site,
              incluindo nomes de atores, diretores, estúdios, sinopses, datas de
              lançamento, trailers e pôsteres são fornecidos pelo{" "}
              <a
                className="text-red-500 font-semibold"
                target="_blank"
                rel="noreferrer"
                href="https://www.themoviedb.org/"
              >
                The Movie Database
              </a>{" "}
              (TMDb).
            </p>
            <Image
              src="/credits/TMDB.svg"
              alt="TMDB logo."
              width={250}
              height={30}
            />
            <p className="font-semibold italic text-slate-100 text-justify w-72 py-2 pt-4">
              O <span className="text-red-500">BuscaFilmes</span> utiliza a API
              do TMDb, mas não é endossado ou certificado pelo TMDb.{" "}
            </p>
          </section>
        </article>
      </Main>
    </>
  );
};

export default CreditsPage;
