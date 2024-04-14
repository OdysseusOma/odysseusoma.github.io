import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./sections/Home";
import Pager from "./sections/Pager";
import ContactUs from "./sections/ContactUs";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Pager />
      <Projects />
      <Skills />
      <Experience />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
