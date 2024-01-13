import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";

import styles from "./item.module.css";

const Item = ({ item, completeTodo, removeTodo }) => {
  const { text, isCompleted, id } = item;
  const itemClassList = `${styles.item} ${isCompleted ? styles.item__completed : ""}`;

  const handleCompleteChange = () => {
    completeTodo(id);
  };

  const handleRemove = () => {
    removeTodo(id);
  };

  return (
    <div className={itemClassList}>
      <span>{text}</span>
      <div className={styles.actions}>
        <Checkbox checked={isCompleted} onChange={handleCompleteChange} color="default" />
        <IconButton aria-label="delete" onClick={handleRemove}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default React.memo(Item);
