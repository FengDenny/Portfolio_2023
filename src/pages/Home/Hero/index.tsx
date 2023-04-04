import React from "react";
import ProfilePicture from "@/assets/profile_pic.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnimateOnScrollObserver from "@/components/helper/AnimateOnScrollObserver";
import { FaRegHandPointDown } from "react-icons/fa";

type Props = {};

const index = (props: Props) => {
  const darkThemeStyle = "dark:text-color-white";

  const lightThemeStyle = "text-primary-100";

  const afterCardDesign =
    "after:absolute after:top-0 after:block after:h-full after:w-full after:origin-top-left  after:skew-Y-17 after:bg-primary-100 after:dark:bg-color-white";

  const smallViewPortCardDesign = "sm:w-3/6 md:w-4/6 sm:top-2  sm:right-0";

  const socialsHoverEffect =
    "transtion delay-75 duration-100 ease-in hover:scale-110 hover:text-primary-pink-hover";

  return (
    <AnimateOnScrollObserver styling="animate-fadeIn opacity-0 transition ease-in-expo">
      <section
        className="relative mx-auto flex w-4/6  flex-col
      justify-between 
      sm:flex-row"
      >
        <div className="flex grow basis-4/5 flex-col">
          <div
            className="mb-10 h-24 w-48 rounded-lg
          bg-primary-pink shadow-xl dark:bg-primary-300"
          >
            <div className="flex flex-row">
              <AnimateOnScrollObserver styling="animate-translateYBTop ">
                <h2
                  className="py-4 pl-4 text-primary-300
            underline
            decoration-color-description underline-offset-8 dark:text-color-white 
            "
                >
                  Denny Feng
                </h2>
              </AnimateOnScrollObserver>
              <AnimateOnScrollObserver styling="animate-float">
                <span
                  className="relative top-6 left-1 text-xl
               text-color-description dark:text-primary-pink"
                >
                  <FaRegHandPointDown />
                </span>
              </AnimateOnScrollObserver>
            </div>
            <AnimateOnScrollObserver styling="animate-translateYTBottom">
              <h4 className="relative left-2 pl-2 text-sm text-primary-300 dark:text-color-white">
                Front End Engineer
              </h4>
            </AnimateOnScrollObserver>
          </div>

          <AnimateOnScrollObserver styling="animate-inRight ">
            <h2
              className={`${darkThemeStyle} ${lightThemeStyle} w-64 text-2xl  sm:w-80 sm:text-3xl md:w-10/12 
              md:text-4xl md:leading-normal`}
            >
              Learning and building anything to gain hands-on experience
              <span className="text-lg text-primary-pink-hover dark:text-primary-yellow">
                .
              </span>
            </h2>
          </AnimateOnScrollObserver>
          <AnimateOnScrollObserver styling="animate-inLeft">
            <span className="description-text  pt-2 text-base  text-color-description sm:text-lg">
              Computer rigs, websites, frameworks, anything really
              <span className="text-lg text-primary-pink-hover dark:text-primary-yellow">
                ..
              </span>
            </span>
          </AnimateOnScrollObserver>
          <ul className="flex flex-row pt-4 text-3xl">
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
        <div
          className={`relative top-5 right-4 h-64 w-full  origin-bottom
        -skew-x-6  animate-popIn overflow-hidden rounded-xl
         shadow-2xl
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
    </AnimateOnScrollObserver>
  );
};

export default index;
