import React, { useState } from "react";
// import { tabs } from "@/Model/tabs";
import Tabs from "@/components/tab/Tab";
import Acquired from "./Acquired";
import Learning from "./Learning";
import AnimateOnScrollObserver from "@/components/helper/AnimateOnScrollObserver";
type Props = {};

const tabs = [
  {
    id: 1,
    label: "Acquired", // define Label
    Component: Acquired, // assign Component
  },
  {
    id: 2,
    label: "Currently Learning",
    Component: Learning,
  },
];
const index = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  return (
    <section
      id="stack"
      className={`relative mt-24 flex h-screen-70 w-full flex-col gap-2 sm:w-11.4/12 md:w-11.5/12 
`}
    >
      <h2 className="mx-auto flex w-4/6 justify-center underline decoration-color-description underline-offset-4 sm:text-2xl">
        Tech Stack
      </h2>
      <AnimateOnScrollObserver styling="animate-popIn ">
        <Tabs
          labelStyling="mx-auto h-auto pt-5 shadow-2xl w-5/6 sm:w-2/6 py-5 bg-color-white rounded-md mt-5 divide-y "
          primaryText="text-primary-100"
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
