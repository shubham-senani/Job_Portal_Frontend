import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useCookies, Cookies } from "react-cookie";
import axios from "axios";

// function Location(setCurrentLocation) {
//   if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation({ latitude, longitude });
//       },
//       (error) => {
//         console.error("Error getting location:", error.message);
//       }
//     );
//   } else {
//     console.error("Geolocation is not supported by this browser.");
//   }
// }

const Account = ({ account }) => {
  const [cookie, setCookie] = useCookies("name");
  const [longitude, setLongitude] = new useState("");
  const [latitude, setLatitude] = new useState("");
  const [imageUrl, setImageUrl] = new useState("");
  const [redirect, setRedirect] = useState(false);
  const cookies = new Cookies();

  const authAxios = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
      Authorization: `Bearer ${cookies.get("token")}`,
    },
  });

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    if (account.image) {
      try {
        const response = await authAxios.post(
          `/api/v1/user/getimage/profileUrl`,
          {
            key: account.image,
          }
        );
        // console.log(response.data.url);
        setImageUrl(response.data.url);
      } catch (error) {
        alert(error);
      }
    }
  };

  const signIn = (e) => {
    e.preventDefault();
    setCookie("userId", account._id);
    checkUpdateCurrentLocation();
    setRedirect(true);
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    }
  }, []);

  const checkUpdateCurrentLocation = async () => {
    try {
      await authAxios.put(`/api/v1/user/updateLocation/${account._id}`, {
        longitude,
        latitude,
      });
      alert("location updated")
    } catch (error) {
      alert(error);
    }
  };

  if (redirect) {
    return <Navigate to={"/jobs"} />;
  }

  return (
    <Link onClick={signIn} className="text-decoration-none text-dark">
      <div
        style={{ backgroundColor: "#E3F4F4" }}
        className="d-flex border rounded p-4 m-5"
      >
        <div className="d-flex justify-center items-center m-1">
          {!imageUrl ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
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
            </>
          ) : (
            <div className="">
              <img
                className="rounded-circle"
                src={imageUrl}
                style={{ width: "50px", height: "50px" }}
                alt=""
                srcset=""
              />
            </div>
          )}
        </div>
        <h5 className="text-decoration-none mx-4 mt-2">{account.fullName}</h5>
      </div>
    </Link>
  );
};

export default Account;
