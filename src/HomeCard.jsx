import React, { useEffect, useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";

const HomeCard = ({ job }) => {

  return (
    <div className="mt-2">
      <div className="d-flex">
        <h5 className="text-decoration-none ms-3 me-1 mt-2">{job.title}</h5>
        <p className="mx-0 mt-2" style={{ color: "grey" }}>
          ({!job.dist ? "" : parseInt(job.dist.calculated / 1000)}km)
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
  );
};

export default HomeCard;
