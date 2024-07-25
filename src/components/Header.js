import { useRef } from "react";
import "./header.css";
import Navbar from "./Navbar";
import { IoIosMenu } from "react-icons/io";
export default function Header({ setIsMenuBtnClicked }) {
  const headerComp = useRef(null);
  return (
    <div className="header" ref={headerComp}>
      <h3>
        <span style={{ color: "#Fe492c", fontSize: "30px" }}>Spring</span>
        <span style={{ color: "black", fontSize: "30px" }}>dale</span>
      </h3>
      <Navbar />
      <IoIosMenu
        className="menu-btn"
        onClick={function () {
          setIsMenuBtnClicked(function (crrState) {
            return !crrState;
          });
        }}
      />
    </div>
  );
}
