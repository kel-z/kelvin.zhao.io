import {
  CharacterGameData,
  CharacterStats,
  CharacterUserData
} from "lib/starrail/types/character";
import {
  getCharacterBaseStats,
  getTotalCharacterStats
} from "lib/starrail/utils/character";
import { FastAverageColor } from "fast-average-color";
import { useContext, useState } from "react";
import CharacterTraces from "../CharacterTraces";
import { LightConeUserData } from "lib/starrail/types/lightcone";
import {
  getLightconeAbilityDesc,
  getLightconeStats
} from "lib/starrail/utils/lightcone";
import { RelicStatValues } from "lib/starrail/data/relic";
import { floatToPercentageString } from "lib/starrail/utils/relic";
import GameDataContext from "contexts/starrail/GameDataContext";
import Link from "next/link";

interface CharacterDetailsProps {
  characterKey: string;
}
export default function CharacterDetails({
  characterKey
}: CharacterDetailsProps) {
  const { gameData, userData } = useContext(GameDataContext);
  const [colour, setColour] = useState<string>("#000000");
  const characterUserData = userData.characters.find(
    (character: CharacterUserData) => character.key === characterKey
  );
  if (!characterUserData) return null;
  const characterGameData: CharacterGameData =
    gameData.characters[characterUserData.key];
  const characterStatVals: CharacterStats = getTotalCharacterStats(
    characterUserData,
    userData,
    gameData
  );
  const fac = new FastAverageColor();
  fac
    .getColorAsync(characterGameData.splash)
    .then((colour) => setColour(colour.hex));

  // equipped lightcone
  const characterLightCone: LightConeUserData | null =
    userData.light_cones.find(
      (lightCone) => lightCone.location === characterUserData.key
    );
  const lightconeStatVals = characterLightCone
    ? getLightconeStats(characterLightCone, gameData)
    : null;

  // equipped relics
  const characterRelics = userData.relics
    .filter((relic) => relic.location === characterUserData.key)
    .map((relic) => {
      const pieceData = gameData.relic_sets[relic.set]["pieces"][relic.slot];
      const mainStatData =
        RelicStatValues.main[`${relic.rarity}`][relic.slot][relic.mainstat];
      let mainStatFloat: number =
        mainStatData["base"] + relic.level * mainStatData["step"];
      let mainStatVal: string;
      if (relic.mainstat !== "SPD" && !["Head", "Hands"].includes(relic.slot)) {
        mainStatVal = floatToPercentageString(mainStatFloat);
      } else {
        mainStatVal = `${Math.floor(mainStatFloat)}`;
      }

      return {
        ...relic,
        ...pieceData,
        mainStatData,
        mainStatVal
      };
    })
    .sort((a, b) => {
      const slotOrder = [
        "Head",
        "Hands",
        "Body",
        "Feet",
        "Planar Sphere",
        "Link Rope"
      ];
      return slotOrder.indexOf(a.slot) - slotOrder.indexOf(b.slot);
    });

  const characterRelicsSetCount: {
    [key: string]: {
      isMainset: boolean;
      count: number;
    };
  } = {};
  characterRelics.forEach((relic) => {
    if (!characterRelicsSetCount[relic.set]) {
      characterRelicsSetCount[relic.set] = {
        isMainset: !["Planar Sphere", "Link Rope"].includes(relic.slot),
        count: 0
      };
    }
    characterRelicsSetCount[relic.set].count++;
  });
  const setBonuses: {
    [key: string]: {
      count: number;
      bonus: string[];
      isMainset: boolean;
    };
  } = {};
  for (const setKey in characterRelicsSetCount) {
    const setCount = characterRelicsSetCount[setKey].count;
    let setBonus = Math.floor(setCount / 2);
    if (setBonus === 0) continue;
    setBonuses[setKey] = {
      count: setCount,
      bonus: [],
      isMainset: characterRelicsSetCount[setKey].isMainset
    };
    for (let i = 0; i < setBonus; i++) {
      setBonuses[setKey].bonus.push(gameData.relic_sets[setKey].desc[i]);
    }
  }

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

  const mapMainstatToIcon = (mainstat: string) => {
    mainstat = mainstat.trim().replace("_", "");
    switch (mainstat) {
      case "HP":
      case "ATK":
      case "DEF":
      case "SPD":
      case "CRIT Rate":
      case "CRIT DMG":
        return `/icons/starrail/${mainstat
          .toLowerCase()
          .replace(" ", "_")}.png`;
      case "Effect Hit Rate":
        return "/icons/starrail/effect_hit.png";
      case "Effect RES":
        return "/icons/starrail/effect_res.png";
      case "Break Effect":
        return "/icons/starrail/break.png";
      case "Energy Regeneration Rate":
        return "/icons/starrail/energy.png";
      case "Outgoing Healing Boost":
        return "/icons/starrail/heal.png";
      default:
        return "/icons/starrail/hp.png";
    }
  };

  console.log(
    characterStatVals,
    getCharacterBaseStats(characterUserData, characterLightCone, gameData)
  );

  return (
    <div className="fixed inset-0 z-20 flex">
      <div className="relative mx-auto my-auto flex h-full max-h-screen min-h-[24rem] w-full max-w-screen-xl flex-col bg-neutral-900 shadow-lg lg:h-fit lg:rounded-lg">
        <div id="header" className="flex w-full flex-row">
          <p className="mx-4 my-3 text-base text-neutral-500">
            {characterUserData.key.startsWith("Trailblazer")
              ? "Trailblazer"
              : characterUserData.key}
          </p>

          <Link href={`/hsr-inventory/characters`} shallow>
            <button className="absolute right-5 top-3 text-lg">✖</button>
          </Link>
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom right, ${colour}50, black)`
          }}
          className="relative z-20 flex h-full w-full flex-row justify-end gap-2 overflow-hidden font-din-alternate"
        >
          <div className="absolute -left-14 z-10 mx-auto hidden h-full w-full -translate-x-1/4 translate-y-8 transform drop-shadow-2xl lg:block">
            <img
              src={characterGameData.splash}
              className="h-full w-full scale-125 object-contain"
              alt={`${characterUserData.key} splash`}
            />
          </div>
          <img
            src={characterGameData.splash}
            className="absolute top-1/2 -z-10 h-auto w-1/3 -translate-x-3/4 -translate-y-1/2 scale-[600%] transform opacity-50 blur-md saturate-200 filter"
            alt={`${characterUserData.key} bg effect`}
          />
          <div className="z-20 hidden h-fit w-fit flex-col gap-1 rounded-lg bg-neutral-900/50 p-1 backdrop-blur-xl lg:my-7 lg:ml-96 lg:flex">
            {characterGameData.eidolons.map((eidolon, index) => {
              return (
                <div key={index} className="">
                  <img
                    src={eidolon.icon}
                    alt={`${eidolon.name} icon`}
                    className={`h-10 w-10 rounded-full ${
                      index < characterUserData.eidolon
                        ? "border-2 bg-black/50"
                        : "opacity-50"
                    }`}
                  />
                </div>
              );
            })}
          </div>
          <div className="z-20 flex w-full flex-1 flex-col gap-2 overflow-y-auto overflow-x-hidden bg-neutral-900/50 p-5 backdrop-blur-xl lg:my-7 lg:mr-7 lg:w-[56rem] lg:rounded-lg">
            <div className="flex flex-wrap gap-1">
              <p className="text-xl font-bold drop-shadow-xl">
                {characterUserData.key.startsWith("Trailblazer")
                  ? "Trailblazer"
                  : characterUserData.key}
              </p>
              <div className="my-auto rounded-sm bg-neutral-900/50 px-1 text-sm drop-shadow-xl">
                Lv. {characterUserData.level} /{" "}
                {20 + characterUserData.ascension * 10}
              </div>
              <div className="my-auto rounded-sm bg-neutral-900/50 px-1 text-sm drop-shadow-xl">
                {characterGameData.path}
              </div>
              <div className="my-auto rounded-sm bg-neutral-900/50 px-1 text-sm drop-shadow-xl">
                {characterGameData.element}
              </div>
            </div>
            <div className="relative flex flex-col rounded-sm bg-neutral-900/50 p-5 lg:hidden">
              <img
                src={characterGameData.splash}
                alt={`${characterUserData.key} splash`}
                className="rounded-t-3xl"
                style={{
                  backgroundColor: `${colour}10`
                }}
              />
              <div className="flex h-fit w-full justify-center gap-1 rounded-b-3xl bg-neutral-900/50 p-2 backdrop-blur-sm">
                {characterGameData.eidolons.map((eidolon, index) => {
                  return (
                    <div key={index} className="">
                      <img
                        src={eidolon.icon}
                        alt={`${eidolon.name} icon`}
                        className={`h-10 w-10 rounded-full object-contain ${
                          index < characterUserData.eidolon
                            ? "border-2 bg-black/50"
                            : "opacity-50"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            {characterLightCone && lightconeStatVals && (
              <div className="rounded-sm bg-neutral-900/50 p-5 pt-3">
                <div className="flex w-fit flex-row items-center gap-3">
                  <div className="w-fit">
                    <div className="text-lg font-bold">
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
                          <div className="absolute bottom-0 w-full bg-neutral-900/50 text-center text-sm">
                            {characterLightCone.level} /{" "}
                            {20 + characterLightCone.ascension * 10}
                          </div>
                        </div>
                        <div className="flex flex-col justify-evenly rounded-r-sm bg-neutral-900/50 px-2 text-sm">
                          <div className="flex">
                            <img
                              src="/icons/starrail/hp.png"
                              alt="hp icon"
                              className="w-5"
                            />
                            {lightconeStatVals.hp}
                          </div>
                          <div className="flex">
                            <img
                              src="/icons/starrail/atk.png"
                              alt="atk icon"
                              className="w-5"
                            />
                            {lightconeStatVals.atk}
                          </div>
                          <div className="flex">
                            <img
                              src="/icons/starrail/def.png"
                              alt="def icon"
                              className="w-5"
                            />
                            {lightconeStatVals.def}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 text-sm">
                        <div className="text-base font-bold text-amber-300 opacity-75 saturate-50">
                          Superimposition {characterLightCone.superimposition}
                        </div>
                        {getLightconeAbilityDesc(characterLightCone, gameData)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {characterRelics.length > 0 && (
              <div className="flex flex-col gap-2 rounded-sm bg-neutral-900/50 p-5">
                <div className="grid w-full grid-cols-3 grid-rows-2 gap-2 sm:grid-cols-6 sm:grid-rows-none">
                  {[
                    "Head",
                    "Hands",
                    "Body",
                    "Feet",
                    "Planar Sphere",
                    "Link Rope"
                  ].map((slot) => {
                    const relic = characterRelics.find(
                      (relic) => relic.slot === slot
                    );
                    if (!relic) {
                      return (
                        <div
                          key={slot}
                          className="rounded-sm bg-neutral-900/25"
                        />
                      );
                    }
                    return (
                      <div key={relic.slot} className="flex w-full flex-col">
                        <div className="w-full rounded-t-sm bg-neutral-900/50 text-center text-sm">
                          +{relic.level}
                        </div>
                        <div
                          className={`relative h-fit rounded-sm border bg-gradient-to-tl ${
                            {
                              1: "border-gray-400 from-gray-400 to-gray-900",
                              2: "border-green-400 from-green-400 to-green-900",
                              3: "border-blue-400 from-blue-400 to-blue-900",
                              4: "border-purple-500 from-purple-400 to-purple-900",
                              5: "border-yellow-500 from-yellow-200 to-amber-800"
                            }[relic.rarity]
                          }`}
                        >
                          <img
                            src={`${relic.icon}`}
                            alt={`${relic.name} icon`}
                            className={`mx-auto h-16`}
                          />
                          <div className="absolute bottom-0 flex w-full bg-neutral-900/50">
                            <img
                              src={mapMainstatToIcon(relic.mainstat)}
                              alt={`${relic.mainstat} icon`}
                              className="absolute ml-1 w-5"
                            />
                            <p className="w-full text-center text-sm">
                              {relic.mainStatVal}
                            </p>
                          </div>
                        </div>
                        <div className="flex h-full flex-col bg-neutral-900/50 py-1">
                          {relic.substats.map((substat, index) => {
                            return (
                              <div
                                key={index}
                                className={`relative flex rounded-b-sm px-1 ${
                                  index % 2 === 0 ? "bg-black/10" : ""
                                }`}
                              >
                                <img
                                  src={mapMainstatToIcon(substat.key)}
                                  alt={`${substat} icon`}
                                  className="absolute w-5"
                                />
                                <p className="w-full text-center text-sm">
                                  {substat.value.toFixed(
                                    substat.key.endsWith("_") ? 1 : 0
                                  )}
                                  {substat.key.endsWith("_") && "%"}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {Object.keys(setBonuses).length > 0 && (
                  <div className="flex flex-col gap-3 rounded-sm bg-neutral-900/50 p-3 pt-2">
                    {Object.keys(setBonuses).map((setKey, index) => {
                      return (
                        <div key={index} className="text-sm">
                          <span className="text-base font-bold text-amber-300 opacity-75 saturate-50">
                            {setKey} ({setBonuses[setKey].count})
                          </span>
                          {setBonuses[setKey].bonus.map((bonus, index) => {
                            return (
                              <div key={index} className="">
                                {(index + 1) * 2} Pc: {bonus}
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
            <div className="grid gap-2 lg:grid-cols-2">
              <div className="flex flex-col rounded-sm bg-neutral-900/50 p-5">
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
                            className="h-6 w-6"
                          />
                          <p className="text-base drop-shadow-xl">
                            {getStatDisplayText(stat)}
                          </p>
                        </div>
                        <p className="text-base drop-shadow-xl">
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
              <div className="flex flex-col rounded-sm bg-neutral-900/50">
                <CharacterTraces {...{ characterUserData, gameData }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link href={`/hsr-inventory/characters`} shallow>
        <div className="fixed inset-0 -z-10 cursor-default bg-black/75 opacity-75" />
      </Link>
    </div>
  );
}
