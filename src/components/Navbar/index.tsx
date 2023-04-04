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

  const darkThemeStyle = "dark:text-color-white";

  const lightThemeStyle = "text-primary-100";

  return (
    <nav className={`${darkThemeStyle} ${lightThemeStyle}`}>
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
                  className="focus:outline-none"
                  onClick={themeToggle}
                  aria-label="Theme toggle"
                >
                  {theme ? <BiSun size={24} /> : <BiMoon size={24} />}
                </button>
                <button>Download Resume</button>
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
