import "./header.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="header">
      <h3>
        <span style={{ color: "#Fe492c", fontSize: "30px" }}>Spring</span>
        <span style={{ color: "black", fontSize: "30px" }}>dale</span>
      </h3>
      <Navbar />
    </div>
  );
}
