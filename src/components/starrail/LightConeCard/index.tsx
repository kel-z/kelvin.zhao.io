import { GameData, LightConeData, UserData } from "lib/starrail";

interface LightConeCardProps {
  gameData: GameData;
  userData: UserData;
  setUserData: (userData: UserData) => void;
  lightConeData: LightConeData;
}
export default function LightConeCard({
  gameData,
  userData,
  setUserData,
  lightConeData,
}: LightConeCardProps) {
  const lightConeStatDict =
    gameData.light_cones[lightConeData.key].ascension[lightConeData.ascension];
  const lightConeStatVals: Partial<{
    hp: number;
    atk: number;
    def: number;
  }> = {};
  for (const stat in lightConeStatDict) {
    lightConeStatVals[stat] = Math.floor(
      lightConeStatDict[stat]["base"] +
        lightConeStatDict[stat]["step"] * (lightConeData.level - 1)
    );
  }

  return (
    <div className={`group flex flex-col overflow-hidden rounded-md`}>
      <div
        className={`relative h-36 w-full bg-gradient-to-tl ${
          {
            1: "from-gray-400 to-gray-900",
            2: "from-green-400 to-green-900",
            3: "from-blue-400 to-blue-900",
            4: "from-purple-400 to-purple-900",
            5: "from-yellow-200 to-amber-800",
          }[gameData.light_cones[lightConeData.key].rarity]
        }`}
      >
        <img
          src={`${
            gameData.light_cones[lightConeData.key].icon
          }`}
          alt={`${lightConeData.key} icon`}
          className={`absolute -top-12 left-1/2 -translate-x-10 transform transition-all duration-300 group-hover:scale-105`}
        />
        <div className="absolute left-5 top-6">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold drop-shadow-xl">
              Lv. {lightConeData.level}{" "}
              <span className="text-sm font-normal opacity-50 drop-shadow-xl">
                / {lightConeData.ascension * 10 + 20}
              </span>
            </h1>
            <div className="flex w-3/5 flex-col">
              <div className="flex justify-between">
                <p className="text-sm">HP</p>
                <p className="text-sm">{lightConeStatVals.hp}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm">ATK</p>
                <p className="text-sm">{lightConeStatVals.atk}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm">DEF</p>
                <p className="text-sm">{lightConeStatVals.def}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="absolute right-5 top-3 text-lg"
          onClick={() => {
            const newUserData = { ...userData };
            newUserData.light_cones = newUserData.light_cones.filter(
              (lightCone) => lightCone !== lightConeData
            );
            setUserData(newUserData);
          }}
        >
          ✖
        </button>
      </div>
      <div className="z-10 bg-neutral-800/75 p-3">
        <p className="overflow-hidden truncate text-lg font-semibold">
          {lightConeData.key}
        </p>
        <p>Superimposition {lightConeData.superimposition}</p>
      </div>
      <div
        className={`relative z-10 flex p-1 ${
          lightConeData.location ? "bg-neutral-700/90" : "bg-neutral-800/75"
        }`}
      >
        <p
          className={`mx-auto truncate ${
            lightConeData.location || "invisible"
          }`}
        >
          Equipped:{" "}
          <span className="font-semibold">
            {lightConeData.location.startsWith("Trailblazer")
              ? "Trailblazer"
              : lightConeData.location}
          </span>
        </p>
        {lightConeData.location !== "" && (
          <img
            src={`${
              gameData.characters[lightConeData.location]?.mini_icon
            }`}
            alt={`${lightConeData.location} icon`}
            className={`absolute bottom-0 right-0 w-10 -translate-x-1/3 -translate-y-1/4 transform rounded-full`}
          />
        )}
      </div>
    </div>
  );
}
