import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SideProfile from "../components/sideProfile";
import axios from "axios";
import { Cookies } from "react-cookie";
import Transactions from "../components/Transactions";

function Wallet_page() {
  const [user, setUser] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const cookies = new Cookies();

  const authAxios = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
      Authorization: `Bearer ${cookies.get("token")}`,
    },
  });

  useEffect(() => {
    fetchUser();
    fetchTransactions();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await authAxios.get(
        `/api/v1/user/${cookies.get("userId")}`
      );
      setUser(response.data.user);
    } catch (error) {
      alert(error);
    }
  };

  const fetchTransactions = async () => {
    try {
      const response = await authAxios.get(
        `/api/v1/user/${cookies.get("userId")}/transactions`
      );
      setTransactions(response.data.transactions);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container maxW="xl" centerContent>
      {/* <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily="Work sans">
            Talk-A-Tive
          </Text>
        </Box> */}
      <Box
        style={{ borderRadius: "", }} //backgroundColor: "#93e2bb" 
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        className="mt-5"
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Account</Tab>
            <Tab>Transactions</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SideProfile user={user} />
            </TabPanel>
            <TabPanel>
              { transactions.map((transaction)=>{
                return( transaction &&
                  <Transactions transaction = {transaction} />
                )
              })

              }
              
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Wallet_page;
