import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import GlobalStyle from "./GlobalStyle";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
