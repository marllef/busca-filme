import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DataProvider } from "~/contexts/DataContext";
import { FloatButton } from "~/components/FloatButton";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DataProvider>
        <div className="relative w-screen h-screen bg-slate-900 overflow-hidden">
          <Component {...pageProps} />
        </div>
      </DataProvider>
    </>
  );
}

export default MyApp;
