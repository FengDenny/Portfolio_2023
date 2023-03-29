import React from "react";
import Typewriter from "./Typewriter";

type Props = {
  content: string;
  delay: number;
  styling: string;
  tags?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
};

function index({}: Props) {
  const snippet = `// O(n) 
function Stack(stack) {
  const current = [];
  stack && stack.map((item) => current.push(item));
  return current;
}
let acquired = [
  "React.js",
  "JavaScript",
  "Redux",
  "Styled components",
  "GraphQL",
  "Sass",
  "Firebase"
];
let learning = ["Tailwind CSS", "TypeScript"]
console.log("Acquired:", Stack(acquired));
console.log("Currently learning:", Stack(learning));`;
  return (
    <section
      id="about"
      className={`relative mt-12 flex h-screen-90 w-full flex-col gap-2 sm:w-11.4/12 md:w-11.5/12 
  `}
    >
      <div className="mx-auto flex w-4/6 justify-center underline decoration-color-description underline-offset-4 sm:text-2xl">
        Tech Stack
      </div>

      <Typewriter
        content={snippet}
        delay={30}
        tags={"h5"}
        styling={"mx-auto shadow-2xl"}
      />
    </section>
  );
}

export default index;
