import React from "react";

import AppContext from "../context";
import Form from "./form";
import Item from "./item";

import styles from "./list.module.css";

const List = () => {
  const { actions, todos } = React.useContext(AppContext);

  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <Item
          key={todo.id}
          item={todo}
          completeTodo={actions.completeTodo}
          removeTodo={actions.removeTodo}
        />
      ))}
      {todos.length === 0 && <p className={styles.message}>You don't have any tasks.</p>}
      <Form addTodo={actions.addTodo} />
    </div>
  );
};

export default List;
