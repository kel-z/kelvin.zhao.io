import { GameData, UserData } from "lib/starrail";
import RelicCard from "../RelicCard";
import { useState } from "react";
import FilterBar from "../FilterBar";

interface RelicsProps {
  gameData: GameData;
  userData: UserData;
  setUserData: (userData: UserData) => void;
}
export default function Relics({
  gameData,
  userData,
  setUserData,
}: RelicsProps) {
  const [sortBy, setSortBy] = useState("rarity");
  const [sortAsc, setSortAsc] = useState(false);
  const sortOptions = [
    {
      displayName: "Level",
      value: "level",
    },
    {
      displayName: "Rarity",
      value: "rarity",
    },
    {
      displayName: "Set",
      value: "set",
    },
  ];

  return (
    <>
      <FilterBar {...{ setSortBy, sortAsc, setSortAsc, sortOptions }} />
      <div className="flex flex-col overflow-auto">
        <div className="mx-10 grid gap-2 py-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:mx-[10%] xl:grid-cols-4">
          {userData.relics
            .sort((a, b) => {
              if (!gameData.relic_sets.hasOwnProperty(a.set)) return 0;
              if (!gameData.relic_sets.hasOwnProperty(b.set)) return 0;

              let order = sortAsc ? 1 : -1;
              let sortValA = a[sortBy];
              let sortValB = b[sortBy];
              if (sortValA > sortValB) return order;
              if (sortValA < sortValB) return -order;

              const tieBreakers = ["level", "set", "rarity", sortBy];
              for (const key of tieBreakers) {
                if (a[key] > b[key]) return order;
                if (a[key] < b[key]) return -order;
              }

              return 0;
            })
            .map((relicData, index) => {
              if (!gameData.relic_sets.hasOwnProperty(relicData.set))
                return null;

              return (
                <RelicCard
                  key={index}
                  {...{
                    gameData,
                    userData,
                    setUserData,
                    relicData,
                  }}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
