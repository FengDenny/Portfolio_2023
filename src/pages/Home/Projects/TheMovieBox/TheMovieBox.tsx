import ProjectTemplate from "../ProjectTemplate";
import TMBHero from "@/assets/project_image/tmb_hero.png";

type Props = {};

const TheMovieBox = (props: Props) => {
  return (
    <ProjectTemplate
      image={TMBHero}
      alt="TheMovvieBox"
      spanH4="TheMovieBox"
      h4=", a full stack 
application, integrating TheMovieDatabase (TMDB) API and Firebase to display new or exisiting movies and shows."
      pageURL="/themoviebox"
    />
  );
};

export default TheMovieBox;
