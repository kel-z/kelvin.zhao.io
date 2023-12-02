import {
  CharacterGameData,
  CharacterStats,
  CharacterUserData,
} from "lib/starrail/types/character";
import { GameData, UserData } from "lib/starrail/types/app";
import { LightConeUserData } from "lib/starrail/types/lightcone";
import {
  addModifiersToCharacterStats,
  getCharacterBaseStats,
  getAllCharacterStatModifiers,
  addRelicStatsToCharacterStats,
  getTotalCharacterStats,
} from "lib/starrail/utils/character";
import { FastAverageColor } from "fast-average-color";
import { useState } from "react";

interface CharacterTracesProps {
  characterUserData: CharacterUserData;
  gameData: GameData;
}
export default function CharacterTraces({
  characterUserData,
  gameData,
}: CharacterTracesProps) {
  const characterGameData: CharacterGameData =
    gameData.characters[characterUserData.key];

  return (
    <div className="h-full w-full">
      {/* bg img */}

      <div className="relative h-fit w-fit ">
        <div className="absolute h-full w-full">
          <img
            src={characterGameData.skills.talent.icon}
            className="ml-[50%] mt-[39%] w-[11%] -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-neutral-400 bg-neutral-900 object-contain"
          />
        </div>
        <img
          id="traces-background"
          src={`/images/starrail/trace-${characterGameData.path
            .split(" ")
            .pop()}.png`}
          className="-z-10 object-contain"
        />
      </div>
      {/* <img
        id="traces-background"
        src={`/images/starrail/trace-${characterGameData.path
          .split(" ")
          .pop()}.png`}
        className="-z-10 object-contain"
      /> */}
      {/* traces */}
    </div>
  );
}
