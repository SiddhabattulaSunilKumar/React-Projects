import React, { useState, useRef, useEffect } from "react";
import MyPortalUtilityStyle from "./MyPortalUtility.module.css";

const Countdown = (props) => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };
  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        /* (hours > 9 ? hours : "0" + hours) +
          ":" +*/
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };
  const clearTimer = (e) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 1800);
    return deadline;
  };
  useEffect(() => {
    clearTimer(getDeadTime());
    console.log("Reset userEffect in Counter");
  }, []);
  const onClickReset = () => {
    clearTimer(getDeadTime());
  };
  return (
    <div id={MyPortalUtilityStyle.parent_div}>
      <div className={MyPortalUtilityStyle.child_div}>{timer}</div>
      <div className={MyPortalUtilityStyle.child_div}>
        <button onClick={onClickReset}>Need More Time</button>
      </div>
    </div>
  );
};
export default Countdown;
