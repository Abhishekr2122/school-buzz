import "./admissions.css";

export default function Admissions() {
  return (
    <div className="admissions">
      <article className="admissions-content-container">
        <h4 className="admissions-header">Admissions</h4>
        <div>
          <ul>
            <li>
              <strong style={{ color: "#fe492c" }}>Process:</strong> Admission
              forms are available for download. Submit the completed form along
              with required documents at the school office
            </li>
            <br></br>
            <li>
              <strong style={{ color: "#fe492c" }}>Criteria:</strong> Admission
              is based on merit and availability of seats. Entrance tests may be
              conducted for certain grades
            </li>
            <br></br>
            <li>
              <strong style={{ color: "#fe492c" }}>Important Dates:</strong>
              <ul>
                <li>Admission Form Availability: March 1st</li>
                <li>Last Date for Submission: March 31st</li>
                <li>Entrance Test: April 15th</li>
                <li>Announcement of Results: April 30th</li>
              </ul>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}
