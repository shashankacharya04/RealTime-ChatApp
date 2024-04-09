import React, { useState } from "react";
import CheckBox from "./CheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../Hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("inputs", inputs);
    await signup(inputs);
  };
  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-3 h-full w-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          <span className="text-blue-500">Chat-App</span>
          SignUp
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className=" text-base label-text">Fullname:</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="enter fullname"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
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
              value={inputs.userName}
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className=" text-base label-text">Confirm Password:</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="confirm passowrd"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            ></input>
          </div>
          <CheckBox
            handleCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />
          <Link to="/login" className="hover:text-stone-200">
            Already Have An Account?
          </Link>
          <div>
            <button
              className="btn btn-block btn-sm mt-2 items-center"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "sign up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
