import React from "react";
import styled from "styled-components";

const UserProfile = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Wrapper>
        <div
          className="d-flex justify-content-between head"
          style={{ width: "600px" }}
        >
          <button className="btn m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-left fw-bold text-success"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </button>
          <button
            className="d-flex justify-content-center align-items-center rounded-pill btn m-3 border-success"
            style={{ height: "30px" }}
          >
            <span className="fw-bold text-success">Share</span>
          </button>
        </div>
        <div className="profile-header">
          <div className="detail">
            <div className="name">Skipper Senani</div>
            <div className="blue-strip tagline mt-1">Fashion Model</div>
          </div>
          <div className="overflow-hidden profile-image">
            <img
              style={{ width: "100%", backgroundSize: "cover" }}
              src="https://drive.google.com/uc?id=1dlcuHziCAaVjdUWOL9MHcoN4OWrdo6Q3"
            />
          </div>
        </div>
        <div
          className="d-flex flex-column px-5 py-2"
          style={{ width: "100%"}}
        >
          <div className="d-flex flex-row row align-items-between">
            <div
              className="col-3"
              style={{ fontSize: "14px", color: "#b8b8b8" }}
            >
              Father Name
            </div>
            <div className="col-4 ms-5">Shubham Senani</div>
          </div>
          <div className="d-flex flex-row row align-items-between mt-4">
            <div
              className="col-3"
              style={{ fontSize: "14px", color: "#b8b8b8" }}
            >
              Age
            </div>
            <div className="col-4 ms-5">22</div>
          </div>
          <div className="d-flex flex-row align-items-between mt-4">
            <div
              className="col-3"
              style={{ fontSize: "14px", color: "#b8b8b8" }}
            >
              Gender
            </div>
            <div className="col-4 ms-5">Male</div>
          </div>
          <div className="d-flex flex-row align-items-between mt-4">
            <div
              className="col-3"
              style={{ fontSize: "14px", color: "#b8b8b8" }}
            >
              Status
            </div>
            <div className="col-4 ms-5">Available</div>
          </div>
          <div className="d-flex flex-row align-items-between mt-4">
            <div
              className="col-3"
              style={{ fontSize: "14px", color: "#b8b8b8" }}
            >
              Address
            </div>
            <div className="col-4 ms-5">iiitv icd</div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};


const Wrapper = styled.div`
  margin-inline: 100px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid grey;
  border-radius: 10px;

  .tagline {
    color: #b8b8b8;
    font-size: 14px;
  }

  .head{
    box-shadow: 0px 2px 0px 0px grey;
  }

  .blue-strip {
    position: relative;
    justify-content: flex-start;
  }

  .blue-strip:before {
    content: "-";
    color: #66c6e9;
    position: relative;
    width: 2px;
    height: 9.3px;
    margin-right: 10px;
    background-color: #66c6e9;
  }

  .profile-header {
    display: flex;
    padding: 20px 40px;
    width: 100%;
    justify-content: space-around;
    position: relative;
  }

  .profile-header .detail {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .profile-header .detail .name {
    font-size: 24px;
  }

  .profile-header .detail .name::before {
    content: "";
    color: white;
    width: 100%;
    height: 1px;
    margin-top: 10px;
  }

  .profile-header .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    overflow: hidden;
  }

  // .profile-header .profile-image::after {
  //   content: "PRO";
  //   color: white;
  //   font-size: 11.66px;
  //   position: absolute;
  //   background-color: #fd4d4d;
  //   font-weight: 400;
  //   width: 40px;
  //   height: 18px;
  //   top: 30px;
  //   right: 30px;
  //   border-radius: 100px;
  //   box-shadow: -2px 2px 4px 0px lighten(#fd4d4d, 10%);
  // }

  .profile-header .profile-image img {
    width: 100%;
    background-size: cover;
  }

  .stat-container {
    width: 100%;
    border-bottom: solid 1.5px lighten(#f6f6f6, 20%);
    padding: 20px 50px 20px 0px;
    display: flex;
    justify-content: space-around;
  }

  .stat-container .stat {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .stat-container .stat.left {
    padding-right: 40px;
  }

  .stat-container .stat.middle {
    padding-left: 40px;
    padding-right: 40px;
    border-left: solid 1.5px lighten(#f6f6f6, 20%);
    border-right: solid 1.5px lighten(#f6f6f6, 20%);
  }

  .stat-container .stat.right {
    padding-left: 26.66px;
  }

  .stat-container .stat .big-text {
    font-size: 24px;
    margin-bottom: -12px;
  }

  .stat-container .stat .small-text {
    font-size: 14px;
    color: #b8b8b8;
  }
`;

export default UserProfile;
