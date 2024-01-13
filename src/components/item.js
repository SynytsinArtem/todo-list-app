import React from "react";

import styles from "./item.module.css";

const Item = ({ item, completeTodo, removeTodo }) => {
  const { text, isCompleted, id } = item;

  const handleComplete = () => {
    completeTodo(id);
  };

  const handleRemove = () => {
    removeTodo(id);
  };

  return (
    <div className={styles.item} style={{ textDecoration: isCompleted ? "line-through" : "" }}>
      <span>{text}</span>
      <div className={styles.actions}>
        <button className={styles.button} onClick={handleComplete}>
          Complete
        </button>
        <button className={styles.button} onClick={handleRemove}>
          x
        </button>
      </div>
    </div>
  );
};

export default React.memo(Item);
