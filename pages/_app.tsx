import type { AppProps } from "next/app";
import "../styles/global.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>kelvin zhao</title>
        <meta property="og:title" content="kelvin zhao" />
        <meta property="og:description" content="Software Engineer" />
        <meta property="og:image" content="/images/og-image.png" />
      </Head>
      <Component />
    </>
  );
}
