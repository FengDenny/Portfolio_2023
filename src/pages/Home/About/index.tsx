import React from "react";

type Props = {};

const index = (props: Props) => {
  const baseDiv =
    "before:absolute before:-right-10 before:h-0 before:w-0 before:border-solid before:border-t-172 before:border-l-40 before:border-b-215 before:border-t-transparent before:border-b-transparent before:border-l-color-white ";
  return (
    <div
      id="about"
      className={`relative  mt-60 flex h-96 w-10.5/12 gap-16 bg-color-white sm:w-11.4/12 md:w-11.5/12 ${baseDiv}
      `}
    >
      <h2 className="mx-auto w-4/6 text-color-description">Hello</h2>
    </div>
  );
};

export default index;
