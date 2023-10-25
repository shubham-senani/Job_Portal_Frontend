import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ImageCompressor from "image-compressor";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
import axios from "axios";
import { Cookies } from "react-cookie";

export default function AddressForm({ data }) {
  const [value, setValue] = useState("");
  const cookies = new Cookies();

  //Image-Compressor
  const imageCompressor = async (file) => {
    if (file) {
      try {
        const compressedFile = await new ImageCompressor(file, {
          quality: 0.6, // Adjust the quality (0-1)
          maxWidth: 500, // Set the maximum width
          maxHeight: 500, // Set the maximum height
        }).compress();

        return compressedFile;
      } catch (error) {
        console.error("Error compressing image:", error);
      }
    }
  };

  const authAxios = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
      Authorization: `Bearer ${cookies.get("token")}`,
    },
  });

  // function uploadPhoto(e) {
  //   const files = e.target.files;
  //   const image = new FormData();
  //   image.append("photo", files[0]);

  //   axios
  //     .post("/upload", image, {
  //       headers: { "Content-type": "multipart/form-data" },
  //     })
  //     .then((response) => {
  //       const { data: filenames } = response;
  //       setValue(filenames);
  //       data.setImage(filenames);
  //     });
  // }

  async function uploadPhoto(e) {
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, "");
    const file = e.target.files[0];
    const parts = file.name.split(".");
    const name = parts[0];
    const ext = parts[parts.length - 1];
    const key = name + "_" + timestamp + "." + ext;
    const type = file.type;
    console.log(parts)
    console.log(name);
    console.log(ext)
    console.log(key);
    console.log(type);

    // const compressedImage = await imageCompressor(file);

    const response = await authAxios.post(`/api/v1/user/putimage/profileUrl`, {
      key: key,
      type: type,
    });
    const preSignedUrl = response.data.url;

    // Use Axios to upload the selected file to AWS S3.
    axios
      .put(preSignedUrl, file, {
        headers: {
          "Content-Type": type, // Set the Content-Type header based on the file type.
        },
      })
      .then((response) => {
        console.log("File uploaded successfully:", response);
        alert("File uploaded successfully!");
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        alert("Error uploading file. Please try again.");
      });
  }

  return (
    // <React.Fragment className="m-0 p-0">
    <div>
      <Typography className="fw-normal" variant="h6" gutterBottom>
        {/* Form */}
      </Typography>
      <Grid container spacing={3}>
        {/* fullName */}
        <Grid item xs={12} sm={12} className="d-flex justify-content-center">
          <label htmlFor="image">
            <input
              type="file"
              onChange={uploadPhoto}
              id="image"
              className="d-none"
            />
            <div
              className="d-flex justify-content-center align-items-center bg-light rounded-circle"
              style={{ width: "70px", height: "70px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                style={{ color: "grey" }}
                className="bi bi-person-fill-up"
                viewBox="0 0 16 16"
              >
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
              </svg>
              <div>
                {data.image && (
                  <img
                    src={`http://localhost:4000/uploads/${data.image}`}
                    alt=""
                    srcset=""
                  />
                )}
              </div>
            </div>
          </label>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="fullName"
            value={data.fullName}
            onChange={(e) => data.setFullName(e.target.value)}
            name="fullName"
            label="Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        {/* fatherName */}
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="fatherName"
            value={data.fatherName}
            onChange={(e) => data.setFatherName(e.target.value)}
            name="fatherName"
            label="Father Name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        {/* age */}
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="age"
            value={data.age}
            onChange={(e) => data.setAge(e.target.value)}
            name="age"
            label="Age"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid className="ms-5" item xs={12} sm={6}>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender:</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              name="gender"
              checked={data.gender === "female"}
              onChange={(e) => data.setGender(e.target.value)}
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              name="gender"
              checked={data.gender === "male"}
              onChange={(e) => data.setGender(e.target.value)}
              control={<Radio />}
              label="Male"
            />
            <FormControlLabel
              value="other"
              name="gender"
              checked={data.gender === "other"}
              onChange={(e) => data.setGender(e.target.value)}
              control={<Radio />}
              label="Other"
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="villageOrTown"
            name="villageOrTown"
            label="Village/Town"
            value={data.villageOrTown}
            onChange={(e) => data.setVillageOrTown(e.target.value)}
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
            onChange={(e) => data.setSubDistrict(e.target.value)}
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
            label="Confirm"
          />
        </Grid>
      </Grid>
    </div>
    // {/* </React.Fragment> */}
  );
}
