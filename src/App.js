import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [color, setcolor] = useState("dark");
  const [value, setvalue] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  const [aboutColor, setaboutColor] = useState("light");
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      setcolor("light");
      setvalue("Enable Light Mode");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      setaboutColor("light");
    } else {
      setMode("light");
      setcolor("dark");
      setvalue("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success"); //Here showAlert is a function inside which the alert state is used for setting the state
      setaboutColor("dark");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      //This is an object inside a function called showAlert
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2700);
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        About="AboutTextUtils"
        contact="Contacts"
        mode={mode}
        toggleMode={toggleMode}
        color={color}
        value={value}
      />
      <Alert alert={alert} />
      <div className="container my4">
        <Routes>
          <Route path="/about" element={<About aboutColor={aboutColor} />} />
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter The Text To Analyze"
              />
            }
          />
          <Route path="/Contact" element={<Contact color={color} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
