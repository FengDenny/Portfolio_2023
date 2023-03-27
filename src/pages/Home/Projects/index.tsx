import { useState } from "react";
import SectionLayout from "@/components/helper/SectionLayout";
import Tabs from "@/components/tab/Tab";
import StanceLab from "./StanceLab/StanceLab";
import TheMovieBox from "./TheMovieBox/TheMovieBox";
import WarframeLeeter from "./WarframeLeeter/WarframeLeeter";
import StanceLabLogo from "@/assets/project_logo/StanceLab.png";
import TMBLogo from "@/assets/project_logo/TMB.png";
import WFLLogo from "@/assets/project_logo/WFL.png";

type Props = {};
const tabs = [
  {
    id: 1,
    image: StanceLabLogo,
    Component: StanceLab,
  },
  {
    id: 2,
    image: TMBLogo,
    Component: TheMovieBox,
  },
  {
    id: 3,
    image: WFLLogo,
    Component: WarframeLeeter,
  },
];
const index = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  return (
    <SectionLayout
      id="projects"
      styling={`relative flex  w-full flex-col gap-2   
  `}
      primaryColorBGStyle="bg-primary-300  -inset-8 rounded-tl-3-xl rounded-bl-3xl"
    >
      <h2 className="z-40 mx-auto flex w-4/6  justify-center pt-24 text-lg text-color-white underline decoration-color-description underline-offset-4 sm:justify-end sm:text-2xl">
        Projects
      </h2>
      <Tabs
        imageStyling="relative mx-auto h-screen pt-5  w-5/6 sm:w-8/12 py-5  rounded-md mt-10  z-40 flex 
        flex-col"
        primaryText="text-primary-100"
        selectedTab={selectedTab}
        onClick={setSelectedTab}
        tabs={tabs}
        onMouseEnter={setSelectedTab}
      />
    </SectionLayout>
  );
};

export default index;
