import React from "react";
import CheckBox from "./CheckBox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-3 h-full w-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          <span className="text-blue-500">Chat-App</span>
          SignUp
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className=" text-base label-text">Fullname:</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="enter fullname"
            ></input>
          </div>
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
          <div>
            <label className="label p-2">
              <span className=" text-base label-text">Username:</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="enter username"
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className=" text-base label-text">Password:</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="enter password"
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className=" text-base label-text">confirm Password:</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="confirm passowrd"
            ></input>
          </div>
          <CheckBox />
          <a href="#" className="">
            Already Have An Account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

{
  /* <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
<div className="p-3 h-full w-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
  <h1 className="text-3xl font-semibold text-center text-gray-300">
    <span className="text-blue-500">Chat-App</span>
    SignUp
  </h1>
  <form>
    <div>
      <label className="label p-2">
        <span className=" text-base label-text">Fullname:</span>
      </label>
      <input
        type="text"
        className="w-full input input-bordered h-10"
        placeholder="enter fullname"
      ></input>
    </div>
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
    <div>
      <label className="label p-2">
        <span className=" text-base label-text">Username:</span>
      </label>
      <input
        type="text"
        className="w-full input input-bordered h-10"
        placeholder="enter username"
      ></input>
    </div>
    <div>
      <label className="label p-2">
        <span className=" text-base label-text">Password:</span>
      </label>
      <input
        type="text"
        className="w-full input input-bordered h-10"
        placeholder="enter password"
      ></input>
    </div>
    <div>
      <label className="label p-2">
        <span className=" text-base label-text">confirm Password:</span>
      </label>
      <input
        type="text"
        className="w-full input input-bordered h-10"
        placeholder="confirm passowrd"
      ></input>
    </div>
    <CheckBox />
    <a href="#" className="">
      Already Have An Account?
    </a>
    <div>
      <button className="btn btn-block btn-sm mt-2">SignUp</button>
    </div>
  </form>
</div>
</div> */
}
