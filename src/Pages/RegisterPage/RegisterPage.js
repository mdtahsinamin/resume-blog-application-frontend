import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import RElog from "../../assets/resumebuilder-logo.png";
import { useRegisterMutation } from "../../features/api/authenciationApi";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../features/authSlice";

const RegisterPage = () => {
  const [user, setUser] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [confirm, setConfirm] = useState(false);
  //const [fileName, setFileName] = useState("Upload image");
  //const [file, setFile] = useState("");
  const notify = (value) => toast.error(value);
  const success = () => toast.success("Register Completed");

  const dispatch = useDispatch();

  const { isSuccess, isLoading, isError, refreshToken, accessToken } =
    useSelector((state) => state.user);

  const [registerData, result] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");

  const navigate = useNavigate();

  /*const onChange = async (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };*/

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      reset();
      navigate("/");
    }
  }, [isSuccess]);

  const onSubmit = async (data) => {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    dispatch(createUser(user));
  };

  return (
    <main className="main-login">
      <div className="register-layout">
        <div className="container-fluid pb-5">
          <div className="row justify-content-md-center">
            <div className="card-wrapper col-12 col-md-4 mt-4">
              <div className="brand text-center mb-3">
                <Link to="/">
                  <img src={RElog} alt="E-SHOP" className="reg-image" />
                </Link>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="form-layout">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <h2 className="create-account">Create a new account</h2>
                      <div className="formInput">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className="form-input"
                          id="name"
                          name="name"
                          autoFocus=""
                          {...register("name", {
                            minLength: {
                              value: 3,
                              message: "Name must have at least 3 characters",
                            },
                          })}
                          required
                        />
                      </div>
                      {errors.name && (
                        <span className="error-message">
                          {errors.name.message}
                        </span>
                      )}
                      <div className="formInput">
                        <label htmlFor="email">E-Mail Address</label>
                        <input
                          id="email"
                          type="email"
                          className="form-input"
                          name="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: "Please enter a valid email",
                            },
                          })}
                          required
                        />
                      </div>
                      {errors.email && (
                        <span className="error-message">
                          {errors.email.message}
                        </span>
                      )}

                      <div className="form-row">
                        <div className="formInput col-md-6">
                          <label htmlFor="password">Password</label>
                          <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            className="form-input"
                            name="password"
                            {...register("password", {
                              required: "You must specify a password",
                              minLength: {
                                value: 8,
                                message: "Password at least 8 characters",
                              },
                            })}
                            required
                          />
                          {showPassword ? (
                            <span
                              className="eye"
                              onClick={() => {
                                setShowPassword(!showPassword);
                              }}
                            >
                              <AiFillEyeInvisible />
                            </span>
                          ) : (
                            <span
                              className="eye"
                              onClick={() => {
                                setShowPassword(!showPassword);
                              }}
                            >
                              <AiFillEye />
                            </span>
                          )}
                        </div>
                        {errors.password && (
                          <span className="error-message">
                            {errors.password.message}
                          </span>
                        )}

                        <div className="formInput col-md-6">
                          <label htmlFor="password-confirm">
                            Confirm Password
                          </label>
                          <input
                            id="password-confirm"
                            type={confirm ? "text" : "password"}
                            className="form-input"
                            name="password_confirmation"
                            {...register("password_confirmation", {
                              validate: (value) =>
                                value === password.current ||
                                "The passwords do not match",
                            })}
                            required
                          />
                          {confirm ? (
                            <span
                              className="eye"
                              onClick={() => {
                                setConfirm(!confirm);
                              }}
                            >
                              <AiFillEyeInvisible />
                            </span>
                          ) : (
                            <span
                              className="eye"
                              onClick={() => {
                                setConfirm(!confirm);
                              }}
                            >
                              <AiFillEye />
                            </span>
                          )}
                        </div>
                        {errors.password_confirmation && (
                          <span className="error-message">
                            {errors.password_confirmation.message}
                          </span>
                        )}
                      </div>
                      <div className="d-flex justify-content-center mt-2">
                        <input
                          type="submit"
                          value="Submit"
                          className="submit-form"
                          onClick={handleSubmit(onSubmit)}
                        />
                      </div>
                      <div className="text-center mt-3 small">
                        Already have an account?{" "}
                        <Link to="/login">Sign In</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </main>
  );
};

export default RegisterPage;
