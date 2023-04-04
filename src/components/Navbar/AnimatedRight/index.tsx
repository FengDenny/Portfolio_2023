import React from "react";
import { SelectedPage } from "@/Model/types";
import { navLinks } from "@/Model/navLinks";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "../../Links/Link";
import { useTheme } from "@/components/helper/ThemeContext";
import { BiMoon, BiSun } from "react-icons/bi";
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
  return (
    <div
      className={`fixed right-0 bottom-0 z-1000 h-full w-[300px]  drop-shadow-xl ${
        isMenuToggled ? activeSide : hiddenSide
      } ${darkThemeStyle} ${lightThemeStyle}`}
    >
      {/* CLOSE ICON */}
      <div className="flex justify-end p-12">
        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
          <XMarkIcon className="h-6 w-6 text-gray-400" />
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
            {theme ? <BiSun size={30} /> : <BiMoon size={30} />}
          </button>
          {/* <button className="relative right-10">Download Resume</button> */}
        </div>
      </div>
    </div>
  );
};

export default index;
