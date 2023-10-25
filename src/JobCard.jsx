import React, { useEffect, useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
import { Link } from "react-router-dom";
import MiniPopUp from "./components/MinPopUp";
const joinStatus = () => {};

const JobCard = ({ job, joins, setJobItem }) => {
  const [isJoin, setIsJoin] = useState(false);
  const [join, setJoin] = useState({});
  const cookies = new Cookies();

  useEffect(() => {
    // setIsJoin(joins.some(join=> join.job === job._id));
    for (let i = 0; i < joins.length; i++) {
      if (joins[i].job === job._id) {
        setIsJoin(true);
        setJoin(joins[i]);
        break;
      }
    }
  }, []);

  const authAxios = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
      Authorization: `Bearer ${cookies.get("token")}`,
      userId: cookies.get("userId"),
    },
  });

  const createJoin = async () => {
    try {
      const response = await authAxios.post(`/api/v1/jobs/${job._id}/joins`);
    } catch (error) {
      alert(error);
    }
  };
  const handleClick = () => {
    createJoin();
    setIsJoin(true);
  };
  const openUp = () => {
    setJobItem(job);
  };

  return (
    <div>
      <MiniPopUp message={"You have requested, we will get back to you as soon as possible."}/>
      <div
        style={{ backgroundColor: "#E3F4F4" }}
        className="d-flex border justify-content-between rounded p-4 pe-1 mb-5 mt-5"
      >
        <Link onClick={openUp}
         data-bs-toggle="modal"
         data-bs-target="#exampleModal"
         className="d-flex text-decoration-none text-dark">
          <div className="d-flex justify-center items-center m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-person-circle text-success mr-3"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </div>
          <div className="mt-2">
            <div className="d-flex">
              <h5 className="text-decoration-none ms-3 me-1 mt-2">
                {job.title}
              </h5>
              <p className="mx-0 mt-2" style={{ color: "grey" }}>
                
                ({!job.dist? "":parseInt( job.dist.calculated/1000)}km)
              </p>
            </div>
            <p className="text-decoration-none mx-3 mt-2">
              <span className="fw-bold mx-0">&#8377; {job.wage}</span>/day
            </p>
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
                {job.address.villageOrTown +
                  ", " +
                  job.address.district +
                  ", " +
                  job.address.state}
              </p>
            </div>
            <span className="border p-1 bg-info rounded fw-medium">
              {job.requirement} requirements
            </span>
          </div>
        </Link>

        <button
          onClick={handleClick}
          style={{border: "none"}}
          className={`btn bg-transparent rounded-circle ${cookies.get("userId")===job.createdBy?"d-none":""} ${join.status|| isJoin ? "disabled" : ""}`}
          data-bs-toggle="modal"
          data-bs-target="#miniPopUp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className={`bi bi-person-fill-add text-success ${
              join.status === "accepted" ? "" : "d-none"
            }
              `}
            viewBox="0 0 24 24"
          >
            <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className={`bi bi-person-fill-add ${
              join.status === "accepted" ? "d-none" : ""
            } ${
              join.status === "joinRequest" || isJoin ? "text-warning" : "text-success"
            }`}
            viewBox="0 0 16 16"
          >
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
          </svg>
          <span className="">{`${isJoin ? "" : ""}`}</span>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
