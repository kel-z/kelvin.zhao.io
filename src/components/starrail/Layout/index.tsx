"use client";

import GameDataContext from "contexts/starrail/GameDataContext";
import { StarRailTab, UserData } from "lib/starrail/types/app";
import { ChangeEvent, useContext } from "react";
import Link from "next/link";

interface LayoutProps {
  tab: StarRailTab;
  children: React.ReactNode;
}
export default function Layout({ tab, children }: LayoutProps) {
  const tabs: { [key in StarRailTab]?: string } = {
    "light-cones": "Light Cones",
    relics: "Relics",
    characters: "Characters"
  };

  const { userData, setUserData } = useContext(GameDataContext);

  const handleImport = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (!target.files) return;
    const file = target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      let userData = e.target?.result as string;
      userData = userData.replace(
        /TrailblazerPreservation/g,
        "TrailblazerPreservation#F"
      );
      userData = userData.replace(
        /TrailblazerDestruction/g,
        "TrailblazerDestruction#F"
      );

      let userDataJSON: UserData;
      try {
        userDataJSON = JSON.parse(userData);
      } catch (e) {
        alert("Invalid JSON.");
        return;
      }
      if (
        !userDataJSON.source ||
        userDataJSON.source !== "HSR-Scanner" ||
        !userDataJSON.version ||
        userDataJSON.version !== 3
      ) {
        alert(
          "Unrecognized JSON. Please use the latest version of HSRScanner."
        );
        return;
      }

      setUserData(userDataJSON);
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const handleExport = () => {
    if (userData) {
      let dataStr = JSON.stringify(userData);
      dataStr = dataStr.replace(
        /TrailblazerPreservation#F/g,
        "TrailblazerPreservation"
      );
      dataStr = dataStr.replace(
        /TrailblazerDestruction#F/g,
        "TrailblazerDestruction"
      );

      const dataUri =
        "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
      const exportFileDefaultName = "data.json";
      const linkElement = document.createElement("a");
      linkElement.setAttribute("href", dataUri);
      linkElement.setAttribute("download", exportFileDefaultName);
      linkElement.click();
    }
  };

  const userDataIsEmpty =
    !userData.light_cones.length &&
    !userData.relics.length &&
    !userData.characters.length;

  return (
    <div className="flex h-screen w-screen flex-col bg-neutral-950">
      <div className="items-center bg-neutral-900 p-5 drop-shadow-xl">
        <div className="flex w-full flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="order-2 flex items-center sm:order-1">
            <h1 className="hidden border-r pr-5 text-center text-2xl font-medium text-neutral-100 sm:block">
              Star Rail Inventory Viewer{" "}
              <span className="text-neutral-500">v1.0.0</span>
            </h1>

            <div className="flex gap-2 sm:ml-5">
              {Object.entries(tabs).map(([key, value]) => (
                <Link href={`/hsr-inventory/${key}`} key={key}>
                  <button
                    className={`cursor-pointer rounded-sm px-3 py-2 transition duration-100 ease-in-out ${
                      tab === key
                        ? "bg-blue-500 text-blue-100 hover:bg-blue-400 active:bg-blue-600"
                        : "bg-neutral-800 text-neutral-100 hover:bg-neutral-700 active:bg-neutral-900"
                    }`}
                  >
                    {value}
                  </button>
                </Link>
              ))}
            </div>
          </div>
          <div className="order-1 flex gap-2 sm:order-2">
            <button
              className={`rounded-sm bg-red-500 px-4 py-2 transition duration-100 ease-in-out hover:bg-red-400 active:bg-red-600 ${
                userDataIsEmpty && "hidden"
              }`}
              onClick={() => {
                setUserData({ light_cones: [], relics: [], characters: [] });
                localStorage.removeItem("data");
              }}
            >
              Clear
            </button>

            <label
              htmlFor="file"
              className="cursor-pointer rounded-sm bg-blue-500 px-4 py-2 transition duration-100 ease-in-out hover:bg-blue-400 active:bg-blue-600"
            >
              Import JSON
              <input
                type="file"
                id="file"
                onChange={handleImport}
                accept=".json"
                className="hidden"
              />
            </label>
            <button
              className="rounded-sm bg-neutral-800 px-4 py-2 transition duration-100 ease-in-out hover:bg-neutral-700 active:bg-neutral-900"
              onClick={handleExport}
            >
              Export JSON
            </button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
