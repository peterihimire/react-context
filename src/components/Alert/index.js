import React, { useContext } from "react";
import { AppContext } from "../../context";

import "./style.css";

const Alert = () => {
  const { dispatchAlertEvent } = useContext(AppContext);

  const handleAlert = () => {
    dispatchAlertEvent("PRESS_BUTTON", { text: "Hello World" });
  };
  return (
    <div className='btn-wrapper'>
      <button onClick={handleAlert}>Click Me</button>
    </div>
  );
};

export default Alert;
