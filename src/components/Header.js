import { useRef } from "react";
import "./header.css";
import Navbar from "./Navbar";

export default function Header() {
  const headerComp = useRef(null);
  return (
    <div
      className="header"
      ref={headerComp}
      onClick={function () {
        console.log(headerComp.current.getBoundingClientRect());
      }}
    >
      <h3>
        <span style={{ color: "#Fe492c", fontSize: "30px" }}>Spring</span>
        <span style={{ color: "black", fontSize: "30px" }}>dale</span>
      </h3>
      <Navbar />
    </div>
  );
}
