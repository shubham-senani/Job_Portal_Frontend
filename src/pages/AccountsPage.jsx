import React from "react";
import Account from "../AccountCard";
import { Cookies } from "react-cookie";
import { useState, useEffect } from "react";
import axios from "axios";
import RegisterPage from "./RegisterPage";
import { Navigate } from "react-router-dom";
const AccountsPage = () => {
  const [data, setData] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const cookies = new Cookies();

  const authAxios = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
      Authorization: `Bearer ${cookies.get("token")}`,
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await authAxios.get("/api/v1/user/cluster-members");
      setData(response.data.accounts);
    } catch (error) {
      alert(error);
    }
  };

  if (redirect) {
    return <Navigate to={"/register"} />;
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <button
        onClick={() => setRedirect(true)}
        type="button"
        style={{ top: "50px", left: "660px", maxWidth: "200px" }}
        className="btn bg-warning mt-5 mb-2 rounded-pill"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-plus-circle-fill m-1"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
        </svg>
        <span className="h6 m-1">Add New</span>
      </button>

      {data && (
        <div>
          {data.map((account) => {
            return <Account account={account} key={account._id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default AccountsPage;
