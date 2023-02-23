import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function ApplyJob() {
  const { id, position } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    experience: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formValid = validateForm();

    // Fetching the data from Json server

    if (formValid) {
      axios
        .post("http://localhost:3000/applications", {
          jobId: id,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          experience: formData.experience,
        })

        .then((response) => {
          setSubmissionStatus("success");
          setFormData({
            name: "",
            email: "",
            phone: "",
            address: "",
            experience: "",
          });
          setTimeout(() => {
            navigate("/jobs-list");
          }, 3000);
        })

        .catch((error) => {
          console.log(error);
        });
    }
  };

  // Form Validation

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (!/^[a-zA-Z ]+$/.test(formData.name.trim())) {
      errors.name = "Name can only contain letters and spaces";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(formData.email.trim())) {
      errors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      errors.phone = "Phone must be a 10-digit number";
    }

    if (!formData.experience.trim()) {
      errors.experience = "Experience is required";
    } else if (formData.experience.trim().length < 10) {
      errors.experience = "Experience must be at least 10 characters";
    } else if (formData.experience.trim().length > 150) {
      errors.experience = "Experience cannot be more than 150 characters";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };
  return (
    <div>
      <h1 className="applied-for-text">
        Apply for {position} (ID: {id})
      </h1>
      <h5 className="text-info">Fill the Form to apply for the Job</h5>
      {submissionStatus === "success" && (
        <div className="alert alert-success" role="alert">
          Application submitted successfully!
        </div>
      )}
      <div
        className="card"
        id="jobs-section"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="card-body" id="jobs-form" style={{ width: "40%" }}>
          
          {/* Apply job Form  */}
          
          <form onSubmit={handleSubmit} className="applyjob-form px-5">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className={`form-control ${
                  formErrors.name ? "is-invalid" : ""
                }`}
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {formErrors.name && (
                <div className="invalid-feedback">{formErrors.name}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${
                  formErrors.email ? "is-invalid" : ""
                }`}
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <div className="invalid-feedback">{formErrors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                className={`form-control ${
                  formErrors.phone ? "is-invalid" : ""
                }`}
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {formErrors.phone && (
                <div className="invalid-feedback">{formErrors.phone}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address (Optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="experience" className="form-label">
                Experience
              </label>
              <textarea
                className={`form-control experience-details ${
                  formErrors.experience ? "is-invalid" : ""
                }`}
                id="experience"
                name="experience"
                rows="4"
                placeholder="Enter your experience"
                value={formData.experience}
                onChange={handleInputChange}
              ></textarea>
              {formErrors.experience && (
                <div className="invalid-feedback">{formErrors.experience}</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ApplyJob;
