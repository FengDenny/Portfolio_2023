import React from "react";
import ProfilePicture from "@/assets/profile_pic.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaRegHandPointDown } from "react-icons/fa";

type Props = {};

const index = (props: Props) => {
  const darkThemeStyle = "dark:text-color-white";

  const lightThemeStyle = "text-primary-100";

  const afterCardDesign =
    "after:absolute after:top-0 after:block after:h-full after:w-full after:origin-top-left  after:skew-Y-17 after:bg-primary-100 after:dark:bg-color-white after:transition-colors after:delay-100 after:duration-100 after:ease-in-out";

  const smallViewPortCardDesign = "sm:w-3/6 md:w-4/6 sm:top-2  sm:right-0";

  const socialsHoverEffect =
    "transtion delay-75 duration-100 ease-in hover:scale-110 hover:text-primary-pink-hover";

  return (
    <section
      className="relative mx-auto flex w-4/6  animate-fadeIn flex-col
      justify-between 
     sm:flex-row"
    >
      <div className="flex grow basis-4/5 flex-col">
        <div
          className="mb-10 h-24 w-48 rounded-lg
          bg-primary-pink shadow-xl dark:bg-primary-300"
        >
          <div className="flex flex-row">
            <h2
              className=" animate-translateYBTop py-4 pl-4 text-primary-300
            underline decoration-color-description underline-offset-8 dark:text-color-white"
            >
              Denny Feng
            </h2>

            <span
              className="relative top-6 left-1 animate-float
               text-xl text-color-description dark:text-primary-pink"
            >
              <FaRegHandPointDown />
            </span>
          </div>

          <h4 className="relative left-2 animate-translateYTBottom pl-2 text-sm text-primary-300 dark:text-color-white">
            Front End Engineer
          </h4>
        </div>

        <h2
          className={`${darkThemeStyle} ${lightThemeStyle} w-64 animate-inRight  text-2xl xs:animate-none sm:w-80 
              sm:text-3xl md:w-10/12 md:text-4xl md:leading-normal`}
        >
          Learning and building anything to gain hands-on experience
          <span className="text-lg text-primary-pink-hover dark:text-primary-yellow">
            .
          </span>
        </h2>

        <span className="description-text animate-inLeft pt-2 text-base  text-color-description xs:animate-none sm:text-lg">
          Computer rigs, websites, frameworks, anything really
          <span className="text-lg text-primary-pink-hover dark:text-primary-yellow">
            ..
          </span>
        </span>

        <ul className="flex flex-row pt-4 text-3xl">
          <li>
            <a
              href="https://github.com/FengDenny"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={`text-primary-pink ${socialsHoverEffect}`} />
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
      <div
        className={`relative top-5 right-4 h-64 w-full  origin-bottom
        -skew-x-6 animate-popIn  overflow-hidden rounded-xl shadow-2xl
         xs:animate-none
        ${smallViewPortCardDesign} ${afterCardDesign}`}
      >
        <img
          src={ProfilePicture}
          alt="Denny's picture"
          className="relative bottom-10 z-10 mx-auto w-48
          "
        />
      </div>
    </section>
  );
};

export default index;
