import jobData from "../data/jobs.json";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function JobList() {
  library.add(faLocationDot);
  return (
    <div
      className="container-fluid"
      id="jobs-list-page"
      style={{ padding: "100px" }}
    >
      {/* Listing the jobs in card by fetching from db.json file */}
      <div className="row">
        {jobData.map((job) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{job.position}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>
                <div className="row">
                  <div className="col">
                    <p className="card-text">
                      <strong>Experience:</strong>
                      <img
                        src="https://img.icons8.com/windows/22/null/suitcase.png"
                        alt="experience-img"
                      />
                      {job.experience}
                    </p>
                  </div>
                  <div className="col">
                    <p className="card-text">
                      <strong>Location:</strong>
                      <img
                        src="https://img.icons8.com/doodle/20/null/user-location.png"
                        alt="...."
                      />
                      {job.location}
                    </p>
                  </div>
                  <div className="col">
                    <p className="card-text">
                      <strong>Salary:</strong> {job.salary}
                    </p>
                  </div>
                </div>

                <div>
                  <Link to={`/apply/${job.id}/${job.position}`}>
                    <button className="btn btn-info button-apply">Apply</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobList;
