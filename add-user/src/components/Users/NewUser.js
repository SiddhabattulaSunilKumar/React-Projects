import React, { useState } from 'react';
import Card from "../UI/Card";

const NewUser = (props) => {
   const[userName,setUserName]=useState('');
   const[userAge,setUserAge]=useState('');

   const userNameHandler = (e)  =>{
    setUserName(e.target.value);
   }

   const userAgeHandler = (e)  =>{
    setUserAge(e.target.value);
   }

   const AddUserHandler = (e) =>{
    e.preventDefault();
    if(userName.trim().length===0 || userAge.trim().length===0 )
    {
        return alert("Enter Valid Details");
    }
    if(userAge.trim()<0)
    {
        return alert("Age should not be negative value");
    }
    props.onUserDetailsSubmit(userName,userAge)
    setUserName('');
    setUserAge('');
   }

  return (
    <Card title="Add User">
    <div>
      <form className="row g-3" onSubmit={AddUserHandler}>
        <div className="col-md-6">
          <label className="form-label">
            Name
          </label>
          <input type="text" value = {userName} className="form-control" id="User Name"  onChange={userNameHandler}/>
        </div>
        <div className="col-md-6">
          <label className="form-label">
            Age
          </label>
          <input type="text" value={userAge} className="form-control" id="Age" onChange={userAgeHandler}/>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Add User
          </button>
        </div>
      </form>
    </div>
    </Card>
  );
};

export default NewUser;
