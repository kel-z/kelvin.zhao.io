import {
  GameData,
  RelicData,
  UserData,
  RelicStatValues,
  floatToPercentageString,
} from "lib/starrail";

interface RelicCardProps {
  gameData: GameData;
  userData: UserData;
  setUserData: (userData: UserData) => void;
  relicData: RelicData;
}
export default function LightConeCard({
  gameData,
  userData,
  setUserData,
  relicData,
}: RelicCardProps) {
  const piece = gameData.relic_sets[relicData.set]["pieces"][relicData.slot];

  const mainStatDict =
    RelicStatValues.main[`${relicData.rarity}`][relicData.slot][
      relicData.mainstat
    ];
  let mainStatVal = "";
  let mainStatFloat =
    relicData.level * mainStatDict["step"] + mainStatDict["base"];
  if (
    relicData.mainstat !== "SPD" &&
    !["Head", "Hands"].includes(relicData.slot)
  ) {
    mainStatVal = floatToPercentageString(mainStatFloat);
  } else {
    mainStatVal = `${Math.floor(mainStatFloat)}`;
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-md">
      <div
        className={`relative h-36 w-full bg-gradient-to-tl ${
          {
            1: "from-gray-400 to-gray-900",
            2: "from-green-400 to-green-900",
            3: "from-blue-400 to-blue-900",
            4: "from-purple-400 to-purple-900",
            5: "from-yellow-200 to-amber-800",
          }[relicData.rarity]
        }`}
      >
        <img
          src={`${piece.icon}`}
          alt={`${relicData.slot} icon`}
          className={`absolute right-2 top-0 w-36 transform transition-all duration-300 group-hover:scale-105`}
        />
        <div className="absolute left-5 top-5">
          <p className="opacity-50 drop-shadow-xl">+{relicData.level}</p>
          <div className="rounded-sm  pr-2 pt-1">
            <p className="truncate text-xl font-bold drop-shadow-xl">
              {relicData.mainstat}
            </p>
            <p className="text-4xl font-bold drop-shadow-xl">{mainStatVal}</p>
          </div>
        </div>
        <button
          className="absolute right-5 top-3 text-lg"
          onClick={() => {
            const newUserData = { ...userData };
            newUserData.relics = newUserData.relics.filter(
              (relic) => relic !== relicData
            );
            setUserData(newUserData);
          }}
        >
          ✖
        </button>
      </div>
      <div className="z-10 bg-neutral-800/75 p-3">
        <p className="overflow-hidden truncate text-lg font-semibold">
          {piece.name}
        </p>
        <div className="mb-3 flex flex-col gap-1 overflow-hidden rounded-sm">
          {Array.from({ length: 4 }, (_, i) => i).map((_, index) => {
            const substat = relicData.substats[index];
            return (
              <div
                key={index}
                className={`flex justify-between px-3 py-0.5 ${
                  index % 2 === 0 ? "bg-neutral-800" : ""
                }`}
              >
                <p>{substat?.key.replace("_", "")}</p>
                <p className={`${substat || "invisible"}`}>
                  {substat?.key.endsWith("_")
                    ? `${substat.value.toFixed(1)}%`
                    : substat?.value || "spacer"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`relative z-10 flex p-1 ${
          relicData.location ? "bg-neutral-700/90" : "bg-neutral-800/75"
        }`}
      >
        <p className={`mx-auto truncate ${relicData.location || "invisible"}`}>
          Equipped:{" "}
          <span className="font-semibold">
            {relicData.location.startsWith("Trailblazer")
              ? "Trailblazer"
              : relicData.location}
          </span>
        </p>
        {relicData.location !== "" && (
          <img
            src={`${gameData.characters[relicData.location]?.mini_icon}`}
            alt={`${relicData.location} icon`}
            className={`absolute bottom-0 right-0 w-8 -translate-x-1/3 -translate-y-1/4 transform rounded-full`}
          />
        )}
      </div>
    </div>
  );
}
