import ProjectInfoTemplate from "../ProjectInfoTemplate";
import StanceLab from "@/assets/project_logo/StanceLab.png";
import StanceLabLight from "@/assets/project_logo/StanceLab_light.png";
import StanceLabHero from "@/assets/project_image/Stancelab_hero.png";
import parse from "html-react-parser";
import { stanceLab_stack } from "@/Model/tech_stack";
import { stanceLab_snippets } from "@/Model/image_snippets";
type Props = {};

const ProjectInfo = (props: Props) => {
  const projectDescription_parsed = parse(
    `My first gig was 
  <span className="font-bold">Stance Lab</span>, a single page application for a car shop business.  I built this project with another developer using 
  <span className="font-bold">CSS frameworks</span>, <span className="font-bold">JavaScript</span>,<span className="font-bold pl-2">PHP</span>, <span className="font-bold">HTML5</span>, and  <span className="font-bold">Material Design for Bootstrap</span>. Although, this was a single application, this project required a lot of research and numerous revisions of <span className="font-bold">website content plan</span> to produce what was needed to fit their business needs.`
  );

  const dutiesDescription =
    "The core of this project was to design and develop a new car shop business landing page. The client wanted a lot of features and functionalities to show their car pictures, services, featured partners, and a better way to contact them.";

  const dutyFulfilledDescription_parsed =
    parse(`To help the clients show their car pictures, I used 
  <span className="font-bold"> Material Design for Bootstrap</span> starting template to help create hero image slider helping them show their most recent finished cars. I also had worked on the services section.  
  I finished this project off by helping them create a contact form, so that, they can provide a better communication service.
  `);

  const learningDescription_parsed =
    parse(`During this time, since I was a novice web developer, there were features and functionalities that I didn’t know how to implement. Therefore, I took a lot of time to do proper research, and planning to  help me develop what I needed for <span className="font-bold">StanceLab</span>. This project has taught me a lot about <span className="font-bold">designing</span>,<span className="font-bold pl-1">researching</span>, and <span className="font-bold">planning</span>. At the end of this project, I gained hands-on experience working with numerous of <span className="font-bold">frameworks</span>, and with an actual business. 
  `);

  const liveURL = "https://dennyfeng-old.github.io/StanceLab-Final/";

  return (
    <ProjectInfoTemplate
      imgLogo={StanceLab}
      imgLightLogo={StanceLabLight}
      projectDescription={projectDescription_parsed}
      stackLogo={stanceLab_stack}
      liveURL={liveURL}
      heroImg={StanceLabHero}
      dutiesDescription={dutiesDescription}
      dutyFulfilledDescription={dutyFulfilledDescription_parsed}
      imgSnippets={stanceLab_snippets}
      learningDescription={learningDescription_parsed}
    />
  );
};

export default ProjectInfo;
