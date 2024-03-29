import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import useLogout from "../../Hooks/useLogout";
import useLogin from "../../Hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    userName: "",
    password: "",
  });
  const { loading, login } = useLogin();
  const handleLogin = async (e) => {
    e.preventDefault();
    await login(inputs);
  };
  return (
    <div className="flex flex-col  items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounder-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          <span className="text-blue-500">Chat-App</span>
          Login
        </h1>
        <form onSubmit={handleLogin}>
          <div>
            <label className="label p-2">
              <span className=" text-base label-text">username</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="enter username"
              // value={inputs.userName}
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
            ></input>
            <div>
              <label className="label p-2">
                <span className=" text-base label-text">password</span>
              </label>
              <input
                type="text"
                className="w-full input input-bordered h-10"
                placeholder="enter password"
                // value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              ></input>
            </div>
            <Link to="/signup" className="hover:text-stone-200">
              dont have an account?
            </Link>
            <div>
              <button className="btn btn-block btn-sm mt-2" disabled={loading}>
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
