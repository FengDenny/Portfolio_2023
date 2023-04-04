import React from "react";
import Hero from "./Hero";
import About from "./About";
import TechStack from "./TechStack";
import Project from "./Projects";
import Contact from "./Contact/Contact";
import PageTitle from "@/components/Helmet";

type Props = {};

function index({}: Props) {
  return (
    <>
      <PageTitle pageTitle="Denny Feng | Welcome to my learning journey portfolio" />
      <section id="home" className="gap-16 pt-60 md:h-full md:pb-0">
        <Hero />
        <About />
        <TechStack />
        <Project />
        <Contact />
      </section>
    </>
  );
}

export default index;
