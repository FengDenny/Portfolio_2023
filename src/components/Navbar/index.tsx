// Snippet tsrafce
import { Bars3Icon } from "@heroicons/react/24/solid";
import { navLinks } from "@/Model/navLinks";
import Link from "../Links/Link";
import { SelectedPage } from "@/Model/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import logo_png from "@/assets/logo_png.png";
import light_logo from "@/assets/light_logo.png";
import { useTheme } from "../helper/ThemeContext";
import { BiMoon, BiSun } from "react-icons/bi";
import Resume from "../../Denny_Feng's_Resume.pdf";

type Props = {
  isTopOfPage: boolean;
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  children: React.ReactNode;
};

function Navbar({
  isTopOfPage,
  selectedPage,
  isMenuToggled,
  setSelectedPage,
  setIsMenuToggled,
  children,
}: Props) {
  const flexBetween = "flex items-center justify-between";

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  const navbarBackground = isTopOfPage
    ? ""
    : "dark:bg-primary-300 bg-color-white  drop-shadow";

  const { theme, setTheme } = useTheme();

  const themeToggle = () => setTheme(!theme);

  const aLinkUnderLine =
    " bg-zeroThree  bg-0-100  bg-no-repeat transition-bgSize5sEaseInOut  hover:bg-OneHund3Pixel bg-gradient-lightPink";

  return (
    <nav className="text-primary-100 dark:text-color-white">
      <div
        className={`${navbarBackground} ${flexBetween}  fixed top-0 z-999 h-40 w-full  `}
      >
        <div className={`${flexBetween} relative top-5 mx-auto w-4/6`}>
          {/* LEFT SIDE */}
          <div className={`${flexBetween} w-2/6 gap-16 `}>
            {theme ? (
              <img src={logo_png} alt="logo" className="h-28 w-28 rotate-45" />
            ) : (
              <img
                src={light_logo}
                alt="logo"
                className="h-28 w-28 rotate-45"
              />
            )}
          </div>
          {/* RIGHT SIDE */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full `}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                {navLinks.map((items: any) => {
                  const { title } = items;

                  return (
                    <Link
                      page={`${title}`}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                      key={title}
                    />
                  );
                })}
              </div>
              <div className={`${flexBetween} gap-8`}>
                <button
                  className="focus:outline-none "
                  onClick={themeToggle}
                  aria-label="Theme toggle"
                >
                  {theme ? (
                    <BiSun
                      size={26}
                      className="transition-color fill-primary-pink delay-75 duration-75 hover:fill-color-white"
                    />
                  ) : (
                    <BiMoon
                      size={26}
                      className="transition-color fill-color-description  delay-75 duration-75 hover:fill-primary-300"
                    />
                  )}
                </button>
                <a
                  href={Resume}
                  target="_blank"
                  className={`${aLinkUnderLine} text-color-description hover:text-primary-pink dark:text-color-white dark:hover:text-primary-pink`}
                >
                  View Resume
                </a>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-primary-pink p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white hover:text-primary-300" />
            </button>
          )}
        </div>
      </div>
      {/* MOBILE MENU  MODAL*/}
      {!isAboveMediumScreens && children}
    </nav>
  );
}

export default Navbar;
