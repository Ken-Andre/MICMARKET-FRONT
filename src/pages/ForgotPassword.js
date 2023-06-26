import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { axiosPrivate } from "../api/axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ForgotPassword = () => {
  const [mailUser, setMailUser] = useState("");

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    const payload = { email: mailUser };
    try {
      const response = await axiosPrivate.post(
        "user/forgot-password-token/",
        payload
      );
      console.log("An email has been sent to you");
      toast.success("Email sent successfully!");
    } catch (error) {
      console.error(error);
      if (
        error.response &&
        error.response.status === 500 &&
        error.response.data.message === "User not found with this email"
      ) {
        toast.error("User not found with this email.");
      } else {
        toast.error("Failed to send email.");
      }
    }
  };

  const handleClick = () => {
    toast.success('Hello World!', {
      position: 'top-center',
    });
  };
  const notify = () => toast.success("Wow so easy !")

  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <ToastContainer  />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">
                Give us your email and we will send you an email to reset your
                password
              </p>
              <form action="" className="d-flex flex-column gap-15">
                {/* Debut Input Email */}
                <div className="form-floating mb-1">
                  <input
                    type="email"
                    name="mail"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={mailUser}
                    onChange={(e) => setMailUser(e.target.value)}
                    autoComplete="off"
                    required
                  />
                  <label  htmlFor="email">
                    Email address
                  </label>
                </div>
                {/* Fin Input Email */}

                <div>
                  <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                    <button
                      className="btn btn-lg btn-primary  border-0 mb-2"
                      type="submit"
                      onClick={handleForgotSubmit}
                    >
                      Submit
                    </button>
                    {/* <Link to="/login" className="btn btn-lg btn-primary border-0  bg-danger">Cancel</Link> */}
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  //   <div>
  //   <button onClick={notify}>Notify !</button>
  //   <ToastContainer  />
  // </div>
  );
};

export default ForgotPassword;
