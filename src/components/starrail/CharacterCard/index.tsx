import {
  GameData,
  CharacterData,
  UserData,
  RelicStatValues,
  computeRelicSubstatValue,
} from "lib/starrail";

interface CharacterCardProps {
  gameData: GameData;
  userData: UserData;
  setUserData: (userData: UserData) => void;
  characterData: CharacterData;
}
export default function CharacterCard({
  gameData,
  userData,
  setUserData,
  characterData,
}: CharacterCardProps) {
  /**
   * Please look away if you value your sanity.
   * This entire component was written in a single sitting, and it lacks any sort of error handling.
   * I'll refactor it eventually.
   */
  const characterDict = gameData.characters[characterData.key];
  const characterBaseStatVals: Partial<{
    hp: number;
    atk: number;
    def: number;
    spd: number;
    taunt: number;
    crit_rate: number;
    crit_dmg: number;
  }> = {};
  for (const stat in characterDict.ascension[characterData.ascension]) {
    let val =
      characterDict.ascension[characterData.ascension][stat]["base"] +
      characterDict.ascension[characterData.ascension][stat]["step"] *
        (characterData.level - 1);
    characterBaseStatVals[stat] = val;
  }

  const modifiers = [];
  const characterLightCone = userData.light_cones.find(
    (lightCone) => lightCone.location === characterData.key
  );
  if (characterLightCone) {
    const lightConeStatDict =
      gameData.light_cones[characterLightCone.key].ascension[
        characterLightCone.ascension
      ];
    for (const stat in lightConeStatDict) {
      characterBaseStatVals[stat] +=
        lightConeStatDict[stat]["base"] +
        lightConeStatDict[stat]["step"] * (characterLightCone.level - 1);
    }
    const lightConeModifiers =
      gameData.light_cones[characterLightCone.key].ability.modifiers;
    if (lightConeModifiers) {
      modifiers.push(
        ...lightConeModifiers[characterLightCone.superimposition - 1]
      );
    }
  }

  const characterStatVals: Partial<{
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
  }> = {
    ...characterBaseStatVals,
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
  const characterRelics = userData.relics.filter(
    (relic) => relic.location === characterData.key
  );

  const characterRelicSetCount: {
    [setKey: string]: number;
  } = {};
  const relicSetKeys = characterRelics.map((relic) => relic.set);
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
        modifiers.push(...modifiersArray);
      }
      setBonus -= 1;
    }
  }

  const statMap = {
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
    "Effect RES_": "effect_res",
  };
  for (const relic of characterRelics) {
    let mainKey = relic.mainstat;
    const mainStatDict =
      RelicStatValues.main[`${relic.rarity}`][relic.slot][mainKey];

    switch (relic.slot) {
      case "Head":
      case "Hands":
        characterStatVals[statMap[mainKey]] +=
          mainStatDict["base"] + mainStatDict["step"] * relic.level;
        break;
      default:
        if (mainKey !== "SPD") mainKey += "_";
        switch (mainKey) {
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
            characterStatVals[statMap[mainKey]] +=
              mainStatDict["base"] + mainStatDict["step"] * relic.level;
            break;
          case "HP_":
          case "ATK_":
          case "DEF_":
            characterStatVals[statMap[mainKey]] +=
              characterBaseStatVals[statMap[mainKey]] *
              (mainStatDict["base"] + mainStatDict["step"] * relic.level);
            break;
          default:
            console.log("Unhandled relic main stat", mainKey);
            break;
        }
        break;
    }
    for (const substat of relic.substats) {
      switch (substat.key) {
        case "HP_":
        case "ATK_":
        case "DEF_":
          characterStatVals[statMap[substat.key]] +=
            characterBaseStatVals[statMap[substat.key]] *
            computeRelicSubstatValue(
              RelicStatValues.sub[`${relic.rarity}`][substat.key],
              substat.value / 100
            ) *
            RelicStatValues.sub[`${relic.rarity}`][substat.key];
          break;
        case "Effect Hit Rate_":
        case "Break Effect_":
        case "Effect RES_":
        case "CRIT Rate_":
        case "CRIT DMG_":
          characterStatVals[statMap[substat.key]] +=
            computeRelicSubstatValue(
              RelicStatValues.sub[`${relic.rarity}`][substat.key],
              substat.value / 100
            ) * RelicStatValues.sub[`${relic.rarity}`][substat.key];
          break;
        case "HP":
        case "ATK":
        case "DEF":
        case "SPD":
          characterStatVals[statMap[substat.key]] +=
            computeRelicSubstatValue(
              RelicStatValues.sub[`${relic.rarity}`][substat.key],
              substat.value
            ) * RelicStatValues.sub[`${relic.rarity}`][substat.key];
          break;
        default:
          console.log("Unhandled relic substat", substat.key);
          break;
      }
    }
  }

  const activatedTraces = Object.keys(characterData.traces).filter(
    (key) => characterData.traces[key]
  );
  const modifierMap = {
    DefenceAddedRatio: "def",
    QuantumAddedRatio: "quantum",
    BreakDamageAddedRatioBase: "break",
    ImaginaryAddedRatio: "imaginary",
    FireAddedRatio: "fire",
    StatusProbabilityBase: "effect_hit",
    ThunderAddedRatio: "lightning",
    SpeedDelta: "spd",
    SpeedAddedRatio: "spd",
    IceAddedRatio: "ice",
    StatusResistanceBase: "effect_res",
    HPAddedRatio: "hp",
    AttackAddedRatio: "atk",
    CriticalChanceBase: "crit_rate",
    WindAddedRatio: "wind",
    PhysicalAddedRatio: "physical",
    CriticalDamageBase: "crit_dmg",
    HealRatioBase: "heal",
    SPRatioBase: "energy",
  };
  for (const trace of activatedTraces) {
    const traceModifiers = characterDict.traces[trace].modifiers;
    if (!traceModifiers) continue;
    modifiers.push(...traceModifiers);
  }
  for (const modifierDict of modifiers) {
    switch (modifierDict.type) {
      case "DefenceAddedRatio":
      case "HPAddedRatio":
      case "SpeedAddedRatio":
      case "AttackAddedRatio":
        characterStatVals[modifierMap[modifierDict.type]] +=
          characterBaseStatVals[modifierMap[modifierDict.type]] *
          modifierDict.value;
        break;
      case "SpeedDelta":
      case "HealRatioBase":
      case "StatusProbabilityBase":
      case "StatusResistanceBase":
      case "CriticalChanceBase":
      case "CriticalDamageBase":
      case "QuantumAddedRatio":
      case "ImaginaryAddedRatio":
      case "FireAddedRatio":
      case "ThunderAddedRatio":
      case "IceAddedRatio":
      case "WindAddedRatio":
      case "PhysicalAddedRatio":
      case "BreakDamageAddedRatioBase":
      case "SPRatioBase":
        characterStatVals[modifierMap[modifierDict.type]] += modifierDict.value;
        break;
      case "AllDamageTypeAddedRatio":
        characterStatVals.fire += modifierDict.value;
        characterStatVals.ice += modifierDict.value;
        characterStatVals.wind += modifierDict.value;
        characterStatVals.lightning += modifierDict.value;
        characterStatVals.physical += modifierDict.value;
        characterStatVals.quantum += modifierDict.value;
        characterStatVals.imaginary += modifierDict.value;
        break;
      default:
        console.log("Unhandled modifier", modifierDict.type);
        break;
    }
  }

  return (
    <div className={`group flex flex-col overflow-hidden rounded-md`}>
      <div
        className={`relative h-60 w-full bg-gradient-to-tl ${
          {
            1: "from-gray-400 to-gray-900",
            2: "from-green-400 to-green-900",
            3: "from-blue-400 to-blue-900",
            4: "from-purple-400 to-purple-900",
            5: "from-yellow-200 to-amber-800",
          }[characterDict.rarity]
        }`}
      >
        <div className="absolute -right-12 -top-6 h-80 w-80 overflow-hidden rounded-bl-full rounded-tl-full border border-white/10 bg-white/5">
          <img
            src={`${gameData.characters[characterData.key].icon}`}
            alt={`${characterData.key} icon`}
            className={`transform transition-all duration-300 group-hover:scale-105`}
          />
        </div>
        <div className="absolute left-5 top-6 w-1/2 rounded-xl bg-black/50 p-5">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold drop-shadow-xl">
              Lv. {characterData.level}{" "}
              <span className="text-sm font-normal opacity-50 drop-shadow-xl">
                / {characterData.ascension * 10 + 20}
              </span>
            </h1>
            <div className="flex w-full flex-col">
              <div className="flex justify-between bg-black/10">
                <p className="text-sm">HP</p>
                <p className="text-sm">{Math.floor(characterStatVals.hp)}</p>
              </div>
              <div className="flex justify-between ">
                <p className="text-sm">ATK</p>
                <p className="text-sm">{Math.floor(characterStatVals.atk)}</p>
              </div>
              <div className="flex justify-between bg-black/10">
                <p className="text-sm">DEF</p>
                <p className="text-sm">{Math.floor(characterStatVals.def)}</p>
              </div>
              <div className="flex justify-between ">
                <p className="text-sm">SPD</p>
                <p className="text-sm">{Math.floor(characterStatVals.spd)}</p>
              </div>
              <div className="flex justify-between bg-black/10">
                <p className="text-sm">CRIT Rate</p>
                <p className="text-sm">
                  {(
                    Math.floor(characterStatVals.crit_rate * 1000) / 10
                  ).toFixed(1)}
                  %
                </p>
              </div>
              <div className="flex justify-between ">
                <p className="text-sm">CRIT DMG</p>
                <p className="text-sm">
                  {(Math.floor(characterStatVals.crit_dmg * 1000) / 10).toFixed(
                    1
                  )}
                  %
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="absolute right-5 top-3 text-lg"
          onClick={() => {
            const newUserData = { ...userData };
            newUserData.characters = newUserData.characters.filter(
              (character) => character !== characterData
            );
            setUserData(newUserData);
          }}
        >
          ✖
        </button>
      </div>
      <div className="z-10 bg-neutral-800/75 p-3">
        <p className="overflow-hidden truncate text-lg font-semibold">
          {characterData.key.startsWith("Trailblazer")
            ? "Trailblazer"
            : characterData.key}

          {/* <span className="text-sm font-normal opacity-50 drop-shadow-xl">
            {" "}
            / {characterDict.rarity}★
          </span> */}
          <span className="font-normal opacity-50 drop-shadow-xl">
            {" "}
            / {characterDict.path}
          </span>
        </p>
        <div className="flex flex-wrap overflow-hidden text-sm ">
          <div className="group/sub flex w-full justify-between bg-neutral-700/25 px-3 py-0.5">
            <p className="truncate opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              Break Effect
            </p>
            <p className="opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              {(characterStatVals.break * 100).toFixed(1)}%
            </p>
          </div>
          <div className="group/sub flex w-full justify-between px-3 py-0.5">
            <p className="truncate opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              Energy Regeneration Rate
            </p>
            <p className="opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              {(characterStatVals.energy * 100).toFixed(1)}%
            </p>
          </div>
          <div className="group/sub flex w-full justify-between bg-neutral-700/25 px-3 py-0.5">
            <p className="truncate opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              Effect Hit Rate
            </p>
            <p className="opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              {(characterStatVals.effect_hit * 100).toFixed(1)}%
            </p>
          </div>
          <div className="group/sub flex w-full justify-between px-3 py-0.5">
            <p className="truncate opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              Effect RES
            </p>
            <p className="opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              {(characterStatVals.effect_res * 100).toFixed(1)}%
            </p>
          </div>
          <div className="group/sub flex w-full justify-between bg-neutral-700/25 px-3 py-0.5">
            <p className="truncate opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              {characterDict.element} DMG Boost
            </p>
            <p className="opacity-50 transition-opacity duration-100 group-hover/sub:opacity-100">
              {(
                characterStatVals[characterDict.element.toLowerCase()] * 100
              ).toFixed(1)}
              %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
