import "./aboutus.css";

export default function Aboutus() {
  return (
    <div className="aboutus-page">
      <h2 className="aboutus-page-heading">Aboutus</h2>
      <div className="aboutus-page-card-container">
        <article className="aboutus-page-card">
          <h5>History</h5>
          <p className="aboutus-card-text">
            Founded in 1985, Springdale Public School has been dedicated to
            providing quality education and holistic development to students.
          </p>
        </article>
        <article className="aboutus-page-card">
          <h5>Vision</h5>
          <p className="aboutus-card-text">
            To create learning environment that fosters academic
            excellence,critical thinking, and ethical values.
          </p>
        </article>
        <article className="aboutus-page-card">
          <h5>Mission</h5>
          <p className="aboutus-card-text">
            To empower students with the knowledge, skills, and values needed to
            thrive in a dynamic world.
          </p>
        </article>
        <article className="aboutus-page-card">
          <h5>Principals Message</h5>
          <p className="aboutus-card-text">
            At Springdale, we believe in nurturing the potential of every
            student and guiding them towards a successful future.
          </p>
        </article>
        <article className="aboutus-page-card">
          <h5>Infrastructure and Facilities</h5>

          <ul>
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>
              Library with a vast collection of books and digital resources
            </li>
            <li>
              Sports Facilities including a playground, gymnasium, and swimming
              pool
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}
