import React from "react";
import { SelectedPage } from "@/Model/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const toLoweredCase = page.toLowerCase().replace(" ", "") as SelectedPage;

  const aLinkUnderLine =
    "border-b-0  bg-zeroThree  bg-0-100  bg-no-repeat transition-bgSize5sEaseInOut  hover:bg-OneHund3Pixel bg-0-100";

  return (
    <a
      id={`#${toLoweredCase}`}
      href={`#${toLoweredCase}`}
      className={` hover:text-primary-pink transition duration-200 ${
        selectedPage === toLoweredCase ? `text-primary-pink` : ""
      } 
    
      `}
      onClick={() => setSelectedPage(toLoweredCase)}
    >
      <span className={`${aLinkUnderLine} bg-gradient-lightPink  `}>
        {page}
      </span>
    </a>
  );
}

export default Link;
