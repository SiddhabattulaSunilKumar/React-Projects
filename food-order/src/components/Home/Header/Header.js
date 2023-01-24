import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlRice, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Header.module.css";
import useLocalStorage from "../../../store/browser-store/useLocalStorega";

const Header = (props) => {
  const [usrLoginStatus, setUsrLoginStatus] = useLocalStorage(
    "userLoginInfo",
    true
  );
  const LogoutHandler = (e) => {
    setUsrLoginStatus(false);
    console.log(usrLoginStatus);
  };
  const CartHandler = e =>{
    e.preventDefault();
  }
  return (
    <div>
      <nav className="navbar navbar-expand-xl">
        <div>
          <FontAwesomeIcon icon={faBowlRice} size="3x" border color="white" />
          <a className="navbar-brand" href="/">
            <h6 className="tm-site-title mb-0">My Food</h6>
          </a>
        </div>
        <div className="container h-100">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto h-100"></ul>
            <ul className="navbar-nav">
              <li className="nav-item" onClick={CartHandler}>
                <a className="nav-link d-block" href="/">
                  <b>
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      size="1x"
                      color="white"
                    >
                      &#xf290;
                    </FontAwesomeIcon>
                  </b>
                </a>
              </li>
              <li className="nav-item" onClick={LogoutHandler}>
                <a className="nav-link d-block" href="/">
                  <b>Logout</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
