import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';

const LOGIN_URL = "http://192.168.2.132:5000/api/user/login";
const DELAY_BEF_MOVE = 1500;
const Login = () => {

  // const [auth, setAuth] = useState({ mailUser: "", pwdUser: "", token: "", role: "" });
    const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [mailUser, setMailUser] = useState("");
  const [emptyMail, setEmptyMail] = useState(true);

  const [pwdUser, setPwdUser] = useState("");
  const [emptyPwd, setEmptyPwd] = useState(true);

  //Etat pour le success d'une action ou l'echec
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [persist, setPersist] = useState(false);

  // const [login, { isLoading }] = useLoginMutation();
  // const dispatch = useDispatch();
  //Function for empty case
  useEffect(() => {
    const result = mailUser.trim() === "";
    console.log(result, ":", mailUser);
    // console.log(mailUser, " ", pwdUser);
    setEmptyMail(result);
    // setEmptyPwd(result2);
  }, [mailUser]);

  //Function for empty case
  useEffect(() => {
    const result2 = pwdUser.trim() === "";
    // console.log(result, "&", result2);
    console.log(result2, ": ", pwdUser);
    // setEmptyMail(result);
    setEmptyPwd(result2);
  }, [pwdUser]);

  //Function for prints status error
  useEffect(() => {
    setErrMsg("");
  }, [mailUser, pwdUser]);

  //Function for Post Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    //const v1 = USER_REGEX.test(user);
    const v1 = mailUser.trim() === "";
    const v2 = pwdUser.trim() === "";
    console.log("button:", v1, v2);
    if (v1 || v2) {
      setErrMsg("Empty Fields are not allowed");
      return;
    }
    const payload = {
      email: mailUser,
      password: pwdUser,
    };
    // fetch(LOGIN_URL, {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(payload)
    // })
    //   .then(response => {
    //     if (!response.ok) {
    //       if (response.status === 500) {
    //         console.log(response, "& ", response.status);

    //         setErrMsg('Incorrect Password or Username');

    //       }
    //       else {
    //         setErrMsg('Invalid Credentials');
    //       }
    //       // throw new Error("Failed to send! \n Verify Your Network Connection !");
    //     }
    //     else {
    //       setErrMsg('');
    //       setSuccess(true);
    //       setMailUser('');
    //       setPwdUser('');
    //       setTimeout(() => {
    //         navigate('/signin');
    //       }, DELAY_BEF_MOVE);

    //     }
    //     return response.json(); // extract JSON response from response object
    //   })
    //   .then(data => {
    //     console.log('Server Response:', data);
    //     if (data.message === 'Invalid Credentials !') {
    //       setErrMsg('Invalid Email or pwd');
    //     }
    //     errRef.current && errRef.current.focus();
    //   })
    //   .catch(err => {
    //     console.log('Error:', err);
    //     if (!err === "") {
    //       setErrMsg('No Server Response');
    //     } else {
    //       setErrMsg( 'Invalid Email or password');
    //     }
    //     errRef.current && errRef.current.focus();
    //   });
    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify(
        {email: mailUser,
        password: pwdUser,}
      ), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });kekjnk
      console.log(JSON.stringify(response?.data));
      const token = response.data?.token;
      const role = response.data?.role;
      setAuth({ email, password, role, token });
      setMailUser("");
      setPwdUser("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);

  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title={"Login"} />
      <div className="login-wrapper py-4 container-md rounded-box-white">
        <div className="row">
          <div className="col-12">
            <div className=" form-signin  m-auto w-75">
              <h1 className="text-center mb-3 ">Content de vous revoir !</h1>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <form className="m-auto py-3" onSubmit={handleSubmit}>
                {/* <!--<img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> --> */}
                {/* # Politesse Debut */}
                <h2 className="h4 mb-3 fw-normal ">Veillez vous connectez.</h2>
                {/* # Politesse Fin */}

                {/* Debut Input Email */}
                <div className="form-floating mb-1">
                  <input
                    type="email"
                    name="mail"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(e) => setMailUser(e.target.value)}
                    autoComplete="off"
                    required
                  />
                  <label for="floatingInput" htmlFor="email">
                    Email address
                  </label>
                </div>
                {/* Fin Input Email */}
                {/* Debut Input Password */}
                <div className="form-floating mb-2">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={(e) => setPwdUser(e.target.value)}
                    required
                  />
                  <label for="floatingPassword" htmlFor="password">
                    Password
                  </label>
                </div>
                {/* Fin Input Password */}
                {/* Debut Remember zone */}
                <div className="checkbox mb-3">
                  <label htmlFor="persist">
                    <input
                      type="checkbox"
                      id="persist"
                      onChange={togglePersist}
                      checked={persist}
                    />
                    Remember me
                  </label>
                </div>
                {/* Fin Remember Zone */}
                {/* Debut Submit Form Button */}
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    disabled={emptyMail || emptyPwd ? true : false}
                    className="btn btn-lg btn-primary form-control border-0 mb-2"
                  >
                    Login
                  </button>
                </div>

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

              {/* Debut Copyright */}
              <p className="mt-3 mb-3 text-body-secondary text-end">
                &copy; 2023-{new Date().getFullYear()}
              </p>
              {/* Fin Copyright */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;