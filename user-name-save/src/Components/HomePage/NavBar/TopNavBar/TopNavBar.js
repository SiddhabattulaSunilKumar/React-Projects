import { useEffect, useState } from "react";
import useLocalStorage from "../../../../Store/Browser-Store/useLocalStorega";



const TopNavBar = (props) => {
    const[usrDetails,setUserDetails]=useState('');
    

    useEffect(()=>{
        const userDet = localStorage.getItem("userLoginInfo");
        const userDetObj = JSON.parse(userDet)
       setUserDetails(userDetObj);
    },[]);

const SignoutHandler = e=>{
    localStorage.removeItem('userLoginInfo');
}
  return (
    <form onSubmit={SignoutHandler}>
    <nav className="navbar navbar-dark bg-danger">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <span className="navbar-brand mb-0 h1">{usrDetails.usrName}</span>
        <button type="submit" className="btn btn-light" >Sign Out</button>
      </div>
    </nav>
    </form>
  );
};

export default TopNavBar;
