import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode(!darkMode);
    if (darkMode === false) {
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={darkMode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={darkMode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
