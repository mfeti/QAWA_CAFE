import { useEffect } from "react";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  useEffect(function () {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden">
      <header className="bg-gradient-to-r from-secondary to-secondary/90 py-2 shadow-lg">
        <Navbar />
      </header>
      <main>
        <Home />
        <Services />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
