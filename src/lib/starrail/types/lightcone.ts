import { Modifier } from "./character";

export type LightConeUserData = {
  key: string;
  level: number;
  ascension: number;
  superimposition: number;
  location: string;
  lock: boolean;
};

export type LightConeGameData = {
  rarity: number;
  path: string;
  desc: string;
  ascension: {
    hp: {
      base: number;
      step: number;
    };
    atk: {
      base: number;
      step: number;
    };
    def: {
      base: number;
      step: number;
    };
  }[];
  ability: {
    name: string;
    desc: string;
    params: string[][];
    modifiers: Modifier[][];
  };
  icon: string;
  mini_icon: string;
  image: string;
};
