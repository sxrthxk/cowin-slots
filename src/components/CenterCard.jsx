import { Card, CardContent, Divider, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../styles";

const CenterCard = ({ centerData }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">
          Name: {" "}
          <b>{centerData.name}</b>
        </Typography>
        <Typography variant="subtitle1">
          Address : {centerData.address}
        </Typography>
        <Typography>
          Fee Type: {" "}
          {centerData.fee_type === "Paid" ? (
            <b style={{ color: "salmon" }}>{centerData.fee_type}</b>
          ) : (
            <b style={{ color: "green" }}>{centerData.fee_type}</b>
          )}
        </Typography>
        {centerData.fee_type === "Paid" ? (
          <>
            {centerData.vaccine_fees.map((fee) => {
              return (
                <Typography>
                  Fees: Rs. <b>{fee.fee}</b> for {fee.vaccine}
                </Typography>
              );
            })}
          </>
        ) : null}

        <Typography>
          Time : {centerData.from} to {centerData.to}
        </Typography>

        {centerData.sessions.map((session) => {
          return (
            <div key={session.session_id}>
              <Divider className={classes.divider} />
              <Typography>
                Vaccine : <u>{session.vaccine}</u>
              </Typography>
              <Typography>Age Limit : <b style={{color: "SandyBrown"}}>{session.min_age_limit}</b></Typography>
              {session.available_capacity === 0 ? (
                <Typography>
                  Available Doses: <b style={{ color: "salmon" }}>None</b>
                </Typography>
              ) : (
                <Typography>
                  Available Doses:{" "}
                  <b>
                    <span style={{ color: "LightSeaGreen" }}>
                      {session.available_capacity}
                    </span>
                  </b>{" "}
                  | Dose 1: {session.available_capacity_dose1}, Dose 2 :{" "}
                  {session.available_capacity_dose2}
                </Typography>
              )}
              {session.slots.map((slot, index) => {
                return (
                  <Typography>
                    {" "}
                    Slot {index + 1} : {slot}
                  </Typography>
                );
              })}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default CenterCard;
