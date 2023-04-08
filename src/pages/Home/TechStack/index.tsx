import { useState } from "react";
import Tabs from "@/components/tab/Tab";
import Acquired from "./Acquired";
import Learning from "./Learning";
import AnimateOnScrollObserver from "@/components/helper/AnimateOnScrollObserver";
type Props = {};

const tabs = [
  {
    id: 1,
    label: "Acquired",
    Component: Acquired,
  },
  {
    id: 2,
    label: "Currently Learning",
    Component: Learning,
  },
];
const index = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  const darkThemeStyle = "dark:text-color-white";

  const lightThemeStyle = "text-primary-100";

  return (
    <section
      id="stack"
      className={`relative mt-24 flex h-screen-70 w-full flex-col gap-2 sm:w-11.4/12 md:w-11.5/12 
`}
    >
      <h2
        className={`${darkThemeStyle} ${lightThemeStyle} mx-auto flex w-4/6 justify-center underline decoration-color-description underline-offset-4 sm:text-2xl`}
      >
        Tech Stack
      </h2>

      <AnimateOnScrollObserver styling="animate-appear">
        <Tabs
          labelStyling="mx-auto h-auto pt-5 shadow-2xl w-5/6 sm:w-2/6 py-5 dark:bg-color-white 
           bg-primary-100  rounded-md mt-5 divide-y 
           transition-colors delay-100 duration-100 ease-in-out
           "
          selectedTab={selectedTab}
          onClick={setSelectedTab}
          tabs={tabs}
          onMouseEnter={setSelectedTab}
        />
      </AnimateOnScrollObserver>
    </section>
  );
};

export default index;
