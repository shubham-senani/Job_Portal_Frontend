import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobRequested from "../components/notifications/JobRequested";
import axios from "axios";
import { Cookies } from "react-cookie";
import JobAccepted from "../components/notifications/JobAccepted";

const NotificationPage = () => {
  const [data, setData] = useState([]);
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
    fetchData();
    fetchJoin();
  }, []);

  const fetchData = async () => {
    try {
      const response = await authAxios.get(`/api/v1/jobs/userjobs?sort=latest`);
      setData(response.data.jobs);
    } catch (error) {
      alert(error);
    }
  };

  const fetchJoin = async () => {
    try {
      const response = await authAxios.get(
        `/api/v1/user/${cookies.get("userId")}/joins`
      );
      setJoins(response.data);
      // console.log(response.data)
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container">
      <Link className="position-absolute" style={{ left: "20px", top: "10px" }}>
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
      </Link>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="mt-3">Notifications</h1>
        <div>
          {joins &&
            joins.map((join) => {
              if (join.status === "accepted") {
               return <JobAccepted join={join} key={join._id} />;
              }
            })}
        </div>
        <div>{data && data.map((e) => <JobRequested job={e._id} key={e._id} />)}</div>
      </div>
    </div>
  );
};

export default NotificationPage;
