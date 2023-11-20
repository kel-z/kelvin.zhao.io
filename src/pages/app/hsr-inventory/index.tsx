import React from "react";
import { useEffect, useState } from "react";
import NavBar from "components/starrail/NavBar";

import { GameData, StarRailTab, UserData } from "lib/starrail";
import LightCones from "components/starrail/LightCones";
import Relics from "components/starrail/Relics";
import Characters from "components/starrail/Characters";
import LoadingSpinner from "components/starrail/LoadingSpinner";
import Head from "next/head";

function HSRInventory() {
  const [gameDataLoaded, setGameDataLoaded] = useState(false);
  const [gameData, setGameData] = useState<GameData>({
    light_cones: {},
    relic_sets: {},
    characters: {},
  });
  const [userData, setUserData] = useState<UserData>({
    light_cones: [],
    relics: [],
    characters: [],
  });
  const [tab, setTab] = useState<StarRailTab>("light_cones");

  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/kel-z/HSR-Data/main/output/game_data_verbose_with_icons.json";
    fetch(url)
      .then((response) => response.json())
      .then((data: GameData) => {
        setGameData(data);
        setGameDataLoaded(true);

        let userData = localStorage.getItem("data");
        if (!userData) return;

        setUserData(JSON.parse(userData));
      });
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (userData) {
        const dataStr = JSON.stringify(userData);
        localStorage.setItem("data", dataStr);
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [userData]);

  return (
    <React.StrictMode>
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
      <div className="flex h-screen w-screen flex-col bg-neutral-950">
        <NavBar {...{ userData, setUserData, tab, setTab }} />
        {!gameDataLoaded ? (
          <LoadingSpinner />
        ) : (
          (tab === "light_cones" && (
            <LightCones {...{ gameData, userData, setUserData }} />
          )) ||
          (tab === "relics" && (
            <Relics {...{ gameData, userData, setUserData }} />
          )) ||
          (tab === "characters" && (
            <Characters {...{ gameData, userData, setUserData }} />
          ))
        )}
      </div>
    </React.StrictMode>
  );
}

export default HSRInventory;
