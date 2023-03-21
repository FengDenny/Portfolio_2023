import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import AnimatedRight from "@/components/Navbar/AnimatedRight";
import AnimatedTop from "@/components/Navbar/AnimatedTop";
import AnimatedLeft from "@/components/Navbar/AnimatedLeft";
import { SelectedPage } from "@/Model/types";
import HomePage from "@/pages/Home";
// ENUM - to define a set of names constant (not to be changed)

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

  return (
    <div className="app bg-primary-100">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isMenuToggled={isMenuToggled}
        setIsMenuToggled={setIsMenuToggled}
      >
        {/* <AnimatedLeft
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                  setIsMenuToggled={setIsMenuToggled}
                /> */}
        {/* <AnimatedRight
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isMenuToggled={isMenuToggled}
          setIsMenuToggled={setIsMenuToggled}
        />   */}
        <AnimatedTop
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isMenuToggled={isMenuToggled}
          setIsMenuToggled={setIsMenuToggled}
        />
      </Navbar>
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
