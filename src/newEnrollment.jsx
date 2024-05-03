import React, { useState } from "react";
import "./App.css";

const NewEnrollmentForm = () => {
  const [completedForms, setCompletedForms] = useState([]);
  const [formData, setFormData] = useState({
    clinic: "",
    device: "",
    employmentType: "",
    lastName: "",
    firstName: "",
    middleName: "",
    dob: "",
    gender: "",
    hasPacemaker: "",
    hasICD: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    primaryPhone: "",
    secondaryPhone: "",
    emergencyContact: "",
    orderingProvider: "",
    readingProvider: "",
    referringProvider: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setCompletedForms([...completedForms, formData]);
    // Clear form data
    setFormData({
      clinic: "",
      device: "",
      employmentType: "",
      lastName: "",
      firstName: "",
      middleName: "",
      dob: "",
      gender: "",
      hasPacemaker: "",
      hasICD: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      primaryPhone: "",
      secondaryPhone: "",
      emergencyContact: "",
      orderingProvider: "",
      readingProvider: "",
      referringProvider: "",
    });
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="border-form">
      <div className="enroll-form">
        <h2 className="heade">New Enrollment</h2>
        <p className="required">
          <span className="start">*</span>Required Fields
        </p>
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="clinic" className="head">
            Select Clinic <span className="start">*</span>
          </label>
          <select className="select">
            <option>Select Clinic*</option>
          </select>
        </div>
        <div>
          <label htmlFor="device" className="head">
            Select Device <span className="start">*</span>
          </label>
          <select className="select-2">
            <option>First select a clinic</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="employmentType" className="head">
            Enrollment Type <span className="start">*</span>
          </label>
          <select className="select-3">
            <option>First select a clinic</option>
          </select>
          <div className="plus-symbol">+</div>
          <div className="dual-modify">Dual Modify Criteria</div>
        </div>

        <h3 className="head">Enter Patient Info</h3>
        <div className="section">
          <div className="names">
            <div className="form-row">
              <label htmlFor="lastName" className="inputdata">
                Last Name <span className="start">*</span>
              </label>
              <input className="boxspace"
                placeholder="Last Name*"
                type="text"
                id="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label htmlFor="firstName" className="inputdata">
                First Name <span className="start">*</span>
              </label>
              <input className="boxspace"
                placeholder="First Name*"
                type="text"
                id="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label htmlFor="middleName" className="inputdata">
                Middle Name <span className="start">*</span>
              </label>
              <input className="boxspace"
                placeholder="Middle Name*"
                type="text"
                id="middleName"
                value={formData.middleName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="dob">
              Date of Birth <span className="start">*</span>
            </label>
            <input className="dobbox"
              type="date"
              id="dob"
              required
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label className="weight">Gender <span className="start">*</span></label>
            <input type="radio" id="male" name="gender" value="male" required onChange={handleChange} />
            <label className="spaces" htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" required onChange={handleChange} />
            <label className="spaces" htmlFor="female">Female</label>

            <label className="weight">Has Pacemaker <span className="start">*</span></label>
            <input type="radio" id="pacemakerNo" name="pacemaker" value="no" required onChange={handleChange} />
            <label className="spaces" htmlFor="pacemakerNo">N/A</label>
            <input type="radio" id="pacemakerYes" name="pacemaker" value="yes" required onChange={handleChange} />
            <label className="spaces" htmlFor="pacemakerYes">Yes</label>
            <input type="radio" id="pacemakerYes" name="pacemaker" value="yes" required onChange={handleChange} />
            <label className="spaces" htmlFor="pacemakerYes">No</label>

            <label className="weight">Has ICD <span className="start">*</span></label>
            <input type="radio" id="icdNo" name="icd" value="no" required onChange={handleChange} />
            <label className="spaces" htmlFor="icdNo">N/A</label>
            <input type="radio" id="icdYes" name="icd" value="yes" required onChange={handleChange} />
            <label className="spaces" htmlFor="icdYes">Yes</label>
            <input type="radio" id="pacemakerYes" name="pacemaker" value="yes" required onChange={handleChange} />
            <label className="spaces" htmlFor="pacemakerYes">No</label>
          </div>

          <div className="sec">
            <div className="form-row">
              <label htmlFor="address1" className="input-data">
                Address Line 1 <span className="start">*</span>
              </label>
              <input className="spacing"
              placeholder="Address line 1*"
                type="text"
                id="address1"
                required
                value={formData.address1}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label htmlFor="address2">
                Address Line 2
              </label>
              <input className="spacing separate"
              placeholder="Address line 2*"
                type="text"
                id="address2"
                value={formData.address2}
                onChange={handleChange}
              />
            </div>
           <div style={{display: "flex"}}>
            <div className="form-row">
              <label htmlFor="city" className="input-data">
                City <span className="start">*</span>
              </label>
              <input className="secondary"
              placeholder="City*"
                type="text"
                id="city"
                required
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label htmlFor="state" className="input-data">
                State <span className="start">*</span>
              </label>
              <input className="secondary"
              placeholder="Select State*"
                type="text"
                id="state"
                required
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label htmlFor="zip" className="input-data">
                Zip <span className="start">*</span>
              </label>
              <input className="secondary"
              placeholder="Zip*"
                type="text"
                id="zip"
                required
                value={formData.zip}
                onChange={handleChange}
              />
            </div>
            </div> 
          </div>
          {/* Contact Information */}
        
          <div className="sec">
          <div style={{display: "flex"}}>
            <div className="form-row">
              <label htmlFor="primaryPhone" className="input-data">
                Primary Phone <span className="start">*</span>
              </label>
              <input 
              className="secondary"
              placeholder="Primary Phone*"
                type="tel"
                id="primaryPhone"
                required
                value={formData.primaryPhone}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label htmlFor="secondaryPhone" className="input-data">
                Secondary Phone
              </label>
              <input className="secondary"
              placeholder="Secondary Phone*"
                type="tel"
                id="secondaryPhone"
                value={formData.secondaryPhone}
                onChange={handleChange}
              />
            
            </div>
            </div> 
            <div className="form-row">
              <label htmlFor="emergencyContact" className="input-data">
                Enter emergency contact info 
              </label>
              <input className="button1"
              placeholder="+"
                type="text"
                id="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="orderingProvider" className="input-data ending">
            Ordering Provider <span className="start">*</span>
          </label>
          <input className="ending1"
          placeholder="First Select a Clinic"
            type="text"
            id="orderingProvider"
            value={formData.orderingProvider}
            onChange={handleChange}
          />
          {/* Add dropdown arrow icon here */}
        </div>
        <div>
          <label htmlFor="readingProvider" className="input-data ending">
            Reading Provider <span className="start">*</span>
          </label>
          <input className="ending2"
          placeholder="First Select a Clinic"
            type="text"
            id="readingProvider"
            value={formData.readingProvider}
            onChange={handleChange}
          />
          {/* Add dropdown arrow icon here */}
        </div>
        <div>
          <label htmlFor="referringProvider" className="input-data ending">
            Referring Provider <span className="start">*</span>
          </label>
          <input className="ending1"
          placeholder="Referring Provider Name"
            type="text"
            id="referringProvider"
            value={formData.referringProvider}
            onChange={handleChange}
          />
          {/* Add dropdown arrow icon here */}
        </div>
        <div className="enrollButtons">
          <button type="button" className="cancel">
            Cancel
          </button>
          <button type="submit" className="verify">
            Verify Enrollment
          </button>
        </div>
      </form>

      {/* Completed Forms Table */}
      <center>
        {completedForms.length > 0 && (
          <div>
            <h2 className="form-head-cmplt">Completed Forms</h2>
            <div className="completed-forms">
              <table>
                <thead>
                  <tr>
                    <th className="completed">Last Name</th>
                    <th className="completed">First Name</th>
                    <th className="completed">Device</th>
                    <th className="completed">Employment Type</th>
                    {/* Add more table headers for other fields if needed */}
                  </tr>

                </thead>

                <tbody>
                  {completedForms.map((form, index) => (
                    <tr key={index}>
                      <td className="completed">{form.lastName}</td>
                      <td className="completed">{form.firstName}</td>
                      <td className="completed">{form.device}</td>
                      <td className="completed">{form.employmentType}</td>
                      {/* Add more table cells for other fields if needed */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </center>
    </div>

  );
};

export default NewEnrollmentForm;