import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
const JobDetail = ({ jobItem }) => {
  const [user, setUser] = useState();
  const cookies = new Cookies();

  const authAxios = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
      Authorization: `Bearer ${cookies.get("token")}`,
      userId: cookies.get("userId"),
    },
  });

  useEffect(() => {
  }, []);

  const fetchUser = async () => {
    try {
      const response = await authAxios.get(`/api/v1/user/${jobItem.createdBy}`);
      // setUser(response.data.user);
    } catch (error) {
      alert(error);
    }
  };

  // Get the current date and time
  const currentDate = new Date();

  // Replace this with the last date you have (in ISO 8601 format or any other supported date format)
  const lastDate = new Date(jobItem.createdAt);

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - lastDate;

  // Convert milliseconds to seconds, minutes, hours, and days
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return (
    //   <!-- Modal -->
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header py-1 px-1">
            <button className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-left fw-bold text-dark"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
            </button>
            <button
              className=" btn d-flex border-success bg-light rounded-pill py-1 px-2 me-3"
              // style={{ backgroundColor: "#93e2bb" }}
            >
              <img className="me-2" src="share.svg" alt="" />
              <div className="fw-bold text-success">Share</div>
            </button>
          </div>

          <div className="modal-body">
            <div className="mt-2">
              <div className="fw-bold mb-2 text-success">
                Posted {days} days ago
              </div>
              <div className="d-flex flex-column">
                <h5 className="text-decoration-none ms-3 me-1 mt-2">
                  {jobItem.title}
                </h5>
                <div
                  className="ms-3 fs-8 position-relative"
                  style={{ top: "-10px", color: "grey" }}
                >
                  {jobItem.workDomain}
                </div>
              </div>
              <p className="text-decoration-none mx-3 mt-1">
                <span className="fw-bold mx-0">&#8377; {jobItem.wage}</span>
                /day
              </p>
              {!jobItem.address ? (
                " "
              ) : (
                <div className="d-flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill mt-1 ms-3 text-success"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <p className="text-decoration-none mx-2">
                    {jobItem.address.villageOrTown +
                      ", " +
                      jobItem.address.district +
                      ", " +
                      jobItem.address.state}

                    {console.log(jobItem)}
                  </p>
                  <p className="mx-0" style={{ color: "grey" }}>
                    (
                    {!jobItem.dist
                      ? ""
                      : parseInt(jobItem.dist.calculated / 1000)}
                    km)
                  </p>
                </div>
              )}
              <span className="p-1 ms-3 rounded fw-medium">
                {jobItem.requirement} requirements
              </span>
            </div>

            {!jobItem.createdBy ? (
              " "
            ) : (
              <div className="d-flex ms-3 mt-3 border bg-light p-2 rounded">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-person-circle text-success mx-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </div>
                <Link className="text-decoration-none fw-bold mt-1">
                  {jobItem.createdBy[0].fullName}
                </Link>
              </div>
            )}
          </div>

          <div className="d-flex justify-content-between modal-footer p-1">
            <button
              type="button"
              className="btn border-success py-1 px-1 mx-3 border rounded-pill bg-light "
              // data-bs-dismiss="modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-telephone-fill m-1 text-success"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
              <span className="fw-bold text-success m-1 ms-1">contact us</span>
            </button>
            <button type="button" className="btn py-1 px-2 bg-light border-success m-0 me-3 border rounded-pill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className={`bi bi-person-fill-add mb-1 text-success`}
                viewBox="0 0 16 16"
              >
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
              </svg>
              <span className="px-2 fw-bold text-success">Join</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
