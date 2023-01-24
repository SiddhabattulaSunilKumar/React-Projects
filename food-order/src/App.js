import "./asserts/css/bootstrap.min.css";
import "./asserts/css/templatemo-style.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import useLocalStorage from "./store/browser-store/useLocalStorega";

function App() {

  const[usrLoginStatus,setUsrLoginStatus]=useLocalStorage('userLoginInfo',false);
  const userFormSubmitHandler = loginDetails =>{
    setUsrLoginStatus(loginDetails.status)
  }

  return (
    <div className="App">
      {!usrLoginStatus && <Login userFormSubmit={userFormSubmitHandler}/>}
      {usrLoginStatus && <Home/>}
    </div>
  );
}

export default App;
