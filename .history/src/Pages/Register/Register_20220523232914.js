import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      {/* <div class="hero min-h-screen bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold text-black">Register now!</h1>
            <p class="py-6 text-black">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-3xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <div class="form-control">
                  <label class="label">
                    <span
                      class="label-text text-black"
                      placeholder="Enter your first name"
                    >
                      Enter your first name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span
                      class="label-text text-black "
                      placeholder="Enter your last name"
                    >
                      Enter your last name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    class="input input-bordered"
                  />
                </div>

                <label class="label ">
                  <span
                    class="label-text text-black"
                    placeholder="Enter your email"
                  >
                    Enter your email
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  class="input input-bordered text-black"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span
                    class="label-text text-black"
                    placeholder="Enter your password"
                  >
                    Enter your password
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your password"
                  class="input input-bordered"
                />
                <label class="label">
                  <Link
                    to="/login"
                    class="label-text-alt link link-hover text-black"
                  >
                    Have an account?
                  </Link>
                </label>
                <label class="label cursor-pointer">
                  <span class="label-text text-black">Remember me</span>
                  <input
                    type="checkbox"
                    class="toggle toggle-primary"
                    checked
                  />
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      { <section class="vh-100" >
      // style="background-color: #eee;"
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div
                class="card text-black"
                // style={{border-radius: 25px;}}
              >
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example1c">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example3c">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example4cd">
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label class="form-check-label" for="form2Example3">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" class="btn btn-primary btn-lg">
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
