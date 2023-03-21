import React from "react";
import ProfilePicture from "@/assets/profile_pic.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {};

const index = (props: Props) => {
  const afterCardDesign =
    "after:absolute after:top-0 after:block after:h-full after:w-full after:origin-top-left  after:skew-Y-17 after:bg-primary-300";

  const smallViewPortCardDesign = "sm:w-3/6 md:w-4/6 sm:top-2  sm:right-0";

  const socialsHoverEffect =
    "transtion delay-75 duration-100 ease-in hover:scale-110 hover:text-primary-pink-hover";

  return (
    <div
      className="relative mx-auto flex w-4/6 animate-fadeIn flex-col
      justify-between opacity-0 transition ease-in-expo
      sm:flex-row"
    >
      <div className="flex grow basis-4/5 flex-col">
        <h2
          className="
          w-64 animate-inRight text-2xl  sm:w-80 sm:text-3xl md:w-10/12 
          md:text-4xl md:leading-normal
        "
        >
          Learning and building anything to gain hands-on experience
          <span className="text-base text-primary-yellow">.</span>
        </h2>
        <span className="description-text animate-inLeft pt-2 text-base  text-color-description sm:text-lg">
          Computer rigs, websites, frameworks, anything really
          <span className="text-base text-primary-yellow">..</span>
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
        -skew-x-6  animate-popIn overflow-hidden rounded-xl
        bg-primary-300 shadow-2xl
        ${smallViewPortCardDesign} ${afterCardDesign}`}
      >
        <img
          src={ProfilePicture}
          alt="Denny's picture"
          className="relative bottom-10 z-10 mx-auto w-48
          "
        />
      </div>
    </div>
  );
};

export default index;
