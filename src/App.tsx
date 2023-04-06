import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import AnimatedRight from "@/components/Navbar/AnimatedRight";
import { SelectedPage } from "@/Model/types";
import HomePage from "@/pages/Home";
import StanceLabProject from "@/pages/Home/Projects/StanceLab/ProjectInfo";
import TMBProject from "@/pages/Home/Projects/TheMovieBox/ProjectInfo";
import WFLProject from "@/pages/Home/Projects/WarframeLeeter/ProjectInfo";
import NotFound from "@/pages/404";
import { useRoutes, Navigate } from "react-router-dom";

import { ThemeContextProvider } from "./components/helper/ThemeContext";

import Footer from "@/components/Footer";

function App() {
  const { Home } = SelectedPage;

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY == 0) {
        setIsTopOfPage(true);
        setSelectedPage(Home);
      }

      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Main = () => {
    let routes = useRoutes([
      { path: "/", element: <HomePage /> },
      { path: "/stancelab", element: <StanceLabProject /> },
      { path: "/themoviebox", element: <TMBProject /> },
      { path: "/warframeleeter", element: <WFLProject /> },
      { path: "/404", element: <NotFound /> },
      { path: "*", element: <Navigate to="/404" replace /> },
    ]);

    return routes;
  };

  const stickyFooterStyling = "flex h-screen flex-col justify-between";

  return (
    <ThemeContextProvider>
      <div
        className={`${stickyFooterStyling} app bg-color-white transition-colors delay-100 duration-100 ease-in-out dark:bg-primary-100`}
      >
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isMenuToggled={isMenuToggled}
          setIsMenuToggled={setIsMenuToggled}
        >
          <AnimatedRight
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            isMenuToggled={isMenuToggled}
            setIsMenuToggled={setIsMenuToggled}
          />
        </Navbar>
        {/* Need grow for sticky footer */}
        <main className="grow">
          <Main />
        </main>
        <Footer selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
