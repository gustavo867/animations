import { StatusBar } from "expo-status-bar";
import React from "react";

import Drag from "./src/pages/Drag";
import Login from "./src/pages/Login";
import Scroll from "./src/pages/Scroll";

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Login />
    </>
  );
};

export default App;
