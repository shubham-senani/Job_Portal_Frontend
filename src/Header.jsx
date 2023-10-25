import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Drawer from "./Drawer";

const Header = ({ setSearchQuery }) => {
  const [searchValue, setSearchValue] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = () => {
    setSearchQuery(searchValue);
  };

  if (redirect) {
    return <Navigate to={"/createjob"} />;
  }

  return (
    <nav style={{ backgroundColor: "#25875a" }} className="">
      <div className="d-flex justify-content-between align-items-center py-3">
        {/* profile-icon */}
        <Link
          className="p-0 m-0"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <div className="d-flex justify-center items-center mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
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
        </Link>

        <Drawer />
        {/* search-bar */}
        <form className="d-flex ms-5" role="search">
          <input
            className="form-control rounded-start-pill me-2"
            type="search"
            style={{ width: "500px" }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search"
            aria-label="Search"
          />
          <Link
            onClick={handleSubmit}
            style={{
              left: "-11.4px",
              top: "0px",
              height: "46.8px",
              width: "63px",
            }}
            className="btn bg-light d-flex outline-none justify-content-center align-items-center position-relative rounded-end-pill"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-search mx-1 text"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Link>
        </form>

        <div>
          {/* create button */}
          <button
            onClick={() => setRedirect(true)}
            type="button"
            style={{ top: "50px", left: "660px", maxWidth: "200px" }}
            className="btn bg-warning rounded-pill p-1 px-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-plus-circle-fill mb-1 p-0 m-0"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
            <span className="fw-semibold ms-1 m-0 p-0">Create Job</span>
          </button>

          {/* notificatioin */}
          <Link to={'/notifications'} className="btn mx-5" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
