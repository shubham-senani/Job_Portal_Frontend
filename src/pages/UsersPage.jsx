import React from "react";
import { Cookies } from "react-cookie";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ScrollUpDownListener from "../ScrollUpDownListener";
import Header from "../Header";
import BottomNav from "../BottomNav";
import User from "../UserCard";


const UsersPage = () => {
  const [data, setData] = useState([]);
//   const [jobItem, setJobItem] = useState({});
//   const [joins, setJoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState("");
  const [scrollDirection, setScrollDirection] = useState("up");
  const cookies = new Cookies();

  const authAxios = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
      Authorization: `Bearer ${cookies.get("token")}`,
      userId: cookies.get("userId")
    },
  });

  useEffect(() => {
    fetchData();
    // fetchJoin();
  }, []);

  const fetchData = async () => {
    try {
      const response = await authAxios.get(
        `/api/v1/user?search=${searchQuery}`
      );
      setData(response.data.users);
    } catch (error) {
      alert(error);
    }
  };

//   const fetchJoin = async () => {
//     try {
//       const response = await authAxios.get(
//         `/api/v1/user/${cookies.get("userId")}/joins`
//       );
//       setJoins(response.data);
//     } catch (error) {
//       alert(error);
//     }
//   };

  const handleScrollUp = () => {
    setScrollDirection("up");
    // Your logic for scrolling up
  };

  const handleScrollDown = () => {
    setScrollDirection("down");
    // Your logic for scrolling down
  };

  if (searchHistory !== searchQuery) {
    setSearchHistory(searchQuery);
    fetchData();
  }

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

  return (
    <Wrap>
      <div id="header">
        <div>
          <Header setSearchQuery={setSearchQuery} />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {data && (
          <div className="">
            {data.map((user) => {
              return <User user={user} key={user._id}/>;
            })}
          </div>
        )}
      </div>
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
      {/* <JobDetail jobItem={jobItem}/> */}
    </Wrap>
  );
};

export default UsersPage;

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
