import React, { useState } from "react";
import "./App.css";
import AlertPage from "./pages/AlertPage";
import { AppContext } from "./context";

function App() {
  const [alertW, setAlertW] = useState("");

  const dispatchAlertEvent = (actionType, payload) => {
    switch (actionType) {
      case "PRESS_BUTTON":
        // setAlert([...users, payload.newUser]);
        setAlertW(...alertW, payload.text);
        alert(payload.text);
        return;

      default:
        return;
    }
  };

  return (
    <div className='App'>
      <AppContext.Provider value={{ alert, dispatchAlertEvent }}>
        <AlertPage />
      </AppContext.Provider>
    </div>
  );
}

export default App;
