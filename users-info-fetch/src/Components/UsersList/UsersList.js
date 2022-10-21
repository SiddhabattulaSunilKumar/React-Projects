import React,{useState} from 'react';
import Card from "../UI/Card";
import UserInfo from "../UserInfo/UserInfo";

let UsersList = (props) => {
    const[usersDetails,setUsersDetails]=useState([]);

    const UserDetailsAPI =() =>{
  fetch("https://reqres.in/api/users?page=2")
    .then((res) => res.json())
    .then(
      (result) => {
        const userDet = result.data.map((userData) => {
          return {
            id: userData.id,
            firstName: userData.first_name,
            lastName: userData.last_name,
            emailId: userData.email,
            fullName: userData.first_name + " " + userData.last_name,
            imageURL: userData.avatar,
          };
        });
        setUsersDetails(userDet);
      },
      (error) => {
        setUsersDetails(error);
      }
    );
    };

    const FetchUserListHandler = e => {
        UserDetailsAPI();
    }

  return (
    <Card title="Users Information">
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" type="button" onClick={FetchUserListHandler}>
          Fetch Users List
        </button>
      </div>
      <br/>
      <UserInfo onUsersListChaange={usersDetails}/>
    </Card>
  );
};

export default UsersList;
