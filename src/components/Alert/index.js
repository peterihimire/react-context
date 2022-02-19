import React, { useContext } from "react";
import { AppContext } from "../../context";

const Alert = ({ alert }) => {
  console.log(alert);
  const { dispatchAlertEvent } = useContext(AppContext);

  const handleAlert = () => {
    dispatchAlertEvent("PRESS_BUTTON", { text: "Hello World" });
  };
  return (
    <div>
      <button onClick={handleAlert}>Click Me</button>
    </div>
  );
};

export default Alert;
