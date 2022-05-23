import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left" style={{ width: "30rem" }}>
            <h1 class="text-5xl font-bold text-black">Register now!</h1>
            <p class="py-6 text-black">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label ">
                  <span class="label-text" placeholder="Enter your first name">
                    Enter your first name
                  </span>
                </label>
                <label class="label ">
                  <span class="label-text" placeholder="Enter your last name">
                    Enter your last name
                  </span>
                </label>
                <label class="label ">
                  <span class="label-text" placeholder="Enter your email">
                    Enter your email
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered "
                />
              </div>
              <div class="form-control ">
                <label class="label">
                  <span class="label-text" placeholder="Enter your password">
                    Password
                  </span>
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
                <label class="label cursor-pointer">
                  <span class="label-text">Remember me</span>
                  <input
                    type="checkbox"
                    class="toggle toggle-primary"
                    checked
                  />
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Register</button>
                <Link to="/login" class="btn btn-primary">
                  Have an account?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
