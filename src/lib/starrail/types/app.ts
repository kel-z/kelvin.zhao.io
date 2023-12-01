import { CharacterGameData, CharacterUserData } from "./character";
import { LightConeGameData, LightConeUserData } from "./lightcone";
import { RelicSetGameData, RelicUserData } from "./relic";

export type StarRailTab = "none" | "light_cones" | "relics" | "characters";

export type UserData = {
  version?: number;
  source?: string;
  light_cones: LightConeUserData[];
  relics: RelicUserData[];
  characters: CharacterUserData[];
};

export type GameData = {
  light_cones: {
    [key: string]: LightConeGameData;
  };
  relic_sets: {
    [key: string]: RelicSetGameData;
  };
  characters: {
    [key: string]: CharacterGameData;
  };
};
