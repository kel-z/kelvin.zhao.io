import CharacterCard from "../CharacterCard";
import CharacterDetails from "../CharacterDetails";
import { useState } from "react";
import FilterBar from "../FilterBar";
import { GameData, UserData } from "lib/starrail/types/app";
import Scrollable from "../Scrollable";

interface CharactersProps {
  gameData: GameData;
  userData: UserData;
  setUserData: (userData: UserData) => void;
}
export default function Characters({
  gameData,
  userData,
  setUserData
}: CharactersProps) {
  const [sortBy, setSortBy] = useState("level");
  const [sortAsc, setSortAsc] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );
  const [page, setPage] = useState(1);
  const sortOptions = [
    {
      displayName: "Level",
      value: "level"
    },
    {
      displayName: "Name",
      value: "key"
    },
    {
      displayName: "Rarity",
      value: "rarity"
    }
  ];
  const charactersPerPage = 12;
  const loadMore = () => {
    setPage((page) => page + 1);
  };
  const doneLoading = userData.characters.length <= page * charactersPerPage;

  return (
    <>
      <FilterBar {...{ setSortBy, sortAsc, setSortAsc, sortOptions }} />
      {selectedCharacter && (
        <CharacterDetails
          {...{
            gameData,
            userData,
            setUserData,
            selectedCharacter,
            setSelectedCharacter
          }}
        />
      )}
      <Scrollable {...{ loadMore, doneLoading }}>
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
            .slice(0, page * charactersPerPage)
            .map((characterUserData, index) => {
              if (!gameData.characters.hasOwnProperty(characterUserData.key))
                return null;

              return (
                <CharacterCard
                  key={index}
                  {...{
                    gameData,
                    userData,
                    setUserData,
                    characterUserData,
                    setSelectedCharacter
                  }}
                />
              );
            })}
        </div>
      </Scrollable>
    </>
  );
}
