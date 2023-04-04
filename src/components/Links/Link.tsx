import React from "react";
import { SelectedPage } from "@/Model/types";
import { HashLink } from "react-router-hash-link";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  styling?: string;
};

function Link({ page, selectedPage, setSelectedPage, styling }: Props) {
  const toLoweredCase = page.toLowerCase().replace(" ", "") as SelectedPage;

  const aLinkUnderLine =
    " bg-zeroThree  bg-0-100  bg-no-repeat transition-bgSize5sEaseInOut  hover:bg-OneHund3Pixel bg-gradient-lightPink ";

  return (
    <HashLink
      to={`/#${toLoweredCase}`}
      className={`text-lg text-color-description transition
      duration-200 hover:text-primary-pink dark:text-color-white dark:hover:text-primary-pink ${styling} ${
        selectedPage === toLoweredCase
          ? `text-primary-pink dark:text-primary-pink`
          : ""
      } 
    
      `}
      onClick={() => setSelectedPage(toLoweredCase)}
    >
      <span className={`${aLinkUnderLine} `}>{page}</span>
    </HashLink>
  );
}

export default Link;
