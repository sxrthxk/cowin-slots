import { Button, Container, Divider, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
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
      }
      getData();
    } else {
      url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtId}&date=${date}
      `
      async function getData() {
        var response = await axios.get(url);
        setCenterData(response.data.centers);
      };
      getData();

    }
  }, [pincode, districtId]);
  console.log(centerData);

  const classes = useStyles();
  return (
    <div>
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
          <PincodeForm setPincode={assignPincode} />
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
          <StateListForm setDistrictId={assignDistrictId} />
        </Container>
      )}
      {centerData.length ?
        (<Container className={classes.containerData}>
          <Typography variant="h6">No Data Yet</Typography>
          <Divider className={classes.divider} variant="fullWidth" />

          {centerData.map((data) => (
            <>
              <CenterCard key={data.center_id} centerData={data} />
            </>
          ))}
        </Container>)
        :
        null
      }
    </div>
  );
}

export default App;
