import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div class="hero min-h-screen text-center  ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left" style={{ width: "30rem" }}>
            <h1 class="text-5xl font-bold text-black">Login now!</h1>
            <p class="py-6 text-black">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-black">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-black">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  class="input input-bordered"
                />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <label class="label">
                  <Link to="/login" class="label-text-alt link link-hover">
                    Create a new accou?
                  </Link>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
