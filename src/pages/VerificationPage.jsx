import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";
import axios from "axios";

const VerificationPage = () => {
  const [otpcode, setOtpcode] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { cluster } = useContext(UserContext);
  const Verify = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/v1/auth/verify-otp", {
        otpcode: otpcode,
        clusterId: cluster.Id,
      });
      setRedirect(true);
    } catch (error) {
      alert(error);
    }
  };
  
  if(redirect){
    return <Navigate to={"/accounts"} />;
  }

  return (
    <div className="m-4 grow flex items-center justify-around">
      <div style={{backgroundColor: "#E3F4F4"}} className="border rounded">
        <h1 className="mt-2 text-dark text-center">Enter-OTP</h1>
        <form onSubmit={Verify} className="d-flex flex-column" action="">
          <input
            className="m-5 border rounded p-2 text-center"
            type="text"
            placeholder="123456"
            value={otpcode}
            onChange={(e) => setOtpcode(e.target.value)}
          />
          <button className="btn bg-success text-light rounded-pill mb-4 mx-5">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default VerificationPage;
