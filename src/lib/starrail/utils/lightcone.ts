import { GameData } from "../types/app";
import { LightConeUserData } from "../types/lightcone";
import { formatDesc } from "./common";

/**
 * Get the modifiers from a light cone.
 * @param key The key of the light cone.
 * @param superimposition The superimposition of the light cone.
 * @param gameData The game data.
 * @returns The modifiers of the light cone.
 */
export const getModifiersFromLightcone = (
  key: string,
  superimposition: number,
  gameData: GameData
) => {
  const lightConeModifiers = gameData.light_cones[key].ability.modifiers;
  if (!lightConeModifiers) {
    return [];
  }
  return lightConeModifiers[superimposition - 1];
};

/**
 * Get the formatted description of a light cone's ability.
 * @param lightcone The light cone.
 * @param gameData The game data.
 * @returns The formatted description.
 */
export const getLightconeAbilityDesc = (
  lightcone: LightConeUserData,
  gameData: GameData
) => {
  const lightconeGameData = gameData.light_cones[lightcone.key];
  const desc = lightconeGameData.ability.desc;
  const params =
    lightconeGameData.ability.params[lightcone.superimposition - 1];
  return formatDesc(desc, params);
};

/**
 * Get the stats of a light cone.
 * @param lightcone The light cone.
 * @param gameData The game data.
 * @returns The stats of the light cone.
 */
export const getLightconeStats = (
  lightcone: LightConeUserData,
  gameData: GameData
): {
  hp: number;
  atk: number;
  def: number;
} => {
  const res = {
    hp: 0,
    atk: 0,
    def: 0
  };
  const lightconeStatGameData =
    gameData.light_cones[lightcone.key].ascension[lightcone.ascension];
  for (const stat in lightconeStatGameData) {
    res[stat] = Math.floor(
      lightconeStatGameData[stat]["base"] +
        lightconeStatGameData[stat]["step"] * (lightcone.level - 1)
    );
  }
  return res;
};
