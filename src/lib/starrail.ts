export type StarRailTab = "light_cones" | "relics" | "characters";

export type UserData = {
  version?: number;
  source?: string;
  light_cones: LightConeData[];
  relics: RelicData[];
  characters: CharacterData[];
};

export type LightConeData = {
  key: string;
  level: number;
  ascension: number;
  superimposition: number;
  location: string;
  lock: boolean;
};

export type RelicData = {
  set: string;
  slot: string;
  rarity: number;
  level: number;
  mainstat: string;
  substats: Substat[];
  location: string;
  lock: boolean;
  _id: string;
};

export type Substat = {
  key: SubstatKey;
  value: number;
};

export type SubstatKey =
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

export type CharacterData = {
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

export type StarRailData = {
  light_cones: LightConeData[];
  relics: RelicData[];
  characters: CharacterData[];
};

export type GameData = {
  light_cones: {
    [key: string]: LightCone;
  };
  relic_sets: {
    [key: string]: RelicSet;
  };
  characters: {
    [key: string]: Character;
  };
};

export type LightCone = {
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
    modifiers: {
      type: string;
      value: number;
    }[][];
  };
  icon: string;
};

export type RelicSet = {
  pieces: {
    [key: string]: {
      name: string;
      icon: string;
    };
  };
  desc: string[];
  modifiers: {
    type: string;
    value: number;
  }[][];
};

export type Character = {
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
  mini_icon: string;
};

export const RelicStatValues = {
  main: {
    "2": {
      Head: {
        HP: {
          base: 45.158399999840185,
          step: 15.805440000956878,
        },
      },
      Hands: {
        ATK: {
          base: 22.579200000036508,
          step: 7.902720001293346,
        },
      },
      Body: {
        HP: {
          base: 0.027648000279441,
          step: 0.0096770003438,
        },
        ATK: {
          base: 0.027648000279441,
          step: 0.0096770003438,
        },
        DEF: {
          base: 0.034560000523925,
          step: 0.012096000602469,
        },
        "CRIT Rate": {
          base: 0.02073600073345,
          step: 0.00725800008513,
        },
        "CRIT DMG": {
          base: 0.041472000768408,
          step: 0.014515000162646,
        },
        "Outgoing Healing Boost": {
          base: 0.022118000080809,
          step: 0.007741000270471,
        },
        "Effect Hit Rate": {
          base: 0.027648000279441,
          step: 0.0096770003438,
        },
      },
      Feet: {
        HP: {
          base: 0.027648000279441,
          step: 0.0096770003438,
        },
        ATK: {
          base: 0.027648000279441,
          step: 0.0096770003438,
        },
        DEF: {
          base: 0.034560000523925,
          step: 0.012096000602469,
        },
        SPD: {
          base: 1.61280000093393,
          step: 1,
        },
      },
      "Planar Sphere": {
        HP: {
          base: 0.027648000279441,
          step: 0.0096770003438,
        },
        ATK: {
          base: 0.027648000279441,
          step: 0.0096770003438,
        },
        DEF: {
          base: 0.034560000523925,
          step: 0.012096000602469,
        },
        "Physical DMG Boost": {
          base: 0.024883000878617,
          step: 0.008708999957889,
        },
        "Fire DMG Boost": {
          base: 0.024883000878617,
          step: 0.008708999957889,
        },
        "Ice DMG Boost": {
          base: 0.024883000878617,
          step: 0.008708999957889,
        },
        "Lightning DMG Boost": {
          base: 0.024883000878617,
          step: 0.008708999957889,
        },
        "Wind DMG Boost": {
          base: 0.024883000878617,
          step: 0.008708999957889,
        },
        "Quantum DMG Boost": {
          base: 0.024883000878617,
          step: 0.008708999957889,
        },
        "Imaginary DMG Boost": {
          base: 0.024883000878617,
          step: 0.008708999957889,
        },
      },
      "Link Rope": {
        "Break Effect": {
          base: 0.041472000768408,
          step: 0.014515000162646,
        },
        "Energy Regeneration Rate": {
          base: 0.012442000443116,
          step: 0.004355000331998,
        },
        HP: {
          base: 0.027648000279441,
          step: 0.0096770003438,
        },
        ATK: {
          base: 0.027648000279441,
          step: 0.0096770003438,
        },
        DEF: {
          base: 0.034560000523925,
          step: 0.012096000602469,
        },
      },
    },
    "3": {
      Head: {
        HP: {
          base: 67.73760000057518,
          step: 23.70816000062041,
        },
      },
      Hands: {
        ATK: {
          base: 33.868800000753254,
          step: 11.854080001125112,
        },
      },
      Body: {
        HP: {
          base: 0.041472000768408,
          step: 0.014515000162646,
        },
        ATK: {
          base: 0.041472000768408,
          step: 0.014515000162646,
        },
        DEF: {
          base: 0.051840000785887,
          step: 0.018143999855965,
        },
        "CRIT Rate": {
          base: 0.031104000052437,
          step: 0.010886001167819,
        },
        "CRIT DMG": {
          base: 0.062208000104874,
          step: 0.021773000946268,
        },
        "Outgoing Healing Boost": {
          base: 0.033178000478074,
          step: 0.011612000409514,
        },
        "Effect Hit Rate": {
          base: 0.041472000768408,
          step: 0.014515000162646,
        },
      },
      Feet: {
        HP: {
          base: 0.041472000768408,
          step: 0.014515000162646,
        },
        ATK: {
          base: 0.041472000768408,
          step: 0.014515000162646,
        },
        DEF: {
          base: 0.051840000785887,
          step: 0.018143999855965,
        },
        SPD: {
          base: 2.419199999887496,
          step: 1,
        },
      },
      "Planar Sphere": {
        HP: {
          base: 0.041472000768408,
          step: 0.014515000162646,
        },
        ATK: {
          base: 0.041472000768408,
          step: 0.014515000162646,
        },
        DEF: {
          base: 0.051840000785887,
          step: 0.018143999855965,
        },
        "Physical DMG Boost": {
          base: 0.037324999924749,
          step: 0.013064000289887,
        },
        "Fire DMG Boost": {
          base: 0.037324999924749,
          step: 0.013064000289887,
        },
        "Ice DMG Boost": {
          base: 0.037324999924749,
          step: 0.013064000289887,
        },
        "Lightning DMG Boost": {
          base: 0.037324999924749,
          step: 0.013064000289887,
        },
        "Wind DMG Boost": {
          base: 0.037324999924749,
          step: 0.013064000289887,
        },
        "Quantum DMG Boost": {
          base: 0.037324999924749,
          step: 0.013064000289887,
        },
        "Imaginary DMG Boost": {
          base: 0.037324999924749,
          step: 0.013064000289887,
        },
      },
      "Link Rope": {
        "Break Effect": {
          base: 0.062208000104874,
          step: 0.021773000946268,
        },
        "Energy Regeneration Rate": {
          base: 0.018662000307813,
          step: 0.006532000144944,
        },
        HP: {
          base: 0.041472000768408,
          step: 0.014515000162646,
        },
        ATK: {
          base: 0.041472000768408,
          step: 0.014515000162646,
        },
        DEF: {
          base: 0.051840000785887,
          step: 0.018143999855965,
        },
      },
    },
    "4": {
      Head: {
        HP: {
          base: 90.31680000037886,
          step: 31.610880001680925,
        },
      },
      Hands: {
        ATK: {
          base: 45.158399999840185,
          step: 15.805440000956878,
        },
      },
      Body: {
        HP: {
          base: 0.055296000558883,
          step: 0.019353999989107,
        },
        ATK: {
          base: 0.055296000558883,
          step: 0.019353999989107,
        },
        DEF: {
          base: 0.069119999650866,
          step: 0.024192000506446,
        },
        "CRIT Rate": {
          base: 0.041472000768408,
          step: 0.014515000162646,
        },
        "CRIT DMG": {
          base: 0.082944000838324,
          step: 0.0290299996268,
        },
        "Outgoing Healing Boost": {
          base: 0.044237000169232,
          step: 0.015483000548556,
        },
        "Effect Hit Rate": {
          base: 0.055296000558883,
          step: 0.019353999989107,
        },
      },
      Feet: {
        HP: {
          base: 0.055296000558883,
          step: 0.019353999989107,
        },
        ATK: {
          base: 0.055296000558883,
          step: 0.019353999989107,
        },
        DEF: {
          base: 0.069119999650866,
          step: 0.024192000506446,
        },
        SPD: {
          base: 3.225600000238046,
          step: 1.100000000093132,
        },
      },
      "Planar Sphere": {
        HP: {
          base: 0.055296000558883,
          step: 0.019353999989107,
        },
        ATK: {
          base: 0.055296000558883,
          step: 0.019353999989107,
        },
        DEF: {
          base: 0.069119999650866,
          step: 0.024192000506446,
        },
        "Physical DMG Boost": {
          base: 0.04976600036025,
          step: 0.017417999915779,
        },
        "Fire DMG Boost": {
          base: 0.04976600036025,
          step: 0.017417999915779,
        },
        "Ice DMG Boost": {
          base: 0.04976600036025,
          step: 0.017417999915779,
        },
        "Lightning DMG Boost": {
          base: 0.04976600036025,
          step: 0.017417999915779,
        },
        "Wind DMG Boost": {
          base: 0.04976600036025,
          step: 0.017417999915779,
        },
        "Quantum DMG Boost": {
          base: 0.04976600036025,
          step: 0.017417999915779,
        },
        "Imaginary DMG Boost": {
          base: 0.04976600036025,
          step: 0.017417999915779,
        },
      },
      "Link Rope": {
        "Break Effect": {
          base: 0.082944000838324,
          step: 0.0290299996268,
        },
        "Energy Regeneration Rate": {
          base: 0.024883000878617,
          step: 0.008708999957889,
        },
        HP: {
          base: 0.055296000558883,
          step: 0.019353999989107,
        },
        ATK: {
          base: 0.055296000558883,
          step: 0.019353999989107,
        },
        DEF: {
          base: 0.069119999650866,
          step: 0.024192000506446,
        },
      },
    },
    "5": {
      Head: {
        HP: {
          base: 112.89600000041537,
          step: 39.513600000645965,
        },
      },
      Hands: {
        ATK: {
          base: 56.44799999985844,
          step: 19.756800000788644,
        },
      },
      Body: {
        HP: {
          base: 0.069119999650866,
          step: 0.024192000506446,
        },
        ATK: {
          base: 0.069119999650866,
          step: 0.024192000506446,
        },
        DEF: {
          base: 0.086399999912828,
          step: 0.030240000458434,
        },
        "CRIT Rate": {
          base: 0.051840000785887,
          step: 0.018143999855965,
        },
        "CRIT DMG": {
          base: 0.103680000873283,
          step: 0.036288000410423,
        },
        "Outgoing Healing Boost": {
          base: 0.055296000558883,
          step: 0.019353999989107,
        },
        "Effect Hit Rate": {
          base: 0.069119999650866,
          step: 0.024192000506446,
        },
      },
      Feet: {
        HP: {
          base: 0.069119999650866,
          step: 0.024192000506446,
        },
        ATK: {
          base: 0.069119999650866,
          step: 0.024192000506446,
        },
        DEF: {
          base: 0.086399999912828,
          step: 0.030240000458434,
        },
        SPD: {
          base: 4.031999999890104,
          step: 1.400000000372529,
        },
      },
      "Planar Sphere": {
        HP: {
          base: 0.069119999650866,
          step: 0.024192000506446,
        },
        ATK: {
          base: 0.069119999650866,
          step: 0.024192000506446,
        },
        DEF: {
          base: 0.086399999912828,
          step: 0.030240000458434,
        },
        "Physical DMG Boost": {
          base: 0.062208000104874,
          step: 0.021773000946268,
        },
        "Fire DMG Boost": {
          base: 0.062208000104874,
          step: 0.021773000946268,
        },
        "Ice DMG Boost": {
          base: 0.062208000104874,
          step: 0.021773000946268,
        },
        "Lightning DMG Boost": {
          base: 0.062208000104874,
          step: 0.021773000946268,
        },
        "Wind DMG Boost": {
          base: 0.062208000104874,
          step: 0.021773000946268,
        },
        "Quantum DMG Boost": {
          base: 0.062208000104874,
          step: 0.021773000946268,
        },
        "Imaginary DMG Boost": {
          base: 0.062208000104874,
          step: 0.021773000946268,
        },
      },
      "Link Rope": {
        "Break Effect": {
          base: 0.103680000873283,
          step: 0.036288000410423,
        },
        "Energy Regeneration Rate": {
          base: 0.031104000052437,
          step: 0.010886001167819,
        },
        HP: {
          base: 0.069119999650866,
          step: 0.024192000506446,
        },
        ATK: {
          base: 0.069119999650866,
          step: 0.024192000506446,
        },
        DEF: {
          base: 0.086399999912828,
          step: 0.030240000458434,
        },
      },
    },
  },
  sub: {
    "2": {
      HP: 16.935020001605153,
      ATK: 8.467510002898052,
      DEF: 8.467510002898052,
      HP_: 0.017280001658947,
      ATK_: 0.017280001658947,
      DEF_: 0.021600001025944,
      SPD: 1.200000000186264,
      "CRIT Rate_": 0.012960002291947,
      "CRIT DMG_": 0.02592000248842,
      "Effect Hit Rate_": 0.017280001658947,
      "Effect RES_": 0.017280001658947,
      "Break Effect_": 0.02592000248842,
    },
    "3": {
      HP: 25.402529002400115,
      ATK: 12.70126400119625,
      DEF: 12.70126400119625,
      HP_: 0.02592000248842,
      ATK_: 0.02592000248842,
      DEF_: 0.032400000840426,
      SPD: 1.400000000372529,
      "CRIT Rate_": 0.019440002040936998,
      "CRIT DMG_": 0.038880001986399,
      "Effect Hit Rate_": 0.02592000248842,
      "Effect RES_": 0.02592000248842,
      "Break Effect_": 0.038880001986399,
    },
    "4": {
      HP: 33.87003899971023,
      ATK: 16.935020001605153,
      DEF: 16.935020001605153,
      HP_: 0.034560001222417,
      ATK_: 0.034560001222417,
      DEF_: 0.043200000654907,
      SPD: 2.000000000931324,
      "CRIT Rate_": 0.02592000248842,
      "CRIT DMG_": 0.051840001484378,
      "Effect Hit Rate_": 0.034560001222417,
      "Effect RES_": 0.034560001222417,
      "Break Effect_": 0.051840001484378,
    },
    "5": {
      HP: 42.337549002841115,
      ATK: 21.168773002224043,
      DEF: 21.168773002224043,
      HP_: 0.043200000654907,
      ATK_: 0.043200000654907,
      DEF_: 0.053999999770894,
      SPD: 2.600000000558794,
      "CRIT Rate_": 0.032400000840426,
      "CRIT DMG_": 0.064800001680851,
      "Effect Hit Rate_": 0.043200000654907,
      "Effect RES_": 0.043200000654907,
      "Break Effect_": 0.064800001680851,
    },
  },
};

export const floatToPercentageString = (value: number) => {
  const thousands = Math.floor(value * 10000);
  let percentage = Math.floor(thousands / 10) / 10;
  if (thousands % 10 === 9) {
    percentage = Math.ceil(thousands / 10) / 10;
  }

  return `${percentage.toFixed(1)}%`;
};

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
