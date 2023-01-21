import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import ResumePage from "./Pages/ResumePage/ResumePage";
import BgHome from "./Pages/BlogPage/home/Home";
import Write from "./Pages/BlogPage/Write/Write";
import Settings from "./Pages/BlogPage/settings/Settings";
import Single from "./Pages/BlogPage/Single/Single";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import CareerCenter from "./Pages/CareerCenter/CareerCenter";
import FAQ from "./Pages/FAQ/FAQ";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/career-center" element={<CareerCenter />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route
          path="/create-resume"
          element={
            <PrivateRoute>
              <ResumePage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/blog"
          element={
            <PrivateRoute>
              <BgHome />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/write"
          element={
            <PrivateRoute>
              <Write />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/post/:postId"
          element={
            <PrivateRoute>
              <Single />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
