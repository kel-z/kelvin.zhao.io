import "@/styles/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LetMeInUBC",
  description: "Notify me when a spot opens up in a UBC course.",
  icons: "/images/og-image.png"
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
      <body>{children}</body>
    </html>
  );
}
