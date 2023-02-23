import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      {/* Footer with three buttons hobs, contactus, comingsoon */}
      <footer className="py-3  mx-3 custom-footer">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto my-2">
              <Link to="/jobs-list">
                <button className="btn btn-info">Jobs</button>
              </Link>
            </div>
            <div className="col-auto my-2">
              <Link to="/contactus">
                <button className="btn btn-info">Contact Us</button>
              </Link>
            </div>
            <div className="col-auto my-2">
              <button className="btn btn-info">Coming Soon</button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="text-center text-white footer-social">
        <div className="container pt-4">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* <!-- Twitter --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter"></i>
            </a>

            {/* <!-- Google --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google"></i>
            </a>

            {/* <!-- Instagram --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* <!-- Linkedin --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            {/* <!-- Github --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center text-dark p-3 footer-copyrights">
          © 2023 Copyright:
          <a className="text-dark" href="\">
            TobJobs Inc Limited
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
}

export default Footer;
