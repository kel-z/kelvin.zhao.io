import LightConeCard from "../LightConeCard";
import { useState } from "react";
import FilterBar from "../FilterBar";
import { GameData, UserData } from "lib/starrail/types/app";
import Scrollable from "../Scrollable";

interface LightConesProps {
  gameData: GameData;
  userData: UserData;
  setUserData: (userData: UserData) => void;
}
export default function LightCones({
  gameData,
  userData,
  setUserData,
}: LightConesProps) {
  const [sortBy, setSortBy] = useState("level");
  const [sortAsc, setSortAsc] = useState(false);
  const [page, setPage] = useState(1);
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
    {
      displayName: "Superimposition",
      value: "superimposition",
    },
  ];
  const lightconesPerPage = 60;
  const loadMore = () => {
    setPage((page) => page + 1);
  };
  const doneLoading = userData.light_cones.length <= page * lightconesPerPage;

  return (
    <>
      <FilterBar {...{ setSortBy, sortAsc, setSortAsc, sortOptions }} />
      <Scrollable {...{ loadMore, doneLoading }}>
        <div className="mx-10 grid gap-2 py-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:mx-[10%] xl:grid-cols-5">
          {userData.light_cones
            .sort((a, b) => {
              if (!gameData.light_cones.hasOwnProperty(a.key)) return 0;
              if (!gameData.light_cones.hasOwnProperty(b.key)) return 0;

              let order = sortAsc ? 1 : -1;
              let sortValA = a[sortBy];
              let sortValB = b[sortBy];

              if (sortBy === "rarity") {
                sortValA = gameData.light_cones[a.key].rarity;
                sortValB = gameData.light_cones[b.key].rarity;
              }

              if (sortValA > sortValB) return order;
              if (sortValA < sortValB) return -order;

              const tieBreakers = ["rarity", "ascension", "level", sortBy];
              for (const key of tieBreakers) {
                if (key === "rarity") {
                  sortValA = gameData.light_cones[a.key].rarity;
                  sortValB = gameData.light_cones[b.key].rarity;
                } else {
                  sortValA = a[key];
                  sortValB = b[key];
                }
                if (sortValA > sortValB) return order;
                if (sortValA < sortValB) return -order;
              }

              return 0;
            })
            .slice(0, page * lightconesPerPage)
            .map((lightConeData, index) => {
              if (!gameData.light_cones.hasOwnProperty(lightConeData.key))
                return null;

              return (
                <LightConeCard
                  key={index}
                  {...{
                    gameData,
                    userData,
                    setUserData,
                    lightConeData,
                  }}
                />
              );
            })}
        </div>
      </Scrollable>
    </>
  );
}
