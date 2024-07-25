import "./bannerslider.css";
import { FaForward } from "react-icons/fa6";
import { FaBackward } from "react-icons/fa6";

export default function BannerSlider() {
  return (
    <div className="banner-slider">
      <FaBackward className="banner-slider-icon" />
      <div className="banner-slider-container">
        <img
          src="./science-logo (2).jfif"
          alt="not-found"
          className="banner-slider-image"
        />
      </div>

      <FaForward className="banner-slider-icon" />
    </div>
  );
}
