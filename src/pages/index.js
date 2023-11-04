import React from "react";
import Landing from "../components/Landing";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Status from "../components/Status";

function HomePage() {
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

export default HomePage;
