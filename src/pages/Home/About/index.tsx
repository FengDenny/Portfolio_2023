import SectionLayout from "@/components/helper/SectionLayout";

type Props = {};

const index = (props: Props) => {
  const darkThemeStyle = "dark:text-color-white";

  const lightThemeStyle = "text-primary-100";

  return (
    <SectionLayout
      id="about"
      styling={`relative  mt-60 flex h-auto w-5/6 flex-col gap-2  
      `}
      whiteColorBGStyle="dark:bg-color-white bg-primary-100   rounded-tr-3xl rounded-br-full -inset-8  -skew-y-3 "
    >
      <h2 className="z-40 mx-auto w-4/6 pt-11 pl-10 text-lg text-color-white underline decoration-color-description underline-offset-4 dark:text-primary-300 sm:text-2xl">
        About me
      </h2>
      <div className="description-text relative  mx-auto w-4/6  pt-5 pl-10 font-normal text-color-white dark:text-color-description-normal ">
        <div className="sm:w-4.5/6 sm:text-lg ">
          <p className="pb-4">
            Hi there, I’m Denny. I have to thank
            <span className="pl-1 font-bold">Udemy.com</span> for helping me
            find my sense of belonging. I bought my first course on how to turn
            <span className=" pl-1 font-bold">
              Adobe Photoshop designs to responsive web application
            </span>
            . This course has helped me entered the
            <span className="pl-1 font-bold">web development world</span>.
          </p>
          <p className="pb-4">
            Since then, I decided to transition from majoring in psychology to
            <span className="px-1 font-bold">computer science</span>and this was
            the best decision I have ever made. Although, I found a suitable
            path for me. I would be lying, if I told you, I didn’t find this
            path difficult.
          </p>
          <p className="pb-4">
            My time as an undergraduate, I took on my
            <span className="pl-1 font-bold">first gig</span> helping a client
            create a single page application for their car shop business. I have
            graduated from a state university with a
            <span className="pl-1 font-bold">
              Bachelor of Science, Computer Science degree
            </span>
            . Along that way, I gained experience in
            <span className="pl-1 font-bold">teamwork</span>,
            <span className="pl-1 font-bold">soft skills</span>,
            <span className="pl-1 font-bold">hard skills</span>,
            <span className="pl-1 font-bold">autodidact skills</span>, and honed
            plenty of
            <span className="pl-1 font-bold">web development skills</span>.
          </p>{" "}
          <p className="pb-4">
            As of 2023, I am an
            <span className="px-1 font-bold">aspiring frontend engineer</span>
            trying to break into the tech industry with experience working with
            anything
            <span className="pl-1 font-bold">JavaScript</span> related.
            <span className="pl-1 ">Wish me luck</span>!
          </p>
        </div>
      </div>
    </SectionLayout>
  );
};

export default index;
