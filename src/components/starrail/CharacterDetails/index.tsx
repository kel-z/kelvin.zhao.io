import {
  CharacterGameData,
  CharacterUserData,
} from "lib/starrail/types/character";
import { GameData, UserData } from "lib/starrail/types/app";
import { LightConeUserData } from "lib/starrail/types/lightcone";
import {
  addModifiersToCharacterStats,
  getCharacterBaseStats,
  getAllCharacterStatModifiers,
  addRelicStatsToCharacterStats,
} from "lib/starrail/utils/character";
import { FastAverageColor } from "fast-average-color";
import { useState } from "react";

interface CharacterCardProps {
  gameData: GameData;
  userData: UserData;
  setUserData: (userData: UserData) => void;
  selectedCharacter: string | null;
  setSelectedCharacter: (character: string | null) => void;
}
export default function CharacterCard({
  gameData,
  userData,
  setUserData,
  selectedCharacter,
  setSelectedCharacter,
}: CharacterCardProps) {
  const [colour, setColour] = useState<string>("#000000");
  const characterUserData = userData.characters.find(
    (character) => character.key === selectedCharacter
  );
  const characterGameData: CharacterGameData =
    gameData.characters[selectedCharacter];
  const characterLightCone: LightConeUserData | undefined =
    userData.light_cones.find(
      (lightCone) => lightCone.location === selectedCharacter
    );
  const characterBaseStatVals = getCharacterBaseStats(
    characterUserData,
    characterLightCone,
    gameData
  );
  const characterStatVals = { ...characterBaseStatVals };
  const fac = new FastAverageColor();

  fac
    .getColorAsync(characterGameData.splash)
    .then((colour) => setColour(colour.hex));

  return (
    <div className="fixed inset-0 z-20 flex overflow-y-auto">
      <div className="relative mx-auto my-auto flex h-2/3 w-full max-w-screen-2xl flex-col rounded-lg bg-neutral-900 shadow-lg">
        <div id="header" className="flex w-full flex-row">
          <p className="text-md mx-4 my-3 text-neutral-500">
            {characterUserData.key}
          </p>
          <button
            className="absolute right-5 top-3 text-lg"
            onClick={() => setSelectedCharacter(null)}
          >
            ✖
          </button>
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom right, ${colour}50, black)`,
          }}
          className="relative z-20 flex h-full w-full flex-col justify-between overflow-hidden lg:flex-row"
        >
          <img
            src={characterGameData.splash}
            className="z-10 h-auto w-2/3 scale-150 drop-shadow-2xl"
            alt={`${characterUserData.key} splash`}
          />
          <img
            src={characterGameData.splash}
            className="absolute top-1/2 -z-10 h-auto w-1/3 -translate-x-3/4 -translate-y-1/2 scale-[600%] transform opacity-50 blur-md saturate-200 filter"
            alt={`${characterUserData.key} splash`}
          />
          <div className="z-20 my-7 mr-7 flex w-7/12 flex-col rounded-lg bg-neutral-900/50 p-5 backdrop-blur-xl">
            <p className="font-din-alternate text-xl drop-shadow-xl">
              <span className="opacity-50">{characterGameData.path} /</span>{" "}
              {characterUserData.key}
            </p>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 -z-10 bg-black/75 opacity-75"
        onClick={() => setSelectedCharacter(null)}
      />
    </div>
  );
}
