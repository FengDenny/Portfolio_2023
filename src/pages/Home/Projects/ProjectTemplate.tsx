import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  image: string;
  alt: string;
  imgStyling?: string;
  spanH4: string;
  h4: string;
  pageURL: string;
};

const ProjectTemplate = ({
  image,
  alt,
  imgStyling,
  h4,
  spanH4,
  pageURL,
}: Props) => {
  const navigate = useNavigate();
  const buttonHoverEffect =
    "hover:-translate-y-1 hover:bg-primary-pink-hover hover:text-color-white transition delay-150 duration-150 ease-in-out hover:scale-110";
  return (
    <div className="flex flex-col items-center sm:items-start">
      <img
        src={image}
        alt={alt}
        className={`${imgStyling} mt-5 w-8/12 rounded-lg shadow-2xl sm:w-6/12`}
      />
      <h4 className="description-text mt-5 w-4/6 font-normal text-color-white sm:w-3/6">
        <span className="font-bold">{spanH4}</span>
        {h4}
      </h4>
      <button
        onClick={() => navigate(pageURL)}
        className={`${buttonHoverEffect}   mt-4 h-10 w-40	 rounded-lg border-2 border-primary-pink bg-primary-pink  text-sm text-primary-300 shadow-2xl sm:text-lg md:w-36 `}
      >
        View Project
      </button>
    </div>
  );
};

export default ProjectTemplate;
