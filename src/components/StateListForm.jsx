import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import useStyles from "../styles";

const StateListForm = ({setDistrictId}) => {

  const [states, setStates] = useState();
  const [loading, setLoading] = useState(true);
  const [currentStateId, setCurrentStateId] = useState();
  const [districts, setDistricts] = useState();

  const classes = useStyles();

  const stateListSubmitHandler = (e) => {
    e.preventDefault();
    var districtId = e.target[2].value;
    setDistrictId(districtId)
  };

  // useEffect for fetching State List
  useEffect(() => {
    const url = "https://cdn-api.co-vin.in/api/v2/admin/location/states";
    async function getStates() {
      var response = await axios.get(url);
      // console.log(response.data.states);
      setStates(response.data.states);
      // console.log(states);
      setLoading(false);
    }
    getStates();
  }, [loading]);

  // useEffect for fetching District List
  useEffect(() => {
    const url = `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${currentStateId}`;
    async function getDistricts() {
      var response = await axios.get(url);
      // console.log(response.data.districts)
      setDistricts(response.data.districts);
    }
    getDistricts();
  }, [currentStateId]);

  return (
    <>
      {loading ? (
        <CircularProgress  className={classes.loadingButton}/>
      ) : (
        <>
          <form className={classes.form} onSubmit={stateListSubmitHandler}>
            {/* <label htmlFor="state">Select State</label> */}

            {/* Onchange takes a handler which sets the state_id.
          Current State is another state that is init to 1 by default.
          OnChange function triggers state change which is utilized by 
          useEffect to re-run the fetch api and get new list of districts.*/}
            <FormControl className={classes.select} variant="outlined">
              <InputLabel id="select-state">State</InputLabel>
              <Select
                
                onChange={(e) => setCurrentStateId(e.target.value)}
                label="State"
                labelId="select-state"
              >
                {states.map((state) => {
                  return (
                    <MenuItem key={state.state_id} value={state.state_id}>
                      {state.state_name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            {currentStateId ? (
              <>
              <FormControl className={classes.select} variant="outlined">
              <InputLabel id="select-district">District</InputLabel>
                <Select label="District"
                labelId="select-district">

                  {districts.map((district) => {
                    return (
                      <MenuItem
                        key={district.district_id}
                        value={district.district_id}
                      >
                        {district.district_name}
                      </MenuItem>
                    );
                  })}
                </Select></FormControl>
                <Button color="primary"variant="contained" type="submit">Submit</Button>
              </>
            ) : null}
          </form>
        </>
      )}
    </>
  );
};

export default StateListForm;
