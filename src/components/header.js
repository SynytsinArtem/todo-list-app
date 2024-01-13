import React from "react";

import AppContext from "../context";

import styles from "./header.module.css";

const Header = React.memo(({ removeAllTodos, todosCount }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>To do App</h1>
    <span>Total Items: {todosCount}</span>
    <button onClick={removeAllTodos}>Clear All</button>
  </header>
));

const HeaderContainer = () => {
  const { actions, todosCount } = React.useContext(AppContext);

  return <Header removeAllTodos={actions.removeAllTodos} todosCount={todosCount} />;
};

export default HeaderContainer;
