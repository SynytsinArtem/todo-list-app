import React from "react";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

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
      <TextField
        className={styles.input}
        id="newItem"
        label="New Item"
        variant="outlined"
        value={value}
        onChange={handleChange}
        required
      />
      <span className={styles.buttonWrapper}>
        <Fab color="primary" aria-label="add" type="submit" size="large" disabled={value.length === 0}>
          <AddIcon />
        </Fab>
      </span>
    </form>
  );
};

export default React.memo(Form);
