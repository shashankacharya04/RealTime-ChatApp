import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col  items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounder-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          <span className="text-blue-500">Chat-App</span>
          Login
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className=" text-base label-text">username</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="enter username"
            ></input>
            <div>
              <label className="label p-2">
                <span className=" text-base label-text">password</span>
              </label>
              <input
                type="text"
                className="w-full input input-bordered h-10"
                placeholder="enter password"
              ></input>
            </div>
            <a href="#" className="">
              dont have an account?
            </a>
            <div>
              <button className="btn btn-block btn-sm mt-2">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

{
  /* <div className="flex flex-col  items-center min-w-96 mx-auto">
<div className="w-full p-6 rounder-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
  <h1 className="text-3xl font-semibold text-center text-gray-300">
    <span className="text-blue-500">Chat-App</span>
    Login
  </h1>
  <form>
    <div>
      <label className="label p-2">
        <span className=" text-base label-text">username</span>
      </label>
      <input
        type="text"
        className="w-full input input-bordered h-10"
        placeholder="enter username"
      ></input>
      <div>
        <label className="label p-2">
          <span className=" text-base label-text">password</span>
        </label>
        <input
          type="text"
          className="w-full input input-bordered h-10"
          placeholder="enter password"
        ></input>
      </div>
      <a href="#" className="">
        dont have an account?
      </a>
      <div>
        <button className="btn btn-block btn-sm mt-2">Login</button>
      </div>
    </div>
  </form>
</div>
</div> */
}
