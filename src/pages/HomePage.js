import BannerSlider from "../ui/BannerSlider";
import "./homepage.css";

export default function Homepage() {
  return (
    <div className="home-page">
      <div className="home-page-header">
        <h4 className="home-page-header-content1">
          <span className="home-page-header-content-text1">Spring</span>
          <span className="home-page-header-content-text2">dale</span>
        </h4>
        <h4 className="home-page-header-content2">Springdale Public School</h4>
      </div>
      <p className="home-page-para">
        Welcome to Springdale Public School, where we nurture young minds for a
        brighter future.
      </p>

      <BannerSlider />
    </div>
  );
}
