import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login/Login";
import useLocalStorage from "./Store/Browser-Store/useLocalStorega";


function App() {
  const[userinfo,setUserInfo]=useLocalStorage('userLoginInfo','');


  const LoginFormSubmitHandler = userDetails =>{
    console.log("************");
    console.log(userDetails);
     setUserInfo(userDetails);  
  }

  return (
    <div className="App">
      {console.log(userinfo.status)}
      {userinfo.status!=='Success' && <Login onLoginSubmit={LoginFormSubmitHandler}/>}
      {userinfo.status==='Success' && <HomePage/> }
    </div>
  );
}

export default App;
