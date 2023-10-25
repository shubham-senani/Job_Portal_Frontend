import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [cluster, setCluster] = useState(null);
  const [notification, setNotification] = useState([]);

  // const [ready, setReady] = useState(false);
  // useEffect(()=>{
  //     if(!user){
  //       axios.get('/profile').then(({data})=>{
  //         setUser(data);
  //         setReady(true);
  //       })
  //     }
  // }, [])

  // user, setUser, ready
  return (
    <UserContext.Provider
      value={{ cluster, setCluster, notification, setNotification }}
    >
      {children}
    </UserContext.Provider>
  );
}
