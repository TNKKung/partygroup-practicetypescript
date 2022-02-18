import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAccount } from "../../store/userAction/hook";

const PageLayout: React.FC = ({ children }) => {
  const { user, handleLogout } = useAccount();
  const history = useNavigate();
  
  useEffect(() => {
    if (!user) {
      history("/");
    }
  }, [history, user]);

  return (
    <div className="flex flex-col items-center w-full h-screen overflow-y-auto">
      <div className="flex justify-end items-center bg-gray-900 px-4 w-full h-12">
        <button
          type="button"
          className="border border-red-500 rounded-md p-1 pl-2 pr-2 bg-red-600 hover:bg-red-500"
          id="logout"
          name="Logout"
          onClick={() => {
            handleLogout();
            localStorage.clear();
          }}
        >
          Logout
        </button>
      </div>
      {children}
    </div>
  );
};

export default PageLayout;
