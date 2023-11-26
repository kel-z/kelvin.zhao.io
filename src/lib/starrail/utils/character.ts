import {
  CharacterStats,
  CharacterUserData,
  Modifier,
} from "../types/character";
import { GameData } from "../types/app";
import { LightConeUserData } from "../types/lightcone";
import { RelicUserData } from "../types/relic";
import { getModifiersFromLightcone } from "./lightcone";
import {
  addRelicMainStatToCharacterStats,
  addRelicSubstatsToCharacterStats,
  getModifiersFromRelics,
} from "./relic";

/**
 * Get the modifiers from the traces of a character.
 * @param key The key of the character.
 * @param traces The traces of the character.
 * @param gameData The game data.
 * @returns The modifiers from the traces of the character.
 */
export const getModifiersFromTraces = (
  key: string,
  traces: CharacterUserData["traces"],
  gameData: GameData
) => {
  const res = [];

  const characterGameData = gameData.characters[key];
  const activatedTraces = Object.keys(traces).filter((key) => traces[key]);
  for (const trace of activatedTraces) {
    const traceModifiers = characterGameData.traces[trace].modifiers;
    if (!traceModifiers) continue;
    res.push(...traceModifiers);
  }

  return res;
};

/**
 * Get the base stats of a character.
 * @param characterUserData The user data of the character.
 * @param characterLightCone The user data of the light cone equipped by the character.
 * @param gameData The game data.
 * @returns The base stats of the character.
 */
export const getCharacterBaseStats = (
  characterUserData: CharacterUserData,
  characterLightCone: LightConeUserData | null,
  gameData: GameData
): CharacterStats => {
  const res = {
    hp: 0,
    atk: 0,
    def: 0,
    spd: 0,
    taunt: 0,
    crit_rate: 0,
    crit_dmg: 0,
    fire: 0,
    ice: 0,
    wind: 0,
    lightning: 0,
    physical: 0,
    quantum: 0,
    imaginary: 0,
    heal: 0,
    break: 0,
    energy: 1,
    effect_hit: 0,
    effect_res: 0,
  };

  const characterGameData = gameData.characters[characterUserData.key];
  for (const stat in characterGameData.ascension[characterUserData.ascension]) {
    let val =
      characterGameData.ascension[characterUserData.ascension][stat]["base"] +
      characterGameData.ascension[characterUserData.ascension][stat]["step"] *
        (characterUserData.level - 1);
    res[stat] = val;
  }

  // add base stats from light cone
  if (characterLightCone) {
    const lightConeStatDict =
      gameData.light_cones[characterLightCone.key].ascension[
        characterLightCone.ascension
      ];
    for (const stat in lightConeStatDict) {
      res[stat] +=
        lightConeStatDict[stat]["base"] +
        lightConeStatDict[stat]["step"] * (characterLightCone.level - 1);
    }
  }

  return res;
};

/**
 * Get the modifiers of a character.
 * @param characterUserData The user data of the character.
 * @param characterLightCone The user data of the light cone equipped by the character.
 * @param characterRelics The user data of the relics equipped by the character.
 * @param gameData The game data.
 * @returns The modifiers of the character.
 */
export const getAllCharacterStatModifiers = (
  characterUserData: CharacterUserData,
  characterLightCone: LightConeUserData | null,
  characterRelics: RelicUserData[],
  gameData: GameData
) => {
  const res = [];

  // add modifiers from traces
  res.push(
    ...getModifiersFromTraces(
      characterUserData.key,
      characterUserData.traces,
      gameData
    )
  );

  // add modifiers from light cone
  if (characterLightCone) {
    res.push(
      ...getModifiersFromLightcone(
        characterLightCone.key,
        characterLightCone.superimposition,
        gameData
      )
    );
  }

  // add modifiers from relic sets
  if (characterRelics.length > 0) {
    res.push(...getModifiersFromRelics(characterRelics, gameData));
  }

  return res;
};

/**
 * Add the modifiers to the stats of a character.
 * @param characterStatVals The stats of the character.
 * @param modifiers The modifiers to be added.
 * @param characterBaseStatVals The base stats of the character.
 */
export const addModifiersToCharacterStats = (
  characterStatVals: CharacterStats,
  modifiers: Modifier[],
  characterBaseStatVals: CharacterStats
) => {
  for (const modifierDict of modifiers) {
    switch (modifierDict.type) {
      case "def_":
      case "hp_":
      case "spd_":
      case "atk_":
        const key = modifierDict.type.slice(0, -1);
        characterStatVals[key] +=
          characterBaseStatVals[key] * modifierDict.value;
        break;
      case "spd":
      case "heal":
      case "effect_hit":
      case "effect_res":
      case "crit_rate":
      case "crit_dmg":
      case "quantum":
      case "imaginary":
      case "fire":
      case "lightning":
      case "ice":
      case "wind":
      case "physical":
      case "break":
      case "energy":
        characterStatVals[modifierDict.type] += modifierDict.value;
        break;
      case "all_dmg":
        characterStatVals.fire += modifierDict.value;
        characterStatVals.ice += modifierDict.value;
        characterStatVals.wind += modifierDict.value;
        characterStatVals.lightning += modifierDict.value;
        characterStatVals.physical += modifierDict.value;
        characterStatVals.quantum += modifierDict.value;
        characterStatVals.imaginary += modifierDict.value;
        break;
      default:
        console.error("Unhandled modifier", modifierDict.type);
        break;
    }
  }
};

/**
 * Add the stats from the relics to the stats of a character.
 * @param characterStatVals The stats of the character.
 * @param characterBaseStatVals The base stats of the character.
 * @param characterRelics The user data of the relics equipped by the character.
 */
export const addRelicStatsToCharacterStats = (
  characterStatVals: CharacterStats,
  characterBaseStatVals: CharacterStats,
  characterRelics: RelicUserData[]
) => {
  for (const relic of characterRelics) {
    addRelicMainStatToCharacterStats(
      characterStatVals,
      characterBaseStatVals,
      relic
    );
    for (const substat of relic.substats) {
      addRelicSubstatsToCharacterStats(
        characterStatVals,
        characterBaseStatVals,
        relic.rarity,
        substat
      );
    }
  }
};
