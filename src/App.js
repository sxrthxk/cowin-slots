import { Button, CircularProgress, Container, Divider, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CenterCard from "./components/CenterCard";
import PincodeForm from "./components/PincodeForm";
import StateListForm from "./components/StateListForm";
import useStyles from "./styles";

function formattedDate(d) {
  let month = String(d.getMonth() + 1);
  let day = String(d.getDate());
  const year = String(d.getFullYear());

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return `${day}-${month}-${year}`;
}

function App() {
  const [formType, setFormType] = useState("pincode");
  const [centerData, setCenterData] = useState([]);
  const [pincode, setPincode] = useState();
  const [districtId, setDistrictId] = useState();
  const [isLoading, setIsLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(true)
  const assignPincode = (p) => {
    setDistrictId(0);
    setPincode(p);
  };
  const assignDistrictId = (dId) => {
    setPincode(0);
    setDistrictId(dId);
  };

  useEffect(() => {
    // const data = pincode ? pincode : districtId;
    const dataMethod = pincode ? "pincode" : "districtId";
    var date = formattedDate(new Date());
    var url;
    if (dataMethod === "pincode") {
      url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`;
      async function getData() {
        var response = await axios.get(url);
        setCenterData(response.data.centers);
        setShowLoader(false)
      }
      getData();
    } else {
      url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtId}&date=${date}
      `;
      async function getData() {
        var response = await axios.get(url);
        setCenterData(response.data.centers);
        setShowLoader(false)


      }
      getData();
    }
  }, [pincode, districtId]);
  console.log(centerData);

  const classes = useStyles();
  return (
    <div className="rootDiv">
      {formType === "pincode" ? (
        <Container className={classes.container}>
          <Button
            variant="outlined"
            className={classes.button}
            color="secondary"
            onClick={() => setFormType("state")}
          >
            <Typography variant="caption">Get Slots by State List</Typography>
          </Button>
          <PincodeForm setPincode={assignPincode} setLoad={setIsLoading} />

        </Container>
      ) : (
        <Container className={classes.container}>
          <Button
            variant="outlined"
            className={classes.button}
            color="secondary"
            onClick={() => setFormType("pincode")}
          >
            <Typography variant="caption">Get Slots by Pincode</Typography>
          </Button>
          <StateListForm setDistrictId={assignDistrictId} setLoad={setIsLoading} />

        </Container>
      )}
      {!isLoading ? 
      <Container className={classes.containerData}>
      
      {showLoader ? (<CircularProgress style={{margin: '20px'}} />) :
      (<>
          <Divider className={classes.divider} variant="fullWidth" />

          {centerData.map((data) => (
            <React.Fragment key={data.center_id}>
              <CenterCard centerData={data} />
              <Divider className={classes.divider} variant="fullWidth" />
            </React.Fragment>
          ))}
          </>
      )}
        </Container>
      
      : null}
      {/* <footer>
        <Typography>
          Hosted with 💘 on gh-pages.{" "}
          <a
            style={{ color: "skyblue" }}
            href="https://github.com/sxrthxk/cowin-slots"
          >
            Click Here
          </a>{" "}
          for source code.
        </Typography>
      </footer> */}
    </div>
  );
}

export default App;
