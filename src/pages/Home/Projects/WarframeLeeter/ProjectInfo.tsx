import ProjectInfoTemplate from "../ProjectInfoTemplate";
import WFL from "@/assets/project_logo/WFL.png";
import WFL_dark from "@/assets/project_logo/WFL_dark.png";
import WFLHero from "@/assets/project_image/wfl_hero.png";
import parse from "html-react-parser";
import { wfl_stack } from "@/Model/tech_stack";
import { wfl_snippets } from "@/Model/image_snippets";
type Props = {};

const ProjectInfo = (props: Props) => {
  const projectDescription_parsed = parse(
    `Bombing my first IBM coding interview, I found another <span className="font-bold">weakness</span> that I had, which was being proficient in
    <span className="font-bold">Data Structures and Algorithms</span>. I created 
    <span className="font-bold">WarframeLeeter</span>  as a blog to learn about  <span className="font-bold">GraphQL</span>, while also holding myself accountable to study DSA on a daily basis. This way, I can track my progress to see how much I have improved from that day to indefinite. `
  );

  const dutiesDescription = parse(
    `The main part of this project was creating  <span className="font-bold">GraphQL</span>  queries to query  <span className="font-bold">LeetCode’s </span> endpoints and retrieve data about my username <span className="font-bold">Warframeleeter</span> and display it on my blog. Using these queries, I was able to create the client side showcasing question of the day, my statistics, achievements, problem solutions, and ongoing streak.`
  );

  const dutyFulfilledDescription_parsed =
    parse(`Working with  <span className="font-bold">LeetCode’s public API</span>  has its limit. Some of the endpoints was restricted. In order to retrieve data out of some the public endpoints, some of the  <span className="font-bold">GraphQL</span> queries needed to be tweaked. 
    <div className="mt-4"></div>
    Initially, I had to perform trial and error to see what worked and what didn’t in 
    <span className="font-bold">Postman</span> to finally get all the endpoints up and running. Using these points, I created functionalities using <span className="font-bold">React</span> that can help display my data as user friendly as possible, while building components based on what was needed to display these data. 
  `);

  const learningDescription_parsed =
    parse(`Creating this project allowed me to learn more about how network works in the 
    <span className="font-bold"> Networking </span> tab of browsers. I was able to see different network request being made by me. Thus, I utilized these public endpoints to create my own blog. 
    <div className="mt-4"></div>
    This enabled me to deep dive into working with <span className="font-bold">Promise API</span>. Working with Promise API allowed me to utilize the <span className="font-bold">DRY</span> principle. 
    I’m still not proficient with this principle yet nor working with Promises, but I am indeed getting better as I create more projects.  
    
    
    
  `);

  const liveURL = "https://www.warframeleeter.com/";

  return (
    <ProjectInfoTemplate
      imgLogo={WFL_dark}
      imgLightLogo={WFL}
      note={"Due to free tier backend hosting, API needs some time to load"}
      projectDescription={projectDescription_parsed}
      stackLogo={wfl_stack}
      liveURL={liveURL}
      heroImg={WFLHero}
      dutiesDescription={dutiesDescription}
      dutyFulfilledDescription={dutyFulfilledDescription_parsed}
      imgSnippets={wfl_snippets}
      learningDescription={learningDescription_parsed}
    />
  );
};

export default ProjectInfo;
