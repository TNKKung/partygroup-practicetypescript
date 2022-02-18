import React, { useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import { useAccount } from "../../store/userAction/hook";
import { a } from "./type";

const ProtecteRoute: React.FC<a> = ({ path, element }) => {
  const { user } = useAccount();
  const history = useNavigate();
  
  useEffect(() => {
    if (!user) {
      history("/");
    }
  }, [history, user]);

  return <Route path={path} element={element} />;
};

export default ProtecteRoute;
