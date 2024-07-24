import "./bannerslider.css";
import { FaBackward } from "react-icons/fa6";
import { FaForward } from "react-icons/fa6";

// import Carousel from "react-bootstrap/Carousel";

// export default function BannerSlider() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

export default function BannerSlider() {
  return (
    <div className="banner-slider">
      <div className="banner-slider-container">
        <div className="backward">
          <FaBackward className="backward-item" />
        </div>
        <div className="slider">
          <div className="slider-item"></div>
          <div className="slider-item"></div>
          <div className="slider-item"></div>
        </div>
        <div className="forward">
          <FaForward className="forward-item" />
        </div>
      </div>
    </div>
  );
}
