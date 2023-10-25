import React from "react";
import moment from "moment";
import { Cookies } from "react-cookie";

const Transactions = ({ transaction }) => {
  const cookies = new Cookies();
  const userId = cookies.get("userId");

  const currentTime = moment(transaction.createdAt);
  const formattedTime = currentTime.format("MMMM Do YYYY, h:mm a");

  if (transaction.from === userId) {
    return (
      <div className="p-3 border rounded m-3">
        <div className="fs-7 mb-1" style={{ color: "grey" }}>
          {formattedTime}
        </div>
        <div className="d-flex justify-content-between">
          <div className="fw-medium"></div>
          <div className="text-danger fw-bold">-{transaction.amount}</div>
        </div>
      </div>
    );
  } else if (transaction.to === userId) {
    return (
      <div className="p-3 border rounded m-3">
        <div className="fs-7 mb-1" style={{ color: "grey" }}>
          {formattedTime}
        </div>
        <div className="d-flex justify-content-between">
          <div className="fw-medium"></div>
          <div className="text-success fw-bold">+{transaction.amount}</div>
        </div>
      </div>
    );
  }
};

export default Transactions;
