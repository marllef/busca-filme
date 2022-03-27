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
                  <a href={providers.link} target="_blank" rel="noreferrer">
                    <img
                      className="rounded-xl p-1 w-10"
                      key={item.provider_id}
                      alt={item.provider_name}
                      src={getTMDBImagePath(item.logo_path)}
                    />
                  </a>
                ));
              }
            })}
          </span>
          <span className="text-xs text-slate-600 select-none italic py-1">Provided by JustWatch</span>
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
