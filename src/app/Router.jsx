import { BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Mypage from "../pages/Mypage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Router path="/" element={<Home />} />
        <Router path="/login" element={<Login />} />
        <Router path="/signup" element={<Signup />} />
        <Router path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
