import ProjectInfoTemplate from "../ProjectInfoTemplate";
import TMB from "@/assets/project_logo/TMB.png";
import TMBLight from "@/assets/project_logo/TMB_light.png";
import TMBHero from "@/assets/project_image/tmb_hero.png";
import parse from "html-react-parser";
import { tmb_stack } from "@/Model/tech_stack";
import { tmb_snippets } from "@/Model/image_snippets";

type Props = {};

const ProjectInfo = (props: Props) => {
  const helmetTitle =
    "Denny Feng | TheMovieBox -  created with Firebase and TMDB API";

  const projectDescription_parsed = parse(
    `I have created this project as one of my full stack project for my ongoing project called 
    <span className="font-bold">Figma2Dev</span>. Using <span className="font-bold">high-fidelity mockups</span>, I would tweak it then turn it into pixel-perfect web applications using modern frameworks and different types of tech stack. The core concept of  developing  <span className="font-bold">TheMovieBox</span> was to learn <span className="font-bold">Firebase</span> from scratch.
    `
  );

  const dutiesDescription = parse(`
  The core of this project was to challenge myself to see if I can turn a design to a full fledge application using  <span className="font-bold">Firebase</span> that had the following features:  <span className="font-bold">Infinite scrolling</span>, <span className="font-bold">YouTube embedded trailer hero section</span>, <span className="font-bold">authentication</span>, <span className="font-bold">search system</span>, and many more. <div className="mt-4"></div>
  My most favorite feature that I enjoyed implementing was <span className="font-bold">My List</span>, which had the same similarities as Netflix, My List.
   `);

  const dutyFulfilledDescription_parsed =
    parse(`To implement all these different features, 
    <span className="font-bold">researching</span>, and  <span className="font-bold">planning</span> played a big part of this project.
    With the help of  <span className="font-bold">The Movie Database API</span>, I was able to show data for different movies and tv shows.
    Using <span className="font-bold">Firebase</span>, it enabled me to create a full <span className="font-bold">authentication system</span>, and <span className="font-bold">My List</span>. 
    <div className="mt-5"></div>
    With <span className="font-bold">Firebase</span>, I was able to create an algorithm for <span className="font-bold">My List</span>, which featured cross-checking authenticated users data, letting different users append their favorite entertainments onto their My List page.
  `);

  const learningDescription_parsed =
    parse(`Creating this project helped me gained a lot of learning experience, but some of the most important ones were working with <span className="font-bold">Firebase</span>, 
    <span className="font-bold">backend creation</span>,   <span className="font-bold"> security issues</span>, and <span className="font-bold"> API integration</span>.
    <div className="mt-5"></div>
    As I was building the API for My List on Firebase, I was unable to store different data for users. Instead, it would always store and show the same data, even though different accounts are being logged in. The issues was using <span className="font-bold">Redux</span> for data persistence, and not Firebase built-in methods. 
    <div className="mt-5"></div>
    After carefully reading the Firebase documentations, I found a simple fix. All I needed to do was retrieve data from users collection, checking the user identification number to see if it matches with the current user. If so, append the data to its own collection. 
    <div className="mt-5"></div>
    After making this simple mistake, I learned the usefulness of documentations and why it is a top priority. Whenever I need a reference, I would use documentations as my research starting point.
  `);

  const liveURL = "https://themoviebox-f40b4.web.app/";

  return (
    <ProjectInfoTemplate
      helmetTitle={helmetTitle}
      imgLogo={TMB}
      imgLightLogo={TMBLight}
      projectDescription={projectDescription_parsed}
      stackLogo={tmb_stack}
      liveURL={liveURL}
      heroImg={TMBHero}
      dutiesDescription={dutiesDescription}
      dutyFulfilledDescription={dutyFulfilledDescription_parsed}
      imgSnippets={tmb_snippets}
      learningDescription={learningDescription_parsed}
    />
  );
};

export default ProjectInfo;
