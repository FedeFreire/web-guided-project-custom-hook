import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import useForm from "./hooks/useForm";

import Button from "../theme/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

const initialValue = {
  username: "",
  email: "",
};

export default function SignupForm() {
  const classes = useStyles();
  const callBack = () => {
    alert(`${values.username}, ${values.email}`);
  };
  const [values, clearForm, handleChanges, handleSubmit] =
    useForm('sign-in',initialValue, callBack);

  

  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="form-header">
          <legend>Add New Client</legend>
          </div>
          <div className="form-input">
          <TextField
            id="outlined-name"
            label="User Name"
            className={classes.textField}
            name="username"
            value={values.username}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-email"
            label="email"
            className={classes.textField}
            name="email"
            value={values.email}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <div className="flexer">
            <Button color="red" onClick={clearForm}>
              Clear
            </Button>
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
