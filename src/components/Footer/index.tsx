import React from "react";
import logo_png from "@/assets/logo_png.png";
import light_logo from "@/assets/light_logo.png";
import Link from "@/components/Links/Link";
import { navLinks } from "@/Model/navLinks";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../helper/ThemeContext";
import { SelectedPage } from "@/Model/types";
import email from "@/assets/email.png";
import emailDark from "@/assets/email_dark.png";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const index = ({ selectedPage, setSelectedPage }: Props) => {
  const { theme } = useTheme();

  const socialsHoverEffect =
    "transtion delay-75 duration-100 ease-in hover:scale-110 hover:text-primary-pink-hover";

  return (
    <footer className="bg-color-white py-24   dark:bg-primary-300">
      <div className="mx-auto flex  w-4/6  flex-col justify-between sm:flex-row">
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
          <h4 className="description-text  text-xl font-bold text-primary-300 dark:text-color-white">
            © 2023 Denny Feng.
          </h4>
        </div>
        <div
          className={`relative top-12  mx-auto grid grid-cols-3  gap-4
          text-sm text-primary-100
          dark:text-color-white
          sm:mx-0 sm:grid-cols-2 sm:gap-x-4`}
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
        <div className="relative top-16 sm:top-12">
          <div className="flex flex-row justify-center py-4 ">
            {theme ? (
              <img src={emailDark} alt="email" className="" />
            ) : (
              <img src={email} alt="email" />
            )}
            <span className="description-text text-color-primary-100 relative top-1 px-2 dark:text-color-white">
              fengdennyy@gmail.com
            </span>
          </div>

          <ul className="flex flex-row justify-center pt-4 text-3xl sm:justify-between">
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
