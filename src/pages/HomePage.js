import BannerSlider from "../ui/BannerSlider";
import "./homepage.css";

export default function Homepage() {
  return (
    <div className="home-page">
      <div className="home-page-header">
        <h3 className="home-page-header-text">
          <span style={{ color: "black" }}>Spring</span>
          <span style={{ color: "white" }}>dale</span>
        </h3>
        <h3 className="home-page-header-text">Springdale Public School</h3>
      </div>
      <p className="home-page-para">
        Welcome to Springdale Public School, where we nurture young minds for a
        brighter future
      </p>
      <BannerSlider />
    </div>
  );
}
