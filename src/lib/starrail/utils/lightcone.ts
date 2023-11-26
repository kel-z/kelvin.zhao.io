import { GameData } from "../types/app";

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
