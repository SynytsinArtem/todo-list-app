/* eslint import/no-anonymous-default-export: 0 */
import React from "react";
import AppContext from "../context";

import styles from "./header.module.css";

const Header = () => {
  const { actions, todosCount } = React.useContext(AppContext);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>To do App</h1>
      <span>Total Items: {todosCount}</span>
      <button onClick={actions.removeAllTodos}>Clear All</button>
    </header>
  );
};

export default Header;
