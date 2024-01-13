import React from "react";

import styles from "./form.module.css";

const Form = ({ addTodo }) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.length > 0) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="newItem" className={styles.label}>
        New Item
      </label>
      <input
        id="newItem"
        type="text"
        className={styles.input}
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default React.memo(Form);
