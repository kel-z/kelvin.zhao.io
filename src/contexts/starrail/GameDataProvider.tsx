import { useState, useEffect } from "react";
import GameDataContext from "./GameDataContext";
import { GameData, UserData } from "lib/starrail/types/app";

export const GameDataProvider = ({ children }) => {
  const [gameData, setGameData] = useState<GameData>({
    light_cones: {},
    relic_sets: {},
    characters: {}
  });

  const [userData, setUserData] = useState<UserData>({
    light_cones: [],
    relics: [],
    characters: []
  });

  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/kel-z/HSR-Data/main/output/game_data_verbose_with_icons.json";

    fetch(url)
      .then((response) => response.json())
      .then((data: GameData) => {
        setGameData(data);

        const userData = localStorage.getItem("userData");
        if (!userData) return;
        setUserData(JSON.parse(userData));
      });
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (userData) {
        const dataStr = JSON.stringify(userData);
        localStorage.setItem("userData", dataStr);
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [userData]);

  return (
    <GameDataContext.Provider
      value={{
        gameData,
        userData,
        setUserData
      }}
    >
      {children}
    </GameDataContext.Provider>
  );
};
