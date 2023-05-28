import React from "react";
// import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";



const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div class=" form-signin  m-auto w-75">
              <h1 class="text-center mb-3 ">Content de vous revoir !</h1>
              <form class="m-auto " action="POST">
                {/* <!--<img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> --> */}
                <h2 class="h4 mb-3 fw-normal">Veillez vous connectez.</h2>

                <div class="form-floating mb-1">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-2">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-lg btn-primary form-control border-0">Login</button>
                </div>
                <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
