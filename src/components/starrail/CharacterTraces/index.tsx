import {
  CharacterGameData,
  CharacterUserData,
  Trace
} from "lib/starrail/types/character";
import { GameData } from "lib/starrail/types/app";
import getHarmonyTraceClasses from "./traces/Harmony";
import getDestructionTraceClasses from "./traces/Destruction";
import getHuntTraceClasses from "./traces/TheHunt";
import getPreservationTraceClasses from "./traces/Preservation";
import getAbundanceTraceClasses from "./traces/Abundance";
import getNihilityTraceClasses from "./traces/Nihility";
import getEruditionTraceClasses from "./traces/Erudition";

interface CharacterTracesProps {
  characterUserData: CharacterUserData;
  gameData: GameData;
}
export default function CharacterTraces({
  characterUserData,
  gameData
}: CharacterTracesProps) {
  const characterGameData: CharacterGameData =
    gameData.characters[characterUserData.key];

  const getImageClassName = (traceKey: string) => {
    const toggleClass = !characterUserData.traces[traceKey] && "opacity-50";
    switch (traceKey) {
      case "basic":
      case "skill":
      case "ult":
      case "talent":
      case "technique":
        return "scale-[95%]";
      case "ability_1":
      case "ability_2":
      case "ability_3":
        return `scale-[85%] ${toggleClass}`;
    }
    return toggleClass;
  };
  const maxSkillLevels = {
    basic: 6,
    skill: 10,
    ult: 10,
    talent: 10
  };
  const leveledUpSkills = new Set<string>();
  if (characterUserData.eidolon >= 5) {
    Object.entries(characterGameData.eidolons[4].level_up_skills).forEach(
      ([skill, level]) => {
        maxSkillLevels[skill] += level;
        leveledUpSkills.add(skill);
      }
    );
  }
  if (characterUserData.eidolon >= 3) {
    Object.entries(characterGameData.eidolons[2].level_up_skills).forEach(
      ([skill, level]) => {
        maxSkillLevels[skill] += level;
        leveledUpSkills.add(skill);
      }
    );
  }

  const getTraceClasses = (traceKey: string) => {
    const skillClass = "border border-neutral-400 bg-neutral-900";
    const traceClass = "invert";
    const activatedClass = characterUserData.traces[traceKey]
      ? "bg-neutral-900"
      : "bg-neutral-500";
    const iconWidths = {
      skill: "w-[9%]",
      ability: "w-[11%]",
      stat: "w-[5.5%]"
    };

    let traceFn: Function;
    switch (characterGameData.path) {
      case "Harmony":
        traceFn = getHarmonyTraceClasses;
        break;
      case "Destruction":
        traceFn = getDestructionTraceClasses;
        break;
      case "The Hunt":
        traceFn = getHuntTraceClasses;
        break;
      case "Preservation":
        traceFn = getPreservationTraceClasses;
        break;
      case "Abundance":
        traceFn = getAbundanceTraceClasses;
        break;
      case "Nihility":
        traceFn = getNihilityTraceClasses;
        break;
      case "Erudition":
        traceFn = getEruditionTraceClasses;
        break;
      default:
        return "";
    }
    return traceFn(
      traceKey,
      skillClass,
      traceClass,
      activatedClass,
      iconWidths
    );
  };

  return (
    <div className={`relative my-auto h-fit w-fit`}>
      <div className="absolute h-full w-full">
        {["skills", "traces"].map((traceType) => {
          return Object.entries(characterGameData[traceType]).map(
            ([traceKey, trace]: [string, Trace]) => {
              return (
                <div
                  key={traceKey}
                  className={`${getTraceClasses(
                    traceKey
                  )} absolute -translate-x-1/2 -translate-y-1/2 transform rounded-full`}
                >
                  {traceKey.startsWith("ability") && (
                    <img
                      src="/icons/starrail/ability_overlay.png"
                      alt={`ability overlay icon`}
                      className={`${
                        !characterUserData.traces[traceKey] &&
                        "opacity-50 grayscale"
                      } absolute scale-125 invert`}
                    />
                  )}
                  <img
                    src={trace.icon}
                    alt={`${characterUserData.key} ${traceKey} icon`}
                    className={`${getImageClassName(traceKey)}`}
                    title={`${trace.name} (${traceKey})\n${trace.desc}`}
                  />
                  {["basic", "skill", "ult", "talent"].includes(traceKey) && (
                    <div className="absolute h-[50%] w-[300%] -translate-x-1/3 transform text-center font-din-alternate font-bold">
                      <div
                        className={`mx-auto h-6 w-fit -translate-y-1 transform px-1 text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ${
                          leveledUpSkills.has(traceKey) && "text-cyan-300"
                        }`}
                      >
                        {characterUserData.skills[traceKey]}/
                        {maxSkillLevels[traceKey]}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
          );
        })}
      </div>

      <img
        id="traces-background"
        src={`/images/starrail/trace-${characterGameData.path
          .split(" ")
          .pop()}.png`}
        className="-z-10 object-contain"
        alt={`${characterGameData.path} trace background`}
      />
    </div>
  );
}
