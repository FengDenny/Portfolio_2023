import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import AnimatedRight from "@/components/Navbar/AnimatedRight";
import { SelectedPage } from "@/Model/types";
import HomePage from "@/pages/Home";
import StanceLabProject from "@/pages/Home/Projects/StanceLab/ProjectInfo";
import TMBProject from "@/pages/Home/Projects/TheMovieBox/ProjectInfo";
import WFLProject from "@/pages/Home/Projects/WarframeLeeter/ProjectInfo";
import { useRoutes } from "react-router-dom";
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
    ]);

    return routes;
  };

  return (
    <div className="app bg-primary-100">
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
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
