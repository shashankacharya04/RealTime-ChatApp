import React from "react";
import { LogOut } from "lucide-react";
import useLogout from "../../Hooks/useLogout";
import { useAuthContext } from "../../context/AuthContext";
const LogoutBtn = () => {
  const { loading, logout } = useLogout();
  const { authUser } = useAuthContext();
  return (
    <div className="mt-auto">
      {!loading ? (
        <div className="flex  ">
          <div className="badge badge-accent badge-outline mt-1">
            <span>{authUser.username}</span>
          </div>
          <button
            onClick={logout}
            className="border-solid border-y-1 p-1 rounded-tr-2xl rounded-br-2xl"
          >
            <LogOut size={25} color="brown" />
          </button>
        </div> // design 1
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutBtn;
