import React, { useRef, useState } from 'react';

import Card from "../UI/Card";

const AddApplicant = (props) => {

    const [userName, setUserName]=useState('');
    const [userEmail, setUserEmail]=useState('');
    const [userAge, setUserAge]=useState('');
    const [userPhoneNo,setUserPhoneNo]=useState('');
    const selectCountry=useRef('');
    

const ApplicantNameChangeHandler = (e) => {
  setUserName(e.target.value);
};
const ApplicantEmailChangeHandler = (e) => {
    setUserEmail(e.target.value);
};
const ApplicantAgeChangeHandler = (e) => {
    setUserAge(e.target.value);
};

const ApplicantPhoneNoChangeHandler = (e) => {
  setUserPhoneNo(e.target.value);
};



const SubmitApplicantFormHandler = (e) =>{
  e.preventDefault();
  const userDetails = {
    userName : userName,
    userEmail : userEmail,
    userAge :  userAge,
    userPhoneNo : userPhoneNo,
    selectCountry : selectCountry.current.value,
    id: Math.random(),
  }
  props.SubmitUserDeatils(userDetails);
  setUserName('');
  setUserEmail('');
  setUserAge('');
  setUserPhoneNo('');
}

  return (
    <Card title="Add Applicant Details">
      <form className="row g-3" onSubmit={SubmitApplicantFormHandler}>
        <div className="col-md-6">
          <div className="row mb-3">
            <label htmlFor="ApplicantName" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="String"
                className="form-control"
                id="ApplicantName"
                onChange={ApplicantNameChangeHandler}
                value={userName}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                onChange={ApplicantEmailChangeHandler}
                value={userEmail}
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row mb-3">
            <label htmlFor="Age" className="col-sm-4 col-form-label">
              Age
            </label>
            <div className="col-sm-3">
              <input
                type="number"
                className="form-control"
                id="Age"
                onChange={ApplicantAgeChangeHandler}
                value={userAge}
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row mb-3">
            <label htmlFor="Country" className="col-sm-4 col-form-label">
              Country
            </label>
            <div className="col-sm-7">
              <select
                className="form-select"
                id="Country"
                ref={selectCountry}
              >
                <option defaultValue>Choose...</option>
                <option value="In">India</option>
                <option value="UK">United Kingdom</option>
                <option value="USA">United States</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row mb-3">
            <label htmlFor="PhoneNumber" className="col-sm-4 col-form-label">
              Phone
            </label>
            <div className="col-sm-6">
              <input
                type="number"
                className="form-control"
                id="PhoneNumber"
                value={userPhoneNo}
                onChange={ApplicantPhoneNoChangeHandler}
              />
            </div>
          </div>
        </div>
        <div className="d-grid gap-2 col-2 mx-auto">
          <button className="btn btn-outline-success" type="submit">
            Add
          </button>
        </div>
      </form>
    </Card>
  );
};

export default AddApplicant;
