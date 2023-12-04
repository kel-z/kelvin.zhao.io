import {
  CharacterGameData,
  CharacterStats
} from "lib/starrail/types/character";
import { GameData, UserData } from "lib/starrail/types/app";
import { getTotalCharacterStats } from "lib/starrail/utils/character";
import { FastAverageColor } from "fast-average-color";
import { useState } from "react";
import CharacterTraces from "../CharacterTraces";
import {
  LightConeUserData
} from "lib/starrail/types/lightcone";
import {
  getLightconeAbilityDesc,
  getLightconeStats
} from "lib/starrail/utils/lightcone";

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
  setSelectedCharacter
}: CharacterCardProps) {
  const [colour, setColour] = useState<string>("#000000");
  const characterUserData = userData.characters.find(
    (character) => character.key === selectedCharacter
  );
  const characterGameData: CharacterGameData =
    gameData.characters[selectedCharacter];
  const characterStatVals: CharacterStats = getTotalCharacterStats(
    characterUserData,
    userData,
    gameData
  );
  const fac = new FastAverageColor();
  fac
    .getColorAsync(characterGameData.splash)
    .then((colour) => setColour(colour.hex));

  const characterLightCone: LightConeUserData | null =
    userData.light_cones.find(
      (lightCone) => lightCone.location === characterUserData.key
    );

  const lightconeStatVals = characterLightCone
    ? getLightconeStats(characterLightCone, gameData)
    : null;

  const getStatDisplayText = (stat: string) => {
    switch (stat) {
      case "crit_dmg":
        return "CRIT DMG";
      case "crit_rate":
        return "CRIT Rate";
      case "effect_hit":
        return "Effect Hit Rate";
      case "effect_res":
        return "Effect RES";
      case "break":
        return "Break Effect";
      case "energy":
        return "Energy Regeneration Rate";
      case "heal":
        return "Outgoing Healing Boost";
      case characterGameData.element.toLocaleLowerCase():
        return `${characterGameData.element} DMG Boost`;
      default:
        return stat.toUpperCase();
    }
  };

  return (
    <div className="fixed inset-0 z-20 flex">
      <div className="relative mx-auto my-auto flex h-full max-h-screen w-full max-w-screen-2xl flex-col bg-neutral-900 shadow-lg lg:h-fit lg:rounded-lg">
        <div id="header" className="flex w-full flex-row">
          <p className="text-md mx-4 my-3 text-neutral-500">
            {characterUserData.key.startsWith("Trailblazer")
              ? "Trailblazer"
              : characterUserData.key}
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
            backgroundImage: `linear-gradient(to bottom right, ${colour}50, black)`
          }}
          className="relative z-20 flex h-full w-full flex-row justify-end overflow-hidden"
        >
          <img
            src={characterGameData.splash}
            className="absolute left-0 right-1/2 z-10 hidden h-full translate-y-8 scale-125 transform drop-shadow-2xl lg:block"
            alt={`${characterUserData.key} splash`}
          />
          <img
            src={characterGameData.splash}
            className="absolute top-1/2 -z-10 h-auto w-1/3 -translate-x-3/4 -translate-y-1/2 scale-[600%] transform opacity-50 blur-md saturate-200 filter"
            alt={`${characterUserData.key} bg effect`}
          />
          <div className="z-20 flex w-full flex-col gap-2 overflow-y-auto overflow-x-hidden bg-neutral-900/50 p-5 backdrop-blur-xl lg:my-7 lg:ml-96 lg:mr-7 lg:w-[56rem] lg:rounded-lg">
            <div className="flex gap-2">
              <p className="font-din-alternate text-xl font-bold drop-shadow-xl">
                {/* <span className="opacity-50">{characterGameData.path} /</span>{" "} */}
                {characterUserData.key.startsWith("Trailblazer")
                  ? "Trailblazer"
                  : characterUserData.key}
              </p>
              <div className="my-auto rounded-sm bg-neutral-900/50 px-2 font-din-alternate text-sm drop-shadow-xl">
                Lv. {characterUserData.level} /{" "}
                {20 + characterUserData.ascension * 10}
              </div>
            </div>
            {characterLightCone && (
              <div className="flex w-full flex-col justify-center rounded-sm bg-neutral-900/50 p-5 pt-3">
                {/* <p className="mb-1 font-din-alternate text-xl font-bold drop-shadow-xl">
                  Light Cone
                </p> */}
                <div className="flex w-fit flex-row items-center gap-3">
                  <div className="w-fit">
                    <div className="font-din-alternate text-xl font-bold">
                      {characterLightCone.key}
                    </div>
                    <div className="flex gap-3">
                      <div className="flex h-fit">
                        <div
                          className={`relative h-fit rounded-sm border bg-gradient-to-tl ${
                            {
                              1: "border-gray-400 from-gray-400 to-gray-900",
                              2: "border-green-400 from-green-400 to-green-900",
                              3: "border-blue-400 from-blue-400 to-blue-900",
                              4: "border-purple-500 from-purple-400 to-purple-900",
                              5: "border-yellow-500 from-yellow-200 to-amber-800"
                            }[
                              gameData.light_cones[characterLightCone.key]
                                .rarity
                            ]
                          }`}
                        >
                          <img
                            src={
                              gameData.light_cones[characterLightCone.key]
                                .mini_icon
                            }
                            alt={`${characterLightCone.key} icon`}
                            className={`w-20`}
                          />
                          <div className="absolute bottom-0 w-full bg-neutral-900/75 text-center text-sm">
                            {characterLightCone.level} /{" "}
                            {20 + characterLightCone.ascension * 10}
                          </div>
                        </div>
                        <div className="flex flex-col justify-evenly rounded-r-xl bg-neutral-900/75 px-2">
                          <div className="flex font-din-alternate">
                            <img
                              src="/icons/starrail/hp.png"
                              alt="hp icon"
                              className="w-5"
                            />
                            <p className="text-sm">{lightconeStatVals.hp}</p>
                          </div>
                          <div className="flex font-din-alternate">
                            <img
                              src="/icons/starrail/atk.png"
                              alt="atk icon"
                              className="w-5"
                            />
                            <p className="text-sm">{lightconeStatVals.atk}</p>
                          </div>
                          <div className="flex font-din-alternate">
                            <img
                              src="/icons/starrail/def.png"
                              alt="def icon"
                              className="w-5"
                            />
                            <p className="text-sm">{lightconeStatVals.def}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 font-din-alternate text-sm">
                        <div className="text-md font-bold text-amber-300 opacity-75 saturate-50">
                          Superimposition {characterLightCone.superimposition}
                        </div>
                        {getLightconeAbilityDesc(characterLightCone, gameData)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="grid gap-2 lg:grid-cols-2">
              <div className="flex flex-col rounded-sm bg-neutral-900/50 p-5 lg:hidden">
                {/* <p className="mb-1 font-din-alternate text-xl font-bold drop-shadow-xl">
                  Art
                </p> */}
                <img
                  src={characterGameData.splash}
                  alt={`${characterUserData.key} splash`}
                  className="rounded-3xl"
                  style={{
                    backgroundColor: `${colour}10`
                  }}
                />
              </div>
              <div className="flex flex-col rounded-sm bg-neutral-900/50 p-5 pt-3">
                {/* <p className="mb-1 font-din-alternate text-xl font-bold drop-shadow-xl">
                    Stats
                  </p> */}
                {Object.keys(characterStatVals)
                  .filter((stat) =>
                    [
                      "hp",
                      "atk",
                      "def",
                      "spd",
                      "crit_rate",
                      "crit_dmg",
                      "break",
                      "energy",
                      "effect_hit",
                      "effect_res",
                      "heal",
                      characterGameData.element.toLocaleLowerCase()
                    ].includes(stat)
                  )
                  .map((stat, index) => {
                    return (
                      <div
                        key={stat}
                        className={`flex flex-row justify-between p-0.5 ${
                          index % 2 === 0 ? "bg-black/10" : ""
                        }`}
                      >
                        <div className="flex flex-row">
                          <img
                            src={`/icons/starrail/${stat}.png`}
                            alt={stat}
                            className="h-5 w-5"
                          />
                          <p className="text-md drop-shadow-xl">
                            {getStatDisplayText(stat)}
                          </p>
                        </div>
                        <p className="text-md drop-shadow-xl">
                          {["hp", "atk", "def", "spd"].includes(stat)
                            ? Math.floor(characterStatVals[stat])
                            : (
                                Math.floor(characterStatVals[stat] * 1000) / 10
                              ).toFixed(1)}
                          {["hp", "atk", "def", "spd"].includes(stat)
                            ? null
                            : "%"}
                        </p>
                      </div>
                    );
                  })}
              </div>
              <div className="flex flex-col rounded-sm bg-neutral-900/50 p-5 pt-3">
                {/* <p className="mb-1 font-din-alternate text-xl font-bold drop-shadow-xl">
                  Traces
                </p> */}
                <CharacterTraces {...{ characterUserData, gameData }} />
              </div>
            </div>
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
