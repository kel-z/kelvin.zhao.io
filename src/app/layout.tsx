import "styles/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "kelvin zhao",
  description: "Software Engineer",
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
