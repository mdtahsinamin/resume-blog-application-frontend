import React from "react";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");

  return refreshToken && accessToken ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
