import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./UserContext";
import { CookiesProvider } from "react-cookie";
import AccountsPage from "./pages/AccountsPage";
import LoginPage from "./pages/LoginPage";
import VerificationPage from "./pages/VerificationPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import HomeCard from "./HomeCard";
import ProfilePage from "./pages/ProfilePage";
import CreateJobPage from "./pages/CreateJobPage";
import UsersPage from "./pages/UsersPage";
import Wallet_page from "./pages/Wallet_page";
import UserProfile from "./pages/UserProfile";
import NotificationPage from "./pages/notificationPage";
axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
      <CookiesProvider>
        <Routes>
          {/* <Route path="/" element={<></>} > */}
          <Route index element={<LoginPage />} />
          <Route path="/verify" element={<VerificationPage />} />
          <Route path="/accounts" element={<AccountsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/createjob" element={<CreateJobPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/connections" element={<UsersPage />} />
          <Route path="/wallet" element={<Wallet_page />} />
          <Route path="/homecard" element={<HomeCard />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/notifications" element={<NotificationPage />} />
          {/* </Route> */}
        </Routes>
      </CookiesProvider>
    </UserContextProvider>
  );
}

export default App;
