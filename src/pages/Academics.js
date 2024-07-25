import "./academics.css";

export default function Academics() {
  return (
    <div className="academics">
      <article className="academics-content-container">
        <h4 className="academics-header">Academics</h4>
        <div>
          <ul>
            <li>
              <strong style={{ color: "#fe492c" }}>Curriculum:</strong>
              <ul>
                <li>
                  <strong>Primary (Grades 1-5):</strong>Englis, Mathametics,
                  Science, Social Studies, Art, Physical Education
                </li>
                <li>
                  <strong>Secondary (Grades 6-10):</strong> English,
                  Mathametics, Science(Physics, Chemistry, Biology), Social
                  Studies, Computer Science, Physical Education, Art
                </li>
                <li>
                  <strong>Senior Secondary (Grades 11-12):</strong>
                  <ul>
                    <li>
                      <strong>Science Stream:</strong> Physics, Chemistry,
                      Biology, Mathematics, Computer Science, English
                    </li>
                    <li>
                      <strong>Commerce Stream:</strong> Accountancy, Business
                      Studies, Economics, Mathametics, English
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <br></br>
            <li>
              <strong style={{ color: "#fe492c" }}>
                Teaching Methodologies:
              </strong>{" "}
              We use a blend of traditional and modern teaching techniques to
              cater to different learning styles
            </li>
            <br></br>
            <li>
              <strong style={{ color: "#fe492c" }}>
                Educational Resources:
              </strong>{" "}
              Digital classrooms, interactive learning modules, and access to
              online educational platforms
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}
