import { RelicStatValues } from "../data/relic";
import { CharacterStats, Modifier } from "../types/character";
import { GameData } from "../types/app";
import { RelicUserData, RelicSubstat } from "../types/relic";

export const RelicStatMap = {
  HP_: "hp",
  ATK_: "atk",
  DEF_: "def",
  "CRIT Rate_": "crit_rate",
  "CRIT DMG_": "crit_dmg",
  HP: "hp",
  ATK: "atk",
  DEF: "def",
  SPD: "spd",
  "Fire DMG Boost_": "fire",
  "Ice DMG Boost_": "ice",
  "Wind DMG Boost_": "wind",
  "Lightning DMG Boost_": "lightning",
  "Physical DMG Boost_": "physical",
  "Quantum DMG Boost_": "quantum",
  "Imaginary DMG Boost_": "imaginary",
  "Outgoing Healing Boost_": "heal",
  "Break Effect_": "break",
  "Energy Regeneration Rate_": "energy",
  "Effect Hit Rate_": "effect_hit",
  "Effect RES_": "effect_res"
};

/**
 * Get the modifiers from a relic.
 * @param relics The user data of the relics.
 * @param gameData The game data.
 * @returns The modifiers of the relics.
 */
export const getModifiersFromRelics = (
  relics: RelicUserData[],
  gameData: GameData
) => {
  const res: Modifier[] = [];

  const characterRelicSetCount: {
    [setKey: string]: number;
  } = {};
  const relicSetKeys = relics.map((relic) => relic.set);
  for (const setKey of relicSetKeys) {
    if (characterRelicSetCount[setKey]) {
      characterRelicSetCount[setKey] += 1;
    } else {
      characterRelicSetCount[setKey] = 1;
    }
  }

  for (const setKey in characterRelicSetCount) {
    const setCount = characterRelicSetCount[setKey];
    let setBonus = Math.floor(setCount / 2);
    while (setBonus > 0) {
      const modifiersArray =
        gameData.relic_sets[setKey]?.modifiers?.[setBonus - 1];
      if (modifiersArray) {
        res.push(...modifiersArray);
      }
      setBonus -= 1;
    }
  }

  return res;
};

/**
 * Add the main stat of a relic to the character stats.
 * @param characterStatVals The character stats.
 * @param characterBaseStatVals The character base stats.
 * @param relic The user data of the relic.
 */
export const addRelicMainStatToCharacterStats = (
  characterStatVals: CharacterStats,
  characterBaseStatVals: CharacterStats,
  relic: RelicUserData
) => {
  let key = relic.mainstat;
  const mainStatDict = RelicStatValues.main[`${relic.rarity}`][relic.slot][key];

  switch (relic.slot) {
    case "Head":
    case "Hands":
      characterStatVals[RelicStatMap[key]] +=
        mainStatDict["base"] + mainStatDict["step"] * relic.level;
      break;
    default:
      if (key !== "SPD") key += "_";
      switch (key) {
        case "CRIT Rate_":
        case "CRIT DMG_":
        case "Fire DMG Boost_":
        case "Ice DMG Boost_":
        case "Wind DMG Boost_":
        case "Lightning DMG Boost_":
        case "Physical DMG Boost_":
        case "Quantum DMG Boost_":
        case "Imaginary DMG Boost_":
        case "Outgoing Healing Boost_":
        case "Energy Regeneration Rate_":
        case "Break Effect_":
        case "Effect Hit Rate_":
        case "SPD":
          characterStatVals[RelicStatMap[key]] +=
            mainStatDict["base"] + mainStatDict["step"] * relic.level;
          break;
        case "HP_":
        case "ATK_":
        case "DEF_":
          characterStatVals[RelicStatMap[key]] +=
            characterBaseStatVals[RelicStatMap[key]] *
            (mainStatDict["base"] + mainStatDict["step"] * relic.level);
          break;
        default:
          console.error("Unhandled relic main stat", key);
          break;
      }
      break;
  }
};

/**
 * Add the substats of a relic to the character stats.
 * @param characterStatVals The character stats.
 * @param characterBaseStatVals The character base stats.
 * @param rarity The rarity of the relic.
 * @param substat The substat of the relic.
 */
export const addRelicSubstatsToCharacterStats = (
  characterStatVals: CharacterStats,
  characterBaseStatVals: CharacterStats,
  rarity: number,
  substat: RelicSubstat
) => {
  switch (substat.key) {
    case "HP_":
    case "ATK_":
    case "DEF_":
      characterStatVals[RelicStatMap[substat.key]] +=
        characterBaseStatVals[RelicStatMap[substat.key]] *
        computeRelicSubstatValue(
          RelicStatValues.sub[`${rarity}`][substat.key],
          substat.value / 100
        ) *
        RelicStatValues.sub[`${rarity}`][substat.key];
      break;
    case "Effect Hit Rate_":
    case "Break Effect_":
    case "Effect RES_":
    case "CRIT Rate_":
    case "CRIT DMG_":
      characterStatVals[RelicStatMap[substat.key]] +=
        computeRelicSubstatValue(
          RelicStatValues.sub[`${rarity}`][substat.key],
          substat.value / 100
        ) * RelicStatValues.sub[`${rarity}`][substat.key];
      break;
    case "HP":
    case "ATK":
    case "DEF":
    case "SPD":
      characterStatVals[RelicStatMap[substat.key]] +=
        computeRelicSubstatValue(
          RelicStatValues.sub[`${rarity}`][substat.key],
          substat.value
        ) * RelicStatValues.sub[`${rarity}`][substat.key];
      break;
    default:
      console.error("Unhandled relic substat", substat.key);
      break;
  }
};

/**
 * Converts a float to a percentage string to be displayed in the UI.
 * @param value The float value to be converted.
 * @returns The percentage string.
 */
export const floatToPercentageString = (value: number) => {
  const thousands = Math.floor(value * 10000);
  let percentage = Math.floor(thousands / 10) / 10;
  if (thousands % 10 === 9) {
    percentage = Math.ceil(thousands / 10) / 10;
  }

  return `${percentage.toFixed(1)}%`;
};

/**
 * Compute the roll value of a relic substat.
 * @param base The base increment of the relic substat.
 * @param target The display value of the relic substat.
 * @returns The roll value of the relic substat.
 */
export const computeRelicSubstatValue = (
  base: number,
  target: number
): number => {
  const increments = [1, 0.9, 0.8];
  let diff: number = Infinity;
  let result: number[] = [];

  const closestSum = (
    arr: number[],
    tgt: number,
    idx: number = 0,
    sum: number = 0,
    combination: number[] = []
  ): void => {
    if (Math.abs(tgt - sum) < diff) {
      diff = Math.abs(tgt - sum);
      result = combination.slice();
    }
    if (idx === arr.length || sum > target) {
      return;
    }
    combination.push(arr[idx]);
    closestSum(arr, tgt, idx, sum + arr[idx] * base, combination);
    combination.pop();
    closestSum(arr, tgt, idx + 1, sum, combination);
  };

  closestSum(increments, target);
  return result.reduce((acc, curr) => acc + curr, 0);
};
