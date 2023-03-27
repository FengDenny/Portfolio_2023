import React from "react";
import { SelectedPage } from "@/Model/types";
import { HashLink } from "react-router-hash-link";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const toLoweredCase = page.toLowerCase().replace(" ", "") as SelectedPage;

  const aLinkUnderLine =
    " bg-zeroThree  bg-0-100  bg-no-repeat transition-bgSize5sEaseInOut  hover:bg-OneHund3Pixel bg-gradient-lightPink";

  console.log(window.location.pathname === "/");

  return (
    <HashLink
      to={`/#${toLoweredCase}`}
      className={`transition duration-200 hover:text-primary-pink ${
        selectedPage === toLoweredCase ? `text-primary-pink` : ""
      } 
    
      `}
      onClick={() => setSelectedPage(toLoweredCase)}
    >
      <span className={`${aLinkUnderLine} `}>{page}</span>
    </HashLink>
  );
}

export default Link;
