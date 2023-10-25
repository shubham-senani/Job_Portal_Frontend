import React from "react";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
export default function SideProfile({ user }) {
  return (
    user.fullName && (
      <MDBCard
        className="vh-0 border-0"
        style={{ borderRadius: "", backgroundColor: "" }}
      >
        <MDBCardBody className="p-4 text-black">
          <div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <MDBTypography tag="h6">{user.fullName}</MDBTypography>
              {/* <MDBTypography tag="h6">{user.t_score}</MDBTypography> */}
            </div>
          </div>
          <div className="d-flex align-items-center mb-4">
            {/* <div className="flex-shrink-0">
            <MDBCardImage
              style={{ width: "70px" }}
              className="img-fluid rounded-circle border border-dark border-3"
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
              alt="Generic placeholder image"
              fluid
            />
          </div> */}
            <div className="flex-grow-1 ms-3">
              <div className="d-flex mt-3 flex-row align-items-center mb-2">
                {/* <p className="mb-0 me-2">@sheisme</p> */}
                {/* <ul
                className="mb-0 list-unstyled d-flex flex-row"
                style={{ color: "#1B7B2C" }}
              >
                <li>
                  <MDBIcon fas icon="star fa-xs" />
                </li>
                <li>
                  <MDBIcon fas icon="star fa-xs" />
                </li>
                <li>
                  <MDBIcon fas icon="star fa-xs" />
                </li>
                <li>
                  <MDBIcon fas icon="star fa-xs" />
                </li>
                <li>
                  <MDBIcon fas icon="star fa-xs" />
                </li>
              </ul> */}
                <div
                  className="d-flex border rounded-pill py-2 px-4 justify-content-between"
                  style={{ width: "350px"}}
                >
                  <span className="fs-6 fw-bold" style={{ color: "#0e0e0e6e" }}>
                    Credit:
                  </span>{" "}
                  <span className=" fs-6 fw-bold">{user.credit}</span>{" "}
                </div>
              </div>
              <div className="d-flex me-5">
                {/* <MDBBtn outline color="dark" rounded size="sm">
                + Follow
              </MDBBtn>
              <MDBBtn outline color="dark" rounded size="sm" className="mx-1">
                See profile
              </MDBBtn> */}
                {/* <div className="form-check m-5 form-switch">
                <input
                  className="form-check-input fs-2"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label className="form-check-label mt-3" htmlFor="flexSwitchCheckDefault">
                  Available
                </label>

              </div> */}
              </div>
            </div>
          </div>
          {/* <hr /> 
        <MDBCardText>52 comments</MDBCardText>
        <MDBBtn color="success" rounded block size="lg">
          <MDBIcon far icon="clock me-2" /> Book now
        </MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    )
  );
}
