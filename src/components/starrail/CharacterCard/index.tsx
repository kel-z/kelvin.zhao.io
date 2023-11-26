import { CharacterUserData } from "lib/starrail/types/character";
import { GameData, UserData } from "lib/starrail/types/app";
import { LightConeUserData } from "lib/starrail/types/lightcone";
import {
  addModifiersToCharacterStats,
  getCharacterBaseStats,
  getAllCharacterStatModifiers,
  addRelicStatsToCharacterStats,
} from "lib/starrail/utils/character";

interface CharacterCardProps {
  gameData: GameData;
  userData: UserData;
  setUserData: (userData: UserData) => void;
  characterUserData: CharacterUserData;
}
export default function CharacterCard({
  gameData,
  userData,
  setUserData,
  characterUserData,
}: CharacterCardProps) {
  const characterGameData = gameData.characters[characterUserData.key];
  const characterLightCone: LightConeUserData | undefined =
    userData.light_cones.find(
      (lightCone) => lightCone.location === characterUserData.key
    );
  const characterRelics = userData.relics.filter(
    (relic) => relic.location === characterUserData.key
  );

  const characterBaseStatVals = getCharacterBaseStats(
    characterUserData,
    characterLightCone,
    gameData
  );

  const characterStatVals = { ...characterBaseStatVals };
  const modifiers = getAllCharacterStatModifiers(
    characterUserData,
    characterLightCone,
    characterRelics,
    gameData
  );
  addModifiersToCharacterStats(
    characterStatVals,
    modifiers,
    characterBaseStatVals
  );
  addRelicStatsToCharacterStats(
    characterStatVals,
    characterBaseStatVals,
    characterRelics
  );

  return (
    <div className={`group flex flex-col overflow-hidden rounded-md`}>
      <div
        className={`relative h-56 w-full bg-gradient-to-tl ${
          {
            1: "from-gray-400 to-gray-900",
            2: "from-green-400 to-green-900",
            3: "from-blue-400 to-blue-900",
            4: "from-purple-400 to-purple-900",
            5: "from-yellow-200 to-amber-800",
          }[characterGameData.rarity]
        }`}
      >
        <div className="absolute -right-12 -top-2 h-80 w-80 overflow-hidden rounded-bl-full rounded-tl-full border border-white/10 bg-white/5">
          <img
            src={`${gameData.characters[characterUserData.key].icon}`}
            alt={`${characterUserData.key} icon`}
            className={`transform transition-all duration-300 group-hover:scale-105`}
          />
        </div>
        <div className="absolute left-4 top-4 w-1/2 rounded-md bg-black/50 p-5">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold drop-shadow-xl">
              Lv. {characterUserData.level}{" "}
              <span className="text-sm font-normal opacity-50 drop-shadow-xl">
                / {characterUserData.ascension * 10 + 20}
              </span>
            </h1>
            <div className="flex w-full flex-col">
              <div className="flex justify-between bg-black/10">
                <p className="text-sm">HP</p>
                <p className="text-sm">{Math.floor(characterStatVals.hp)}</p>
              </div>
              <div className="flex justify-between ">
                <p className="text-sm">ATK</p>
                <p className="text-sm">{Math.floor(characterStatVals.atk)}</p>
              </div>
              <div className="flex justify-between bg-black/10">
                <p className="text-sm">DEF</p>
                <p className="text-sm">{Math.floor(characterStatVals.def)}</p>
              </div>
              <div className="flex justify-between ">
                <p className="text-sm">SPD</p>
                <p className="text-sm">{Math.floor(characterStatVals.spd)}</p>
              </div>
              <div className="flex justify-between bg-black/10">
                <p className="text-sm">CRIT Rate</p>
                <p className="text-sm">
                  {(
                    Math.floor(characterStatVals.crit_rate * 1000) / 10
                  ).toFixed(1)}
                  %
                </p>
              </div>
              <div className="flex justify-between ">
                <p className="text-sm">CRIT DMG</p>
                <p className="text-sm">
                  {(Math.floor(characterStatVals.crit_dmg * 1000) / 10).toFixed(
                    1
                  )}
                  %
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="absolute right-5 top-3 text-lg"
          onClick={() => {
            const newUserData = { ...userData };
            newUserData.characters = newUserData.characters.filter(
              (character) => character !== characterUserData
            );
            setUserData(newUserData);
          }}
        >
          ✖
        </button>
      </div>
      <div className="z-10 bg-neutral-800/75 p-3">
        <p className="overflow-hidden truncate text-lg font-semibold">
          {characterUserData.key.startsWith("Trailblazer")
            ? "Trailblazer"
            : characterUserData.key}

          {/* <span className="text-sm font-normal opacity-50 drop-shadow-xl">
            {" "}
            / {characterDict.rarity}★
          </span> */}
          <span className="font-normal opacity-50 drop-shadow-xl">
            {" "}
            / {characterGameData.path}
          </span>
        </p>
        <div className="flex flex-wrap overflow-hidden text-sm ">
          <div className="group/sub flex w-full justify-between bg-neutral-700/25 px-3 py-0.5">
            <p className="truncate opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              Break Effect
            </p>
            <p className="opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              {(Math.floor(characterStatVals.break * 1000) / 10).toFixed(1)}%
            </p>
          </div>
          <div className="group/sub flex w-full justify-between px-3 py-0.5">
            <p className="truncate opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              Energy Regeneration Rate
            </p>
            <p className="opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              {(Math.floor(characterStatVals.energy * 1000) / 10).toFixed(1)}%
            </p>
          </div>
          <div className="group/sub flex w-full justify-between bg-neutral-700/25 px-3 py-0.5">
            <p className="truncate opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              Effect Hit Rate
            </p>
            <p className="opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              {(Math.floor(characterStatVals.effect_hit * 1000) / 10).toFixed(
                1
              )}
              %
            </p>
          </div>
          <div className="group/sub flex w-full justify-between px-3 py-0.5">
            <p className="truncate opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              Effect RES
            </p>
            <p className="opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              {(Math.floor(characterStatVals.effect_res * 1000) / 10).toFixed(
                1
              )}
              %
            </p>
          </div>
          <div className="group/sub flex w-full justify-between bg-neutral-700/25 px-3 py-0.5">
            <p className="truncate opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              {characterGameData.element} DMG Boost
            </p>
            <p className="opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              {(
                Math.floor(
                  characterStatVals[characterGameData.element.toLowerCase()] *
                    1000
                ) / 10
              ).toFixed(1)}
              %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
