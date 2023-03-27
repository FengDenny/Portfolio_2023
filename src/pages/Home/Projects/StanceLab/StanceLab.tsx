import SLHero from "@/assets/project_image/stancelab_hero.png";
import ProjectTemplate from "../ProjectTemplate";

type Props = {};

const StanceLab = (props: Props) => {
  return (
    <ProjectTemplate
      image={SLHero}
      alt="StanceLab"
      spanH4="Stance Lab"
      h4=", a single page
    application, redesigned and developed by a team of two."
      pageURL="/stancelab"
    />
  );
};

export default StanceLab;
