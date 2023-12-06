import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import "styles/global.css";
import { GameDataProvider } from "contexts/starrail/GameDataProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = (Component as any).getLayout || ((page: any) => page);

  return (
    <GameDataProvider>
      {getLayout(<Component {...pageProps} />)}
      <Analytics />
    </GameDataProvider>
  );
}
