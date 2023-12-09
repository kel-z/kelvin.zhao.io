import React from "react";
import Head from "next/head";
import Layout from "components/starrail/Layout";

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Star Rail Inventory Viewer</title>
        <meta property="og:title" content="Star Rail Inventory Viewer" />
        <meta
          property="og:description"
          content="Visualize Star Rail user data files scanned with HSR-Scanner."
        />
        <meta
          property="og:image"
          content="https://github.com/Mar-7th/StarRailRes/blob/8d8f3066edb60938e9c9d6733620132b60f9dce8/image/character_portrait/1001.png?raw=true"
        />
      </Head>
      <p className="inline-flex h-full w-full items-center justify-center">
        <span>Select a tab.</span>
      </p>
      <div className="z-50 inline-flex w-full justify-center p-1 text-xs opacity-50">
        Star Rail Inventory Viewer is not affiliated with or endorsed by
        HoYoverse.
      </div>
    </>
  );
}

LandingPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout tab="none">{page}</Layout>;
};
