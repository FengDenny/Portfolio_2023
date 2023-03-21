import React from "react";
import { SelectedPage } from "@/Model/types";
import { navLinks } from "@/Model/navLinks";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "../Links/Link";
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
  const hiddenSide = "transition-all duration-700 -translate-x-80 transform";
  return (
    <div
      className={`fixed left-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl ${
        isMenuToggled ? activeSide : hiddenSide
      }`}
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
      </div>
    </div>
  );
};

export default index;
