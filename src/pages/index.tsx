import React from "react";
import Landing from "components/home/Landing";
import About from "components/home/About";
import Experience from "components/home/Experience";
import Projects from "components/home/Projects";
import Footer from "components/home/Footer";
import Status from "components/home/Status";
import Head from "next/head";

function HomePage() {
  return (
    <React.StrictMode>
      <Head>
        <title>kelvin zhao</title>
        <meta property="og:title" content="kelvin zhao" />
        <meta property="og:description" content="Software Engineer" />
        <meta property="og:image" content="/images/og-image.png" />
      </Head>
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
