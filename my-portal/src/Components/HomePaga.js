import React from "react";
import Calculator from "./Calculator";
import Header from "./Header";
const HomePage = props =>{
    const UserInfo = {
        ...props
    }
    return(
       <div>
        <Header UserInfo={UserInfo} />
        <Calculator/>
       </div>
    )
   }
   
export default HomePage;