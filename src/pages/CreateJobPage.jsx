import * as React from "react";
import { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddressForm from "../components/job_register/AddressForm";
import WorkDomainForm from "../components/job_register/WorkDomainForm";
import Review from "../components/job_register/Review";
import axios from "axios";
import { Cookies } from "react-cookie";
import { useState } from "react";
import { Navigate } from "react-router-dom";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// } 

const steps = ["Step1", "Step2"];

function getStepContent(step, addressFormProps, workdomainProps) {
  switch (step) {
    case 0:
      return <AddressForm data={addressFormProps} />;
    case 1:
      return <WorkDomainForm data={workdomainProps} />;
    // case 2:
    //   return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function CreateJobPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [title, setTitle] = useState("");
  const [wage, setWage] = useState("");
  const [labour_number, setLabour_number] = useState("");
  const [duration, setDuration] = useState("");
  const [villageOrTown, setVillageOrTown] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [workdomain, setWorkdomain] = useState("");
  const [redirect, setRedirect] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    }
  }, []);

  const addressFormProps = {
    title,
    setTitle,
    wage,
    setWage,
    labour_number,
    setLabour_number,
    duration,
    setDuration,
    villageOrTown,
    setVillageOrTown,
    subDistrict,
    setSubDistrict,
    district,
    setDistrict,
    state,
    setState,
    country,
    setCountry,
    postalCode,
    setPostalCode,
  };
  const workdomainProps = {
    workdomain,
    setWorkdomain,
  };

  // Request;
  const authAxios = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
      Authorization: `Bearer ${cookies.get("token")}`,
      userId: cookies.get("userId"),
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authAxios.post("/api/v1/jobs", {
        title,
        wage,
        labour_number,
        duration,
        workdomain,
        longitude,
        latitude,
        workLocation: {
          villageOrTown,
          subDistrict,
          district,
          postalCode,
          state,
          country,
        },
      });
      setRedirect(true);
    } catch (error) {
      alert(error);
    }
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  if (redirect) {
    return <Navigate to={"/home"} />;
  }

  return (
    <React.Fragment>
      <CssBaseline />

      <Toolbar
        className="text-success position-fixed d-inline-block"
        style={{ top: "15px" }}
      >
        <Typography className="fw-bold" variant="h5" color="" noWrap>
          Company name
        </Typography>
      </Toolbar>

      <Container
        className=""
        component="main"
        maxWidth="md"
        sx={{ mb: 2, right: "20px" }}
      >
        <Paper
          className="me-5 mt-5"
          variant="outlined"
          sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
        >
          <Typography
            className="fw-medium"
            component="h1"
            variant="h4"
            align="center"
          >
            New Job
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                You have almost done!
              </Typography>
              <Typography variant="subtitle1">
                Please Submit We will reach you soon!
                <Button onClick={onSubmit} className="m-5" variant="contained">
                  Submit
                </Button>
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, addressFormProps, workdomainProps)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button
                    className="text-success"
                    onClick={handleBack}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Back
                  </Button>
                )}

                <Button
                  className="bg-success"
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Done" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        {/* <Copyright /> */}
      </Container>
    </React.Fragment>
  );
}
