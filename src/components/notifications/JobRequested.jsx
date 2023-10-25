import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { Link } from "react-router-dom";
const JobRequested = ({ job }) => {
  const [joins, setJoins] = useState([]);
  const cookies = new Cookies();

  const authAxios = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
      Authorization: `Bearer ${cookies.get("token")}`,
      userId: cookies.get("userId"),
    },
  });

  useEffect(() => {
    fetchJoin();
  }, []);

  const fetchJoin = async () => {
    try {
      const response = await authAxios.get(`/api/v1/jobs/${job}/joins`);
      setJoins(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const handleAccept = async (joinId) => {
    try {
      const status = "accepted";
      await authAxios.put(`/api/v1/joins/updateStatus/${joinId}`, {
        status,
      });
    } catch (error) {
      alert(error);
    }
  };

  const handleReject = async (joinId) => {
    try {
      await authAxios.delete(`/api/v1/joins/${joinId}`);
    } catch (error) {
      alert(error);
    }
  };

  const handleReplace = async (joinId) => {
    try {
      const status = "completed";
      await authAxios.put(`/api/v1/joins/updateStatus/${joinId}`, {
        status,
      });
    } catch (error) {
      alert(error);
    }
  };

  const handleCompleted = async (joinId) => {
    try {
      const status = "completed";
      await authAxios.put(`/api/v1/joins/updateStatus/${joinId}`, {
        status,
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {joins &&
        joins.map((join) => {
          if (join.status === "joinRequest") {
            return (
              <div
                className="d-flex flex-column border mt-5 rounded"
                style={{
                  width: "500px",
                  height: "120px",
                  background: "#E1F4E5",
                }}
                key={join._id}
              >
                <div className="d-flex justify-content-end mx-2">
                  {join.createdAt}
                </div>
                <div>
                  <div
                    className="d-flex  align-items-center rounded"
                    // style={{ borderRadius: "", backgroundColor: "#93e2bb" }}
                  >
                    <Link className="d-flex">
                      <div className="d-flex justify-center items-center m-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          className="bi bi-person-circle text-dark mr-3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                          <path
                            fillRule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                          />
                        </svg>
                      </div>
                      <div className="me-2 mt-2 fw-bold">
                        {join.user.fullName}
                      </div>
                    </Link>
                    <span className="">requested to join the job</span>
                    <Link className="ms-1 fw-bold">{join.job.title}</Link>
                  </div>
                </div>
                <div className="position-relative" style={{ bottom: "0" }}>
                  <button
                    onClick={() => handleAccept(join._id)}
                    className="btn  m-3 fw-bold"
                    style={{ backgroundColor: "#38cf72" }}
                  >
                    accept
                  </button>
                  <button
                    onClick={() => handleReject(join._id)}
                    className="btn m-3 fw-bold"
                    style={{ backgroundColor: "#fa6161" }}
                  >
                    reject
                  </button>
                </div>
              </div>
            );
          }
          if (join.status === "withdrawalRequest") {
            return ( join.job &&
              <div
                className="d-flex flex-column border mt-5 rounded"
                style={{
                  width: "500px",
                  height: "130px",
                  background: "#a06dff17",
                }}
                key={join._id}
              >
                <div className="d-flex justify-content-end mx-2">
                  {join.createdAt}
                </div>
                <div>
                  <div className="d-flex  align-items-center rounded">
                    <Link className="d-flex">
                      <div className="d-flex justify-center items-center m-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          className="bi bi-person-circle text-dark mr-3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                          <path
                            fillRule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                          />
                        </svg>
                      </div>
                      <div className="me-2 mt-2 fw-bold">
                        {join.user.fullName}
                      </div>
                    </Link>
                    <span className="">requested to Withdraw from </span>
                    <Link className="ms-1 fw-bold">{join.job.title}</Link>
                  </div>
                </div>
                <div className="position-relative" style={{ bottom: "0" }}>
                  <button
                    onClick={() => handleReplace(join._id)}
                    className="btn  m-3 fw-bold"
                    style={{ backgroundColor: "#0dbcdea1" }}
                  >
                    Replace
                  </button>
                  <button
                    onClick={() => handleCompleted(join._id)}
                    className="btn m-3 fw-bold"
                    style={{ backgroundColor: "#ff7d7d45" }}
                  >
                    Don't Replace
                  </button>
                </div>
              </div>
            );
          }
        })}
    </>
  );
};

export default JobRequested;
