import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
export default function WorkDomainForm({data}) {
  console.log(data.workdomain);
  return (
    <React.Fragment>
      <Typography className="fw-normal" variant="h6" gutterBottom>
        Choose Work Domain
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
            <Button
              variant="outlined"
              className="d-flex justify-content-center align-items-center flex-column"
            >
          <label htmlFor="agriculture">
              <img
                className="m-2 me-2"
                style={{ width: "120px", height: "120px" }}
                src="agriculture.svg"
                alt=""
                srcSet=""
              />
              <span className="m-5">Agriculture</span>
          </label>
            </Button>
          <input
            type="radio"
            name="workdomain"
            value="agriculture"
            checked={data.workdomain === "agriculture"}
            onChange={e=>data.setWorkdomain(e.target.value)}
            style={{ visibility: "hidden" }}
            id="agriculture"
          />
        </Grid>
        <Grid item xs={12} md={6}>
            <Button
              variant="outlined"
              className="justify-content-center align-items-center d-flex flex-column"
            >
          <label htmlFor="construction">
              <img
                className="m-2 me-2"
                style={{ width: "120px", height: "120px" }}
                src="construction.svg"
                alt=""
                srcSet=""
              />
              <span className="m-5">Construction</span>
          </label>
            </Button>
          <input
            type="radio"
            name="workdomain"
            value="construction"
            checked={data.workdomain === "construction"}
            onChange={e=>data.setWorkdomain(e.target.value)}
            style={{ visibility: "hidden" }}
            id="construction"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
