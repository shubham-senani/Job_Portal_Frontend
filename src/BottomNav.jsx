import React from "react";
import { Link } from "react-router-dom";
const BottomNav = () => {
  return (
    <div
    // #BCEAD5
      style={{ backgroundColor: "#25875a" }}
      className="z-50 w-full border border-light"
    >
      <div className="d-flex justify-content-around">
        <Link
          type="button"
          to={"/home"}
          className="btn d-flex flex-column align-items-center justify-content-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <svg
            className="mb-0 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            aria-hidden="true"
            width="25"
            height="25"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          <span className="text-sm dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Home
          </span>
        </Link>

        <Link
          type="button"
          to={"/wallet"}
          className="btn d-flex flex-column align-items-center justify-content-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <svg
            className="w-5 h-5 mb-2 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            aria-hidden="true"
            width="25"
            height="25"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
            <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
          </svg>
          <span className="text-sm dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Wallet
          </span>
        </Link>

        <Link
          type="button"
          to={"/jobs"}
          className="btn d-flex flex-column align-items-center justify-content-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-person-workspace text-warning"
            viewBox="0 0 16 16"
          >
            <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
          </svg>
          <span className="text-sm text-warning dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Jobs
          </span>
        </Link>

        <Link
          type="button"
          to={'/connections'}
          className="btn d-flex flex-column align-items-center justify-content-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-people-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          </svg>
          <span className="dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Connections
          </span>
        </Link>

      </div>
    </div>
  );
};

export default BottomNav;
