import { Card, CardContent, Typography } from "@material-ui/core";
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
      </CardContent>
    </Card>
  );
};

export default CenterCard;
