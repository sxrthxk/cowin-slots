import { Button, TextField } from "@material-ui/core";
import React, { useRef } from "react";
import useStyles from "../styles";

const PincodeForm = ({setPincode}) => {

  const classes = useStyles();
  const pincodeInput = useRef(null);

  const pincodeSubmitHandler = (e) => {
    e.preventDefault();
    var pincode = pincodeInput.current.value;

    // CHECK PINCODE IS CORRECT
    if (pincode.length !== 6) {
      alert("Please enter a valid pincode.");
      pincodeInput.current.focus();
      return;
    }
    // END CHECK

    setPincode(pincode)
  };

  return (
    <form onSubmit={pincodeSubmitHandler} className={classes.form}>
      <TextField variant="outlined" label="Enter Pincode" inputRef={pincodeInput} type="number" />
      <Button color="primary" className={classes.submitButton} variant="contained" type="submit">Submit</Button>
    </form>
  );
};

export default PincodeForm;
