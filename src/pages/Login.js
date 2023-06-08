import { useRef, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import { useLoginMutation } from "../features/auth/authApiSlice";

const LoginR = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [mailUser, setMailUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [mailUser, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ email: mailUser, password: pwd }).unwrap();
      dispatch(setCredentials({ ...userData, email: mailUser }));
      setMailUser("");
      setPwd("");
      navigate("/");
    } catch (err) {
      if (!err?.response) {
        dispatch(setCredentials(null));
        setErrMsg("No Server Response");
      } else if (err.response.status === 400) {
        dispatch(setCredentials(null));
        setErrMsg("Missing Username or Password");
      } else if (err.response.status === 401) {
        dispatch(setCredentials(null));
        setErrMsg("You're not recognized");
      } else {
        dispatch(setCredentials(null));
        setErrMsg("Login Failed");
      }
      errRef.current && errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setMailUser(e.target.value);

  const handlePwdInput = (e) => setPwd(e.target.value);

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <BreadCrumb title="login" />
      <section className="login container-md">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>

        <h2 className="h4 mb-3 fw-normal ">Veillez vous connectez.</h2>

        <form className="m-auto py-3" onSubmit={handleSubmit}>
          <div className="form-floating mb-2">
            {/* <label htmlFor="username">Username:</label> */}
            <input
              type="email"
              name="mail"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              ref={userRef}
              value={mailUser}
              onChange={handleUserInput}
              autoComplete="off"
              required
            />
            <label for="floatingInput" htmlFor="email">
              Email address
            </label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={handlePwdInput}
              value={pwd}
              required
            />
            <label for="floatingPassword" htmlFor="password">
              Password
            </label>
          </div>
          <button
            type="submit"
            // disabled={emptyMail || emptyPwd ? true : false}
            className="btn btn-lg btn-primary form-control border-0 mb-2"
          >
            Sign In
          </button>
          {/* Fin Submit Form Button */}
          <p>
            Not Registered?
            <span className="line">
              {/*put router link here*/}
              <NavLink
                to="/auth/signup"
                className="fw-medium text-primary text-opacity-75 left-gap"
              >
                Signin
              </NavLink>
            </span>
          </p>
        </form>
      </section>
    </>
  );

  return content;
};
export default LoginR;
