import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function AddressForm({ data }) {
  return (
    <React.Fragment className="m-0 p-0">
      {/* <div> */}
      <Typography className="fw-normal" variant="h6" gutterBottom>
        Job address
      </Typography>
      <Grid container spacing={3}>
        {/* title */}
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="title"
            value={data.title}
            onChange={(e) => data.setTitle(e.target.value)}
            name="title"
            label="Title"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        {/* wage */}
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="wage"
            value={data.wage}
            onChange={(e) => data.setWage(e.target.value)}
            name="wage"
            label="Wage"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        {/* Labour number */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="labour_number"
            value={data.labour_number}
            onChange={(e) => data.setLabour_number(e.target.value)}
            name="labour_number"
            label="Number of workers"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="duration"
            value={data.duration}
            onChange={(e) => data.setDuration(e.target.value)}
            name="duration"
            label="Duration"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="villageOrTown"
            name="villageOrTown"
            label="Village/Town"
            value={data.villageOrTown}
            onChange={e=>data.setVillageOrTown(e.target.value)}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="subDistrict"
            name="subDistrict"
            label="Sub-District"
            value={data.subDistrict}
            onChange={e=>data.setSubDistrict(e.target.value)}
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="district"
            value={data.district}
            onChange={(e) => data.setDistrict(e.target.value)}
            name="district"
            label="district"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            value={data.state}
            onChange={(e) => data.setState(e.target.value)}
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            value={data.postalCode}
            onChange={(e) => data.setPostalCode(e.target.value)}
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            value={data.country}
            onChange={(e) => data.setCountry(e.target.value)}
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
      {/* </div> */}
    </React.Fragment>
  );
}
