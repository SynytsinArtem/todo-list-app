import React from "react";

import AlertDialog from "./alertDialog";
import AppContext from "../context";

import styles from "./header.module.css";

const Header = React.memo(({ removeAllTodos, todosCount }) => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleClearAllButtonClick = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = React.useCallback(() => {
    setIsDialogOpen(false);
  }, []);

  const handleDialogAgree = React.useCallback(() => {
    removeAllTodos();
    setIsDialogOpen(false);
  }, [removeAllTodos]);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Todo App</h1>
      <span>Total Items: {todosCount}</span>
      <button onClick={handleClearAllButtonClick} disabled={todosCount === 0}>Clear All</button>
      <AlertDialog
        isOpen={isDialogOpen}
        title="Are you sure you want to clear all items?"
        contentText="This will delete all of your tasks."
        onClose={handleDialogClose}
        onAgree={handleDialogAgree}
        onDisagree={handleDialogClose}
      />
    </header>
  );
});

const HeaderContainer = () => {
  const { actions, todosCount } = React.useContext(AppContext);

  return <Header removeAllTodos={actions.removeAllTodos} todosCount={todosCount} />;
};

export default HeaderContainer;
