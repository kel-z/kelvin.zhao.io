export type Modifier = {
  type: string;
  value: number;
};

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
    basic: {
      name: string;
      max_level: number;
      desc: string;
      params: string[][];
    };
    skill: {
      name: string;
      max_level: number;
      desc: string;
      params: string[][];
    };
    ult: {
      name: string;
      max_level: number;
      desc: string;
      params: string[][];
    };
    talent: {
      name: string;
      max_level: number;
      desc: string;
      params: string[][];
    };
  };
  traces: {
    technique: {
      name: string;
      desc: string;
    };
    ability_1: {
      name: string;
      desc: string;
    };
    ability_2: {
      name: string;
      desc: string;
    };
    ability_3: {
      name: string;
      desc: string;
    };
    stat_1: {
      name: string;
      desc: string;
      modifiers: {
        type: string;
        value: number;
      }[];
    };
    stat_2: {
      name: string;
      desc: string;
      modifiers: {
        type: string;
        value: number;
      }[];
    };
    stat_3: {
      name: string;
      desc: string;
      modifiers: {
        type: string;
        value: number;
      }[];
    };
    stat_4: {
      name: string;
      desc: string;
      modifiers: {
        type: string;
        value: number;
      }[];
    };
    stat_5: {
      name: string;
      desc: string;
      modifiers: {
        type: string;
        value: number;
      }[];
    };
    stat_6: {
      name: string;
      desc: string;
      modifiers: {
        type: string;
        value: number;
      }[];
    };
    stat_7: {
      name: string;
      desc: string;
      modifiers: {
        type: string;
        value: number;
      }[];
    };
    stat_8: {
      name: string;
      desc: string;
      modifiers: {
        type: string;
        value: number;
      }[];
    };
    stat_9: {
      name: string;
      desc: string;
      modifiers: {
        type: string;
        value: number;
      }[];
    };
    stat_10: {
      name: string;
      desc: string;
      modifiers: {
        type: string;
        value: number;
      }[];
    };
  };
  icon: string;
  splash: string;
  mini_icon: string;
};
