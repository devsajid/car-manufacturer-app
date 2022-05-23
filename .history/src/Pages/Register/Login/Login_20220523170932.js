import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form>
        {/* Email input */}
        <div class="form-outline mb-4">
          <input type="email" id="form2Example1" class="form-control" />
          <label class="form-label text-black" for="form2Example1">
            Email address
          </label>
        </div>
        {/* Password input  */}
        <div class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control" />
          <label class="form-label text-black" for="form2Example2">
            Password
          </label>
        </div>
        {/* 2 column grid layout for inline styling  */}
        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            {/* Checkbox  */}
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form2Example34"
                checked
              />
              <label class="form-check-label text-black" for="form2Example34">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div class="col">
            {/*  Simple link  */}
            <a href="#!" className="text-black">
              Forgot password?
            </a>
          </div>
        </div>
        {/* Submit button  */}
        <button
          type="submit"
          class="btn btn-secondary btn-block mb-4 text-black"
        >
          Sign in
        </button>
        {/*  Register buttons  */}
        <div class="text-center text-black">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>
          <button type="button" class="btn btn-secondary btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>

          <button type="button" class="btn btn-secondary btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>

          <button type="button" class="btn btn-secondary btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>

          <button type="button" class="btn btn-secondary btn-floating mx-1">
            <i class="fab fa-github"></i>
          </button>
        </div>
      </form>
      {/* <div class="hero min-h-screen text-center  ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
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
                  <a href="#" class="label-text-alt text-black link link-hover">
                    Forgot password?
                  </a>
                </label>
                <label class="label">
                  <Link
                    to="/register"
                    class="label-text-alt link text-black link-hover"
                  >
                    Create a new account?
                  </Link>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-secondary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Login;
