import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DataProvider } from "~/contexts/DataContext";
import { FloatButton } from "~/components/FloatButton";
import { AppLayout } from "~/layout/AppLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DataProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </DataProvider>
    </>
  );
}

export default MyApp;
