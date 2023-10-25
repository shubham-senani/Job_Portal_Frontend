import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";
const LoginPage = () => {
  const [phone_number, setPhone_number] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {setCluster} = useContext(UserContext);
  const Login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/auth/", {
        phone_number:phone_number
      });
      setCluster(response.data);
      alert(response.data.message);
      setRedirect(true);
    } catch (error) {
      alert(error)
    }
  };

  if (redirect) {
    return <Navigate to={"/verify"} />;
  }

  return (
    <div className="m-4 grow flex items-center justify-around">
      <div style={{backgroundColor: "#E3F4F4"}} className="border rounded">
        <h1 className="mt-4 mb-1 text-dark text-center">Login</h1>
        <form onSubmit={Login} className="d-flex flex-column" action="">
          <input
            className="my-5 mx-3 border rounded p-2 text-center hover:none"
            type="text"
            placeholder="9876543112"
            value={phone_number}
            onChange={(e) => setPhone_number(e.target.value)}
          />
          <button className="btn bg-success text-light mb-4 mx-5 rounded-pill">Send OTP</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
