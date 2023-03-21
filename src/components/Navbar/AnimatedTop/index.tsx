import React from "react";
import { SelectedPage } from "@/Model/types";
import { navLinks } from "@/Model/navLinks";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "../Links/Link";
import useMediaQuery from "@/hooks/useMediaQuery";

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
  const activeSide = "transform transition-all duration-700 ";

  const hiddenSide = "transition-all duration-700 -translate-y-full";

  const isBelowMediumScreens = useMediaQuery("(max-width:662px)");

  return (
    <div className="relative">
      <div
        className={`absolute inset-x-0 top-0  z-40 h-auto w-screen bg-primary-100 drop-shadow-xl ${
          isMenuToggled ? activeSide : hiddenSide
        } `}
      >
        {/* CLOSE ICON */}
        <div className="flex justify-end p-12">
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <XMarkIcon className="h-6 w-6 text-color-white hover:text-primary-pink" />
          </button>
        </div>
        {/* MENU ITEMS */}
        <div
          className={`flex gap-10 text-2xl   ${
            isBelowMediumScreens
              ? " flex-col items-center"
              : "ml-[33%] flex-row  "
          }`}
        >
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
        </div>
        <div
          className={`flex gap-5 pt-3 text-2xl ${
            isBelowMediumScreens
              ? " flex-col items-center"
              : "ml-[33%] flex-row "
          }`}
        >
          <p>Theme toggle</p>
          <button>Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default index;
