import { createPortal } from "react-dom";
import { MdHome } from "react-icons/md";
import { RiFileInfoFill } from "react-icons/ri";
import { HiAcademicCap } from "react-icons/hi2";
import { RiSchoolFill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { RiGalleryFill } from "react-icons/ri";
import { RiContactsBook3Fill } from "react-icons/ri";
import "./menubar.css";

export default function Menubar({ isMenuBtnClicked }) {
  if (isMenuBtnClicked) {
    return createPortal(
      <div className="menubar">
        <ul className="menubar-items-container">
          <li className="menubar-item">
            <MdHome className="menu-item-logo" />

            <span>Home</span>
          </li>
          <li className="menubar-item">
            <RiFileInfoFill className="menu-item-logo" />
            <span>About us</span>
          </li>
          <li className="menubar-item">
            <HiAcademicCap className="menu-item-logo" />
            <span>Academics</span>
          </li>
          <li className="menubar-item">
            <RiSchoolFill className="menu-item-logo" />
            <span>Admissions</span>
          </li>
          <li className="menubar-item">
            <GiTeacher className="menu-item-logo" />
            <span>Faculty</span>
          </li>
          <li className="menubar-item">
            <PiStudentBold className="menu-item-logo" />
            <span>Students</span>
          </li>
          <li className="menubar-item">
            <RiGalleryFill className="menu-item-logo" />
            <span>Gallery</span>
          </li>
          <li className="menubar-item">
            <RiContactsBook3Fill className="menu-item-logo" />
            <span>Contact us</span>
          </li>
        </ul>
      </div>,
      document.body
    );
  } else {
    return null;
  }
}
