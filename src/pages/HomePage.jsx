import React from "react";
import { Cookies } from "react-cookie";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ScrollUpDownListener from "../ScrollUpDownListener";
import Header from "../Header";
import BottomNav from "../BottomNav";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Card from "../HomeCard";
// import Card1 from ".../HomeCard1";
import User from "../HomeUser";
const JobsPage = () => {
  const [data, setData] = useState([]);
  const [joins, setJoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState("");
  const [scrollDirection, setScrollDirection] = useState("up");
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
      // console.log(response.data.jobs)
    } catch (error) {
      alert(error);
    }
  };

  const fetchJoin = async () => {
    try {
      const response = await authAxios.get(
        `/api/v1/user/${cookies.get("userId")}/joins`
      );
      // console.log(response.data.joins)
      setJoins(response.data.joins);
    } catch (error) {
      alert(error);
    }
  };

  const handleScrollUp = () => {
    setScrollDirection("up");
    // Your logic for scrolling up
  };

  const handleScrollDown = () => {
    setScrollDirection("down");
    // Your logic for scrolling down
  };

  let scroll = 0;
  let timeout;

  useEffect(() => {
    window.onscroll = () => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        if (scroll >= window.scrollY && window.scrollY > 10) {
          document.getElementById("header").classList.add("sticky");
        } else {
          document.getElementById("header").classList.remove("sticky");
        }

        scroll = window.scrollY;
      }, 10);
    };
  }, []);

  const handleWithdrawal = async (joinId) => {
    try {
      const status = "withdrawalRequest";
      await authAxios.put(`/api/v1/joins/updateStatus/${joinId}`, {
        status,
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Wrap>
      {/* header */}
      <div id="header">
        <div className="z-3">
          <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </div>

      {/* body */}
      <div style={{ width: "98vw" }} className="row align-items-start m-0 p-0">
        <div className="col-6"></div>
        <div className="col-6 px-4 m-0">
          {data && (
            <div className="">
              {data.map((job) => {
                return (
                  <div key={job._id}>
                    <Accordion
                      style={{ backgroundColor: "#E3F4F4" }}
                      className="m-2 mt-5"
                    >
                      <AccordionSummary
                        expandIcon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-caret-down-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                          </svg>
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Card job={job} key={job._id} />
                      </AccordionSummary>
                      <AccordionDetails>
                        <hr />
                        <span>Created by:</span>
                        <div
                          className="d-flex  align-items-center rounded mt-3"
                          style={{
                            borderRadius: "",
                            backgroundColor: "#93e2bb",
                          }}
                        >
                          <div className="d-flex justify-center items-center m-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
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
                          <div className="m-3">{job.createdBy.fullName}</div>
                        </div>
                        <hr />
                        <div className="m-2">
                          <span>Join by:</span>
                          <User job={job._id} key={job._id} />
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                );
              })}
            </div>
          )}

          {joins && (
            <div className="">
              {joins.map((join) => {
                return (
                  join.job && (
                    <div key={join.job._id}>
                      <Accordion
                        style={{ backgroundColor: "#faeeee" }}
                        className="m-2 mt-5"
                      >
                        <AccordionSummary
                          expandIcon={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-caret-down-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                          }
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Card job={join.job} key={join.job._id} />
                        </AccordionSummary>
                        <AccordionDetails>
                          <button
                            onClick={() => {
                              handleWithdrawal(join._id);
                            }}
                            className="btn btn-danger position-relative"
                            style={{ right: "-480px" }}
                          >
                            Withdrawal Request
                          </button>
                          <hr />
                          <span>Created by:</span>
                          <div
                            className="d-flex  align-items-center rounded mt-3"
                            style={{
                              borderRadius: "",
                              backgroundColor: "#93e2bb",
                            }}
                          >
                            <div className="d-flex justify-center items-center m-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
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
                            <div className="m-3">
                              {join.job.createdBy.fullName}
                            </div>
                          </div>
                          <hr />
                          <div className="m-2">
                            <span>Join by:</span>
                            <User job={join.job._id} key={join.job._id} />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  )
                );
              })}
            </div>
          )}
        </div>

        {/* <div className="col-6 px-4 mt-5 m-0 position-fixed">
          <SideProfile />
        </div> */}
      </div>

      {/* drawer */}
      <div>
        <Drawer>
          <div
            className={`${scrollDirection === "up" ? "active" : "deactive"}`}
          >
            <BottomNav />
          </div>
        </Drawer>

        {/* ScrollUpDownListener component */}
        <ScrollUpDownListener
          onScrollUp={handleScrollUp}
          onScrollDown={handleScrollDown}
        />
      </div>
    </Wrap>
  );
};

export default JobsPage;

const Drawer = styled.div`
  .active {
    width: 100vw;
    position: fixed;
    bottom: 1px;
    border: none;
    transition: bottom 0.3s;
  }
  .deactive {
    width: 100vw;
    position: fixed;
    bottom: -85px;
    border: none;
    transition: bottom 0.8s;
  }
`;

const Wrap = styled.div`
  #header {
    top: -100px;
    transition: top 0.5s ease-in-out;
  }

  #header.sticky {
    position: sticky;
    top: 0;
  }
`;
