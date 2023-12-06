import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "components/starrail/Layout";
import Characters from "components/starrail/Characters";
import { useRouter } from "next/router";
import CharacterDetails from "components/starrail/CharacterDetails";

export default function CharactersPage() {
  const router = useRouter();
  const [character, setCharacter] = useState<string | null>(null);

  useEffect(() => {
    const { selected } = router.query;
    if (selected) {
      setCharacter(selected as string);
    } else {
      setCharacter(null);
    }
  }, [router.query]);

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
      {character ? <CharacterDetails characterKey={character} /> : null}
      <Characters />
    </>
  );
}

CharactersPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout tab="characters">{page}</Layout>;
};
