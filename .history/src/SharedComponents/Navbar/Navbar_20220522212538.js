import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div class="navbar bg-neutral text-base-100">
        <div class="navbar-start text-base-100">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral base-100 rounded-box w-100"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost bg- normal-case text-base-100 text-xl">
            Car Manufacturer APP
          </a>
        </div>
        <div class="navbar hidden lg:flex">
          <ul class="menu menu-horizontal text-xl p-0">
            <li>
              <Link t>Home</a>
            </li>

            <li>
              <Link t>About</a>
            </li>
            <li>
              <Link t>Blog</a>
            </li>
            <li>
              <Link t>Contact</a>
            </li>
          </ul>
        </div>
        <div class="flex-none gap-2">
          <div class="form-control">
            <input
              type="text"
              placeholder="Search"
              class="input input-bordered"
            />
          </div>
          <div class="dropdown dropdown-end navbar-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul
              tabindex="0"
              class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-neutral base-100 rounded-box w-52"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
