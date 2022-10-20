import Countdown from "../utility/Countdown";
import myPortalStyles from "./MyPortal.module.css";

const Header = (props) => {
    console.log(props.UserInfo);
  return (
    <div className={myPortalStyles.topnav}>
      <a className={myPortalStyles.active} href="#home">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <div className={myPortalStyles.Element_Float_Right}>
      <Countdown/>
      </div>
    </div>
  );
};

export default Header;
