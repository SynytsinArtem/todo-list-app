import React from "react";
import Button from "@mui/material/Button";

import AlertDialog from "./alertDialog";

import styles from "./appBar.module.css";

const AppBar = ({ removeAllTodos, todosCount }) => {
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
    <div className={styles.root}>
      <h1 className={styles.title}>Todo App</h1>
      <span>Total Items: {todosCount}</span>
      <Button
        variant="text"
        color="inherit"
        onClick={handleClearAllButtonClick}
        disabled={todosCount === 0}
      >
        Clear All
      </Button>
      <AlertDialog
        isOpen={isDialogOpen}
        title="Are you sure you want to clear all items?"
        contentText="This will delete all of your tasks."
        onClose={handleDialogClose}
        onAgree={handleDialogAgree}
        onDisagree={handleDialogClose}
      />
    </div>
  );
};

export default React.memo(AppBar);
