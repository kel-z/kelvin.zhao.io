export type CharacterStats = {
  hp: number;
  atk: number;
  def: number;
  spd: number;
  taunt: number;
  crit_rate: number;
  crit_dmg: number;
  fire: number;
  ice: number;
  wind: number;
  lightning: number;
  physical: number;
  quantum: number;
  imaginary: number;
  heal: number;
  break: number;
  energy: number;
  effect_hit: number;
  effect_res: number;
};

export type CharacterUserData = {
  key: string;
  level: number;
  ascension: number;
  eidolon: number;
  skills: {
    basic: number;
    skill: number;
    ult: number;
    talent: number;
  };
  traces: {
    ability_1: boolean;
    ability_2: boolean;
    ability_3: boolean;
    stat_1: boolean;
    stat_2: boolean;
    stat_3: boolean;
    stat_4: boolean;
    stat_5: boolean;
    stat_6: boolean;
    stat_7: boolean;
    stat_8: boolean;
    stat_9: boolean;
    stat_10: boolean;
  };
};

export type CharacterGameData = {
  rarity: number;
  path: string;
  element: string;
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
    spd: {
      base: number;
      step: number;
    };
    taunt: {
      base: number;
      step: number;
    };
    crit_rate: {
      base: number;
      step: number;
    };
    crit_dmg: {
      base: number;
      step: number;
    };
  }[];
  eidolons: {
    name: string;
    desc: string;
    level_up_skills?: {
      ult?: number;
      basic?: number;
      skill?: number;
      talent?: number;
    };
  }[];
  skills: {
    basic: Skill;
    skill: Skill;
    ult: Skill;
    talent: Skill;
  };
  traces: {
    technique: Trace;
    ability_1: Trace;
    ability_2: Trace;
    ability_3: Trace;
    stat_1: Trace;
    stat_2: Trace;
    stat_3: Trace;
    stat_4: Trace;
    stat_5: Trace;
    stat_6: Trace;
    stat_7: Trace;
    stat_8: Trace;
    stat_9: Trace;
    stat_10: Trace;
  };
  icon: string;
  splash: string;
  mini_icon: string;
};

export type Skill = {
  name: string;
  max_level: number;
  desc: string;
  params: string[][];
  icon: string;
};

export type Trace = {
  name: string;
  desc: string;
  modifiers: Modifier[];
  icon: string;
};

export type Modifier = {
  type: string;
  value: number;
};
