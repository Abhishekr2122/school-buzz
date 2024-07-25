import { useState } from "react";
import "./app.css";
import Header from "./components/Header";
import Menubar from "./components/Menubar";
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import Academics from "./pages/Academics";

function App() {
  const [isMenuBtnClicked, setIsMenuBtnClicked] = useState(false);
  return (
    <div className="app">
      <section className="section-1">
        <Header setIsMenuBtnClicked={setIsMenuBtnClicked} />
        <Homepage />
      </section>

      <section className="section-2">
        <Aboutus />
      </section>

      <section className="section-3">
        <Academics />
      </section>

      <section className="section-4"></section>
      <Menubar isMenuBtnClicked={isMenuBtnClicked} />
    </div>
  );
}

export default App;
