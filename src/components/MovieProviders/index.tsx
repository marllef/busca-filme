import Image from "next/image";
import { TMDBWatchProviders } from "~/models/TMDBModel";
import { getTMDBImagePath } from "~/utils/getTMDBImage";
import styles from "./styles/MovieProviders.module.css";

interface Props {
  providers: TMDBWatchProviders | null;
}

export const MovieProviders = ({ providers }: Props) => {
  if (providers) {
    const keys = Object.keys(providers);
    return (
      <>
        <div className={styles.container}>
          <h5>Disponivel em:</h5>
          <span className={styles.streaming_list}>
            {keys.map((key) => {
              if (key === "flatrate") {
                return providers[key].map((item) => (
                  <a
                    className="flex justify-center p-1 items-center"
                    key={item.provider_id}
                    href={providers.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      className="rounded-xl p-1 w-10"
                      alt={item.provider_name}
                      width={40}
                      height={40}
                      src={getTMDBImagePath(item.logo_path)}
                    />
                  </a>
                ));
              }
            })}
          </span>
          <span className="text-xs text-slate-600 select-none italic py-1">
            Provided by{" "}
            <a
              href="https://www.justwatch.com/"
              target="_blank"
              rel="noreferrer"
            >
              JustWatch
            </a>
          </span>
        </div>
      </>
    );
  }
  return (
    <div className={styles.container}>
      <h5>Disponivel em:</h5>
      <p className="text-center text-sm">Não disponivel em streaming</p>
    </div>
  );
};
