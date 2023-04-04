import React from "react";
import { SelectedPage } from "@/Model/types";
import { navLinks } from "@/Model/navLinks";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "../../Links/Link";
import { useTheme } from "@/components/helper/ThemeContext";
import { BiMoon, BiSun } from "react-icons/bi";
import Resume from "../../../Denny_Feng's_Resume.pdf";
type Props = {
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
const index = ({
  isMenuToggled,
  setIsMenuToggled,
  selectedPage,
  setSelectedPage,
}: Props) => {
  const activeSide = "transform transition-all duration-100 ";
  const hiddenSide = "transition-all duration-100 translate-x-80 transform ";

  const { theme, setTheme } = useTheme();

  const themeToggle = () => setTheme(!theme);

  const darkThemeStyle = "dark:text-color-white dark:bg-primary-300";

  const lightThemeStyle = "text-primary-100 bg-color-white";

  const aLinkUnderLine =
    " bg-zeroThree  bg-0-100  bg-no-repeat transition-bgSize5sEaseInOut  hover:bg-OneHund3Pixel bg-gradient-lightPink";
  return (
    <div
      className={`fixed right-0 bottom-0 z-1000 h-full w-[300px]  drop-shadow-xl ${
        isMenuToggled ? activeSide : hiddenSide
      } ${darkThemeStyle} ${lightThemeStyle}`}
    >
      {/* CLOSE ICON */}
      <div className="flex justify-end p-12">
        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
          <XMarkIcon
            className="transition-color h-8 w-8 text-gray-400 delay-75 duration-75
          hover:text-primary-300 dark:text-color-white dark:hover:text-color-description"
          />
        </button>
      </div>
      {/* MENU ITEMS */}
      <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
        {navLinks.map((items: any) => {
          const { title } = items;
          return (
            <Link
              page={`${title}`}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              key={title}
            />
          );
        })}
        <div className={`flex flex-col items-start gap-8`}>
          <button
            className="focus:outline-none"
            onClick={themeToggle}
            aria-label="Theme toggle"
          >
            {theme ? (
              <BiSun
                size={30}
                className="transition-color fill-primary-pink delay-75 duration-75 hover:fill-color-white"
              />
            ) : (
              <BiMoon
                size={30}
                className="transition-color fill-color-description  delay-75 duration-75 hover:fill-primary-300"
              />
            )}
          </button>
          <a
            href={Resume}
            target="_blank"
            className={`${aLinkUnderLine} text-lg
            text-color-description hover:text-primary-pink dark:text-color-white dark:hover:text-primary-pink`}
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
