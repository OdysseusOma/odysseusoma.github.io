import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./sections/Home";
import Pager from "./sections/Pager";
import ContactUs from "./sections/ContactUs";

function App() {
  return (
    <div className="App">
      <Home />
      <Pager />
      <ContactUs />
    </div>
  );
}

export default App;
