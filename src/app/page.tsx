import React from "react";
import Landing from "@/components/home/Landing";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import Footer from "@/components/home/Footer";
import Status from "@/components/home/Status";

export default function Page() {
  return (
    <React.StrictMode>
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Status />
      <Footer />
    </React.StrictMode>
  );
}
