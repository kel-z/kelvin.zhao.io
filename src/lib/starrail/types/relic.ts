import { Modifier } from "./character";

export type RelicSubstat = {
  key: RelicSubstatKey;
  value: number;
};

export type RelicSubstatKey =
  | "HP"
  | "HP_"
  | "ATK"
  | "ATK_"
  | "DEF"
  | "DEF_"
  | "CRIT Rate_"
  | "CRIT DMG_"
  | "Effect Hit Rate_"
  | "Effect RES_"
  | "Break Effect_"
  | "SPD";

export type RelicUserData = {
  set: string;
  slot: string;
  rarity: number;
  level: number;
  mainstat: string;
  substats: RelicSubstat[];
  location: string;
  lock: boolean;
  _id: string;
};

export type RelicSetGameData = {
  pieces: {
    [key: string]: {
      name: string;
      icon: string;
    };
  };
  desc: string[];
  modifiers: Modifier[][];
};
