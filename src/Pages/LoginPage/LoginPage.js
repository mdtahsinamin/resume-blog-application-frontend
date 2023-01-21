import React, { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import resumeLogo from "../../assets/resumebuilder-logo.png";
import { getUser1, login } from "../../features/authSlice";
import "./LoginPage.css";
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const { isSuccess, isLoading, isError, refreshToken, accessToken } =
    useSelector((state) => state.user);

  const onSubmit = (data) => {
    dispatch(login(data));
  };
  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      dispatch(getUser1({ refreshToken }));
      reset();
      navigate(from, { replace: true });
    }
  }, [isSuccess]);
  return (
    <Fragment>
      <div className="login-card-container">
        <div className="login-card">
          <div className="login-card-logo">
            <Link to="/">
              <img src={resumeLogo} alt="logo" />
            </Link>
          </div>
          <div className="login-card-header">
            <h1>Sign In</h1>
            <div>Please login to use the platform</div>
          </div>
          <form className="login-card-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-item">
              <span className="form-item-icon material-symbols-rounded"></span>
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                id="emailForm"
                {...register("email")}
                required
              />
            </div>
            <div className="form-item">
              <span className="form-item-icon material-symbols-rounded"></span>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                id="passwordForm"
                {...register("password")}
                required
              />
            </div>
            <div className="form-item-other">
              <div className="checkbox">
                <input type="checkbox" id="rememberMeCheckbox" checked />
                <label for="rememberMeCheckbox">Remember me</label>
              </div>
              <Link>I forgot my password!</Link>
            </div>
            <button type="submit">Sign In</button>
          </form>
          <div className="login-card-footer">
            Don't have an account?{" "}
            <Link to="/register">Create a free account.</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;
