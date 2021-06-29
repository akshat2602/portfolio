import {About} from "./components/About/About";
import {Landing} from "./components/Landing/Landing";
import {Contact} from "./components/Contact/Contact";
import {Navbar} from "./components/Navbar/Navbar";
import {Projects} from "./components/Projects/Projects";
import {Skills} from "./components/Skills/Skills";
import './App.less';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
