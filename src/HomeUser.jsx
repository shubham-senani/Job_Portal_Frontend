import React, { useEffect, useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";

const HomeUser = ({ job }) => {
  const [data, setData] = useState();
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
      setData(response.data.joins);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      {data &&
        data.map((e) => {
          return ( e.fullName &&
            <div className="d-flex  align-items-center rounded mt-3" style={{ borderRadius: "", backgroundColor: "#93e2bb" }} key={e.user._id} >
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
              <div className="m-3">{e.user.fullName}</div>
            </div>
          );
        })}
    </div>
  );
};

export default HomeUser;
