import React from "react";
import ProjectTemplate from "../ProjectTemplate";
import WFLHero from "@/assets/project_image/wfl_hero.png";

type Props = {};

const WarframeLeeter = (props: Props) => {
  return (
    <ProjectTemplate
      image={WFLHero}
      alt="Warframeleeter"
      spanH4="WarframeLeeter"
      h4=", a full stack 
application, integrating LeetCode's API and GraphQL to keep track of my data structure and algorithm journey."
      pageURL="/warframeleeter"
    />
  );
};

export default WarframeLeeter;
