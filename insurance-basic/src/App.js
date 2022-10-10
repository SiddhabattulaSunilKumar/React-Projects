import { useState } from "react";
import AddApplicant from "./components/Applicant/AddApplicant";
import ApplicantList from "./components/Applicant/ApplicantList";

function App() {

  const[newUserDetails,setNewUserDetails]=useState([]);

  const userDetailsSubmitHandler = (userDetails) => {
    const userDet = {
      ...userDetails
    }
    setNewUserDetails((prevList)=>{
      return [userDet, ...prevList]
    })
  }

  return (
    <div className="App">
      <br/>
      <AddApplicant SubmitUserDeatils={userDetailsSubmitHandler}/>
      <ApplicantList NewUserDetalsSubmit={newUserDetails}/>
    </div>
  );
}

export default App;
