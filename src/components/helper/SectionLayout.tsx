import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  styling?: string;
  id?: string;
  whiteColorBGStyle?: string;
  primaryColorBGStyle?: string;
};

const SectionLayout = ({
  id,
  styling,
  whiteColorBGStyle,
  primaryColorBGStyle,
  children,
}: Props) => {
  return (
    <section id={id} className={`${styling} relative`}>
      <span
        className={`${whiteColorBGStyle} ${primaryColorBGStyle} absolute  shadow-2xl`}
        aria-hidden="true"
      ></span>
      {children}
    </section>
  );
};

export default SectionLayout;
