import { Card, CardContent, Divider, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../styles";

const CenterCard = ({ centerData }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">
          <span>Name: </span>
          {centerData.name}
        </Typography>
        <Typography variant="subtitle1">Address : {centerData.address}</Typography>
        <Typography>Fee Type : {centerData.fee_type}</Typography>
        <Typography>
          Time : {centerData.from} to {centerData.to}
        </Typography>
        {centerData.sessions.map((session) => {return (<div key={session.session_id}><Typography>Vaccine : <u>{session.vaccine}</u></Typography>
        <Typography>Age Limit : {session.min_age_limit}</Typography>
        <Typography>Dose 1 : {session.available_capacity_dose1}</Typography>
        <Typography>Dose 2 : {session.available_capacity_dose1}</Typography>
        <Divider className={classes.divider}/>
        {session.slots.map((slot,index) => {return (
          <Typography> Slot {index + 1} : {slot}</Typography>
        )})}
        </div>)})}
        
      </CardContent>
    </Card>
  );
};

export default CenterCard;
