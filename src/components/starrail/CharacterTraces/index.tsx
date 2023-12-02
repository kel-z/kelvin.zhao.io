import {
  CharacterGameData,
  CharacterUserData,
  Trace
} from "lib/starrail/types/character";
import { GameData } from "lib/starrail/types/app";
import getHarmonyTraceClasses from "./traces/Harmony";
import getDestructionTraceClasses from "./traces/Destruction";
import getHuntTraceClasses from "./traces/TheHunt";

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

  const getImageClassName = (traceName: string) => {
    const toggleClass = characterUserData.traces[traceName] ? "" : "opacity-50";
    switch (traceName) {
      case "basic":
      case "skill":
      case "ult":
      case "talent":
      case "technique":
        return "";
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

  const getTraceClasses = (traceName: string) => {
    const skillClass = "border border-neutral-400 bg-neutral-900";
    const traceClass = "invert";
    const activatedClass = characterUserData.traces[traceName]
      ? "bg-neutral-900"
      : "bg-neutral-500";
    const iconWidths = {
      skill: "w-[9%]",
      ability: "w-[11%]",
      stat: "w-[5.5%]"
    };

    switch (characterGameData.path) {
      case "Harmony":
        return getHarmonyTraceClasses(
          traceName,
          skillClass,
          traceClass,
          activatedClass,
          iconWidths
        );
      case "Destruction":
        return getDestructionTraceClasses(
          traceName,
          skillClass,
          traceClass,
          activatedClass,
          iconWidths
        );
      case "The Hunt":
        return getHuntTraceClasses(
          traceName,
          skillClass,
          traceClass,
          activatedClass,
          iconWidths
        );
      default:
        return "hello????";
    }
  };

  return (
    <div className="h-full w-full">
      <div className={`relative h-fit w-fit`}>
        <div className="absolute h-full w-full">
          {["skills", "traces"].map((traceType) => {
            return Object.entries(characterGameData[traceType]).map(
              ([traceName, trace]: [string, Trace]) => {
                return (
                  <>
                    <div
                      className={`${getTraceClasses(
                        traceName
                      )} absolute -translate-x-1/2 -translate-y-1/2 transform rounded-full`}
                    >
                      <img
                        key={`${characterUserData.key}-${traceName}`}
                        src={trace.icon}
                        alt={`${trace.name} icon`}
                        className={`${getImageClassName(traceName)}`}
                      />
                      {["basic", "skill", "ult", "talent"].includes(
                        traceName
                      ) && (
                        <div className="absolute w-[300%] -translate-x-1/3 transform text-center font-din-alternate font-bold">
                          <div
                            className={`mx-auto w-fit bg-black/50 px-1 text-lg ${
                              leveledUpSkills.has(traceName) && "text-cyan-300"
                            }`}
                          >
                            {characterUserData.skills[traceName]}/
                            {maxSkillLevels[traceName]}
                          </div>
                        </div>
                      )}
                    </div>
                  </>
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
    </div>
  );
}
