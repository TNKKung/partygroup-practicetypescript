import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login, register } from ".";
import { AppState } from "..";

export const useAccount = () => {
  const { user, tokens } = useSelector(
    (state: AppState) => state.userAccount
  );
  const dispatch = useDispatch();

  const handleRegister = useCallback(
    (data) => {
      dispatch(register(data));
    },
    [dispatch]
  );

  const handleLogin = useCallback(
    (data) => {
      dispatch(login(data));
    },
    [dispatch]
  );

  const handleLogout = useCallback(() => {
    tokens && dispatch(login(tokens.refresh.Token));
  }, [dispatch, tokens]);

  return {
    user,
    tokens,
    handleRegister,
    handleLogin,
    handleLogout,
  };
};
