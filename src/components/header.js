import React from "react";
import { AppBar as AppBarMaterial } from "@mui/material";

import AppBar from "./appBar";
import AppContext from "../context";

const Header = () => {
  const { actions, todosCount } = React.useContext(AppContext);

  return (
    <AppBarMaterial position="static">
      <AppBar removeAllTodos={actions.removeAllTodos} todosCount={todosCount} />
    </AppBarMaterial>
  );
};

export default Header;
