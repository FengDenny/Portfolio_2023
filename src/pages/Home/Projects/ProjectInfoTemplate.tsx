import { useState } from "react";
import { NavLink } from "react-router-dom";
import { view_projects } from "@/Model/view_projects";
import { useTheme } from "@/components/helper/ThemeContext";
import PageTitle from "@/components/Helmet";
type Props = {
  imgLogo: string;
  imgLightLogo?: string;
  helmetTitle: string;
  liveURL: string;
  heroImg: string;
  note?: string;
  projectDescription: React.ReactNode;
  dutiesDescription: React.ReactNode;
  dutyFulfilledDescription: React.ReactNode;
  learningDescription: React.ReactNode;
  stackLogo: {
    id: number;
    stack_title: string;
    stack_logo: string;
  }[];
  imgSnippets: {
    id: number;
    img_title: string;
    img_snippet: string;
  }[];
};

const ProjectInfoTemplate = ({
  note,
  projectDescription,
  helmetTitle,
  imgSnippets,
  stackLogo,
  imgLogo,
  imgLightLogo,
  liveURL,
  dutiesDescription,
  dutyFulfilledDescription,
  learningDescription,
  heroImg,
}: Props) => {
  const [projects, _] = useState<
    Array<{
      sectionID: string;
      project: string;
      to: string;
    }>
  >(view_projects);

  const tabLabelUnderline =
    "bg-zeroThree  bg-0-100  bg-no-repeat  hover:bg-OneHund3Pixel hover:dark:bg-gradient-white hover:bg-gradient-lightPink hover:transition-bgSize5sEaseInOut delay-75 duration-75 transition-all";

  const { theme } = useTheme();
  const viewIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

  return (
    <>
      <PageTitle pageTitle={helmetTitle} />
      <section
        className="relative mx-auto mt-60 flex  w-4/6
  flex-col 
   sm:flex-row"
      >
        <div>
          {theme ? (
            <img
              src={imgLogo}
              alt="logo"
              className="relative top-20 xs:mx-auto"
            />
          ) : (
            <img
              src={imgLightLogo}
              alt="logo"
              className="relative top-20 xs:mx-auto"
            />
          )}
          <p className="description-text relative   mt-24 w-5/6  text-xl text-color-description dark:text-color-white   xs:mx-auto sm:text-2xl md:w-7/12">
            {projectDescription}
          </p>
          <div className="xs:mx-auto xs:w-32">
            <h2 className="mt-6 text-xl text-primary-100 underline decoration-color-description underline-offset-4 dark:text-color-white">
              Tech Stack
            </h2>
            <div className="mt-8  inline-grid w-24 grid-cols-2 gap-4 sm:w-36 sm:grid-cols-3 md:w-80 md:grid-cols-6">
              {stackLogo.map((items) => {
                const { stack_title, stack_logo, id } = items;
                return (
                  <img
                    src={stack_logo}
                    alt={stack_title}
                    className="mx-auto h-12 w-12 "
                    key={id}
                  />
                );
              })}
            </div>
            <div className="mt-10 flex">
              <a
                className={`${tabLabelUnderline} cursor-pointer text-primary-pink hover:text-primary-pink-hover`}
                href={liveURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View live
              </a>
              <span className="ml-2 text-primary-100 dark:text-color-white">
                {viewIcon}
              </span>
            </div>
            <span className="description-text font-italic font-bold italic text-color-description">
              {note}
            </span>
          </div>
          <div className="mx-auto py-10 sm:mx-0 ">
            <img
              src={heroImg}
              alt="hero_snippet"
              className=" mt-5  w-96 rounded-lg drop-shadow-xl sm:w-8/12"
            />
          </div>
          <div className="flex flex-row  flex-wrap py-10  xs:flex-col md:justify-between">
            <div>
              <h2 className="mt-6 text-xl text-primary-100 underline decoration-color-description underline-offset-8 dark:text-color-white   xs:mx-auto xs:w-32">
                My Duties
              </h2>
              <p className="description-text relative  mt-8 w-5/6  text-xl text-color-description dark:text-color-white xs:mx-auto sm:text-2xl md:w-7/12  ">
                {dutiesDescription}
              </p>
            </div>
            <div className="flex  flex-col items-end">
              <h2 className="mt-24 items-start text-xl text-primary-100 underline decoration-color-description underline-offset-4  dark:text-color-white xs:mx-auto xs:w-40">
                Duties Fulfilled
              </h2>
              <p className="description-text relative  mt-8 w-5/6  text-xl text-color-description dark:text-color-white xs:mx-auto sm:left-9 sm:w-9/12 sm:text-2xl md:w-7/12  ">
                {dutyFulfilledDescription}
              </p>
            </div>
          </div>
          <div className="flex flex-row  flex-wrap  py-10 xs:flex-col  md:flex-nowrap   md:justify-between ">
            {imgSnippets.map((items) => {
              const { img_title, img_snippet, id } = items;
              return (
                <div className={`${id % 2 == 0 ? "mt-10 " : ""}`} key={id}>
                  <img
                    src={img_snippet}
                    alt={img_title}
                    className={`${
                      id % 2 == 0
                        ? "flex  flex-col items-end md:mt-60"
                        : "mt-6 "
                    } mx-auto  rounded-lg drop-shadow-xl sm:w-9/12 md:w-11/12`}
                    key={id}
                  />
                </div>
              );
            })}
          </div>
          <div className="mx-auto mt-10 w-9/12 py-24 md:w-11/12">
            <div className=" flex flex-col items-center">
              <h2 className="mt-6 flex text-xl text-primary-100 underline decoration-color-description underline-offset-8 dark:text-color-white xs:w-48 xs:items-center">
                My Learnings
              </h2>
              <p className="description-text relative mt-8 ml-8 w-96 text-xl text-color-description dark:text-color-white xs:w-80 xs:px-10 xs:text-lg sm:text-2xl md:w-7/12  ">
                {learningDescription}
              </p>
            </div>
          </div>
          <div className="py-10 ">
            <h2 className="text-color-description underline decoration-color-description underline-offset-4 dark:text-color-white  ">
              View Projects
            </h2>
            <ul className="mt-5 ">
              {projects.map((items) => {
                const { to, sectionID, project } = items;

                return (
                  <li className="py-2" key={sectionID}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary-pink"
                          : `${tabLabelUnderline}  text-primary-300 hover:text-primary-pink-hover dark:text-color-description  hover:dark:text-primary-pink-hover  `
                      }
                    >
                      {project}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="py-5 pb-10  ">
            <h2 className="text-color-description underline decoration-color-description underline-offset-4  dark:text-color-white">
              Upcoming Project
            </h2>
            <span className="description-text relative top-2 text-lg text-color-description">
              To be announced soon. Stay tuned!
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectInfoTemplate;
