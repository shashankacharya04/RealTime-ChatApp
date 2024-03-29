import React from "react";
import { LogOut } from "lucide-react";
import useLogout from "../../Hooks/useLogout";
const LogoutBtn = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <button onClick={logout}>
          <LogOut size={30} />
        </button>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutBtn;
