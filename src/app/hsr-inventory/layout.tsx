"use client";

import "styles/global.css";
import Layout from "components/starrail/Layout";
import { GameDataProvider } from "contexts/starrail/GameDataProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Star Rail Inventory Viewer",
  description: "Visualize Star Rail user data files scanned with HSR-Scanner.",
  icons:
    "https://github.com/Mar-7th/StarRailRes/blob/8d8f3066edb60938e9c9d6733620132b60f9dce8/image/character_portrait/1001.png?raw=true"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body>
        <GameDataProvider>
          <Layout tab="none">{children}</Layout>;
        </GameDataProvider>
      </body>
    </html>
  );
}
