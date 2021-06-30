import { Work } from "./components/Work/Work";
import { Landing } from "./components/Landing/Landing";
import { Contact } from "./components/Contact/Contact";
import { Navbar } from "./components/Navbar/Navbar";
import { Skills } from "./components/Skills/Skills";
import './App.less';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
