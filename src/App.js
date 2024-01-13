import React from "react";
import Container from "@mui/material/Container";

import { AppContextProvider } from "./context";
import Header from "./components/header";
import List from "./components/list.js";

const AppView = () => (
  <AppContextProvider>
    <Container maxWidth="md" sx={{ py: "2em" }}>
      <Header />
      <List />
    </Container>
  </AppContextProvider>
);

export default AppView;
