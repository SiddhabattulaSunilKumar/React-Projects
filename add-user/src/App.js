import { useState } from "react";
import NewUser from "./components/Users/NewUser";
import UsersList from "./components/Users/UsersList";

function App() {

  const[userDetails,setUserDetails]=useState([])
  const NewUserDetailsHandler = (uName,uAge) => {
    const userList = {
      userName : uName,
      userAge : uAge,
      id:Date.now() + Math.random(),
    }
    setUserDetails((previousList) => {
      return [userList, ...previousList]
    });
    
  }

  return (
    <div className="App">
      <br/>
      <NewUser onUserDetailsSubmit={NewUserDetailsHandler}/>
      <UsersList usersList = {userDetails}/>
    </div>
  );
}

export default App;
