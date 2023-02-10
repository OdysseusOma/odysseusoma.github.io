import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./sections/Home";
import Pager from "./sections/Pager";
import ContactUs from "./sections/ContactUs";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Pager />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
