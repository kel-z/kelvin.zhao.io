import { GameData, UserData } from "lib/starrail";
import CharacterCard from "../CharacterCard";
import { useState } from "react";
import FilterBar from "../FilterBar";

interface CharactersProps {
  gameData: GameData;
  userData: UserData;
  setUserData: (userData: UserData) => void;
}
export default function Characters({
  gameData,
  userData,
  setUserData,
}: CharactersProps) {
  const [sortBy, setSortBy] = useState("level");
  const [sortAsc, setSortAsc] = useState(false);
  const sortOptions = [
    {
      displayName: "Level",
      value: "level",
    },
    {
      displayName: "Name",
      value: "key",
    },
    {
      displayName: "Rarity",
      value: "rarity",
    },
  ];

  return (
    <>
      <FilterBar {...{ setSortBy, sortAsc, setSortAsc, sortOptions }} />
      <div className="flex flex-col overflow-auto">
        <div className="mx-10 grid gap-2 py-2 lg:grid-cols-2 xl:mx-[10%] xl:grid-cols-3">
          {userData.characters
            .sort((a, b) => {
              if (!gameData.characters.hasOwnProperty(a.key)) return 0;
              if (!gameData.characters.hasOwnProperty(b.key)) return 0;

              let order = sortAsc ? 1 : -1;
              let sortValA = a[sortBy];
              let sortValB = b[sortBy];

              if (sortBy === "rarity") {
                sortValA = gameData.characters[a.key].rarity;
                sortValB = gameData.characters[b.key].rarity;
              }

              if (sortValA > sortValB) return order;
              if (sortValA < sortValB) return -order;

              const tieBreakers = ["rarity", "ascension", "level", sortBy];
              for (const key of tieBreakers) {
                if (key === "rarity") {
                  sortValA = gameData.characters[a.key].rarity;
                  sortValB = gameData.characters[b.key].rarity;
                } else {
                  sortValA = a[key];
                  sortValB = b[key];
                }
                if (sortValA > sortValB) return order;
                if (sortValA < sortValB) return -order;
              }

              return 0;
            })
            .map((characterData, index) => {
              if (!gameData.characters.hasOwnProperty(characterData.key))
                return null;

              return (
                <CharacterCard
                  key={index}
                  {...{
                    gameData,
                    userData,
                    setUserData,
                    characterData,
                  }}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
