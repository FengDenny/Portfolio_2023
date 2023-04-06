import React from "react";
import notFoundDark from "@/assets/404_dark.svg";
import notFoundLight from "@/assets/404_light.svg";
import { useTheme } from "@/components/helper/ThemeContext";

type Props = {};

const index = (props: Props) => {
  const { theme } = useTheme();

  return (
    <section className="mx-auto mt-44 w-4/6 py-10">
      <div className="animate-[slideLeft_2s_ease-out_forwards]">
        {theme ? (
          <img
            src={notFoundDark}
            alt="dark-theme-404"
            className="mx-auto w-96 md:w-5/12"
          />
        ) : (
          <img
            src={notFoundLight}
            alt="light-theme-404"
            className="mx-auto w-96  md:w-5/12"
          />
        )}
      </div>
      <div
        className="mx-auto animate-appear pt-8 text-xl 
      text-color-description dark:text-color-white xs:w-80
       sm:pl-12  md:w-4/6 md:pl-0"
      >
        Oops, looks like this page is currently under development. Please, come
        back later.
      </div>
    </section>
  );
};

export default index;
