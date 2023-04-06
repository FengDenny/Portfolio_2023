import React from "react";
import logo_png from "@/assets/logo_png.png";
import light_logo from "@/assets/light_logo.png";
import Link from "@/components/Links/Link";
import { navLinks } from "@/Model/navLinks";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../helper/ThemeContext";
import { SelectedPage } from "@/Model/types";
import email from "@/assets/email_light.svg";
import emailDark from "@/assets/email_dark.svg";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const index = ({ selectedPage, setSelectedPage }: Props) => {
  const { theme } = useTheme();

  const socialsHoverEffect =
    "transtion delay-75 duration-100 ease-in hover:scale-110 hover:text-primary-pink-hover";

  return (
    <footer className="bg-color-white py-20   transition-colors  ease-in-out dark:bg-primary-300">
      <div className="mx-auto flex  w-4/6  flex-col justify-between md:flex-row">
        <div className="mx-auto sm:mx-0">
          {theme ? (
            <img
              src={logo_png}
              alt="logo"
              className="h-32 w-32 rotate-45 sm:h-28 sm:w-28"
            />
          ) : (
            <img
              src={light_logo}
              alt="logo"
              className="h-36 w-36 rotate-45 sm:h-28 sm:w-28"
            />
          )}
          <h4 className="description-text  relative text-xl text-primary-300 dark:text-color-white md:top-12">
            © 2023 Denny Feng.
          </h4>
        </div>
        <div
          className={`relative top-12 mx-auto  grid grid-cols-3 gap-4  text-sm
          text-primary-100 dark:text-color-white
          below397:grid-cols-1 sm:mx-0
          sm:gap-x-4 md:top-14 md:grid-cols-2`}
        >
          {navLinks.map((items: any) => {
            const { title } = items;

            return (
              <Link
                page={`${title}`}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                key={title}
                styling="h-6"
              />
            );
          })}
        </div>
        <div className="relative top-12 below768:mx-auto xs:top-12  selection:md:mx-0">
          <div className="relative flex flex-row below397:flex-col below768:top-4 sm:pt-4 md:top-0 md:pt-0 ">
            {theme ? (
              <img
                src={emailDark}
                alt="email"
                className="mx-auto w-24 below397:w-32 sm:w-20"
              />
            ) : (
              <img
                src={email}
                alt="email"
                className="w-24 below397:w-32 xs:mx-auto sm:w-20"
              />
            )}
            <span
              className="description-text text-color-primary-100 relative top-8  px-2  dark:text-color-white xs:mx-auto sm:top-8
            
            "
            >
              fengdennyy@gmail.com
            </span>
          </div>

          <ul
            className="flex flex-row justify-center pt-10 text-3xl 
          sm:pl-8 md:justify-between"
          >
            <li>
              <a
                href="https://github.com/FengDenny"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className={`text-primary-pink ${socialsHoverEffect}`}
                />
              </a>
            </li>

            <li className="pl-3">
              <a
                href="https://www.linkedin.com/in/denny-feng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  className={`text-primary-pink ${socialsHoverEffect}
             `}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default index;
