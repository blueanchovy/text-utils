import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    if (darkMode === false) {
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
      showAlert("dark mode has been enabled", "success");
    } else {
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showAlert("dark mode has been disabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      t: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={darkMode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze"
          mode={darkMode}
          showAlert={showAlert}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
