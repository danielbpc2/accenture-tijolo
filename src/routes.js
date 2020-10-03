import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Keyboard from "./pages/Keyboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Keyboard} path="/" exact />
    </BrowserRouter>
  );
};

export default Routes;
