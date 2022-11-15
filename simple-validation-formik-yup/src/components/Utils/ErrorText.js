import React from "react";
import Styles from "./UtilsStyle.module.css";

const ErrorText = (props) => {
  return <div className={Styles.error}>{props.children}</div>;
};

export default ErrorText;
