/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createParty, getParty, joinParty } from ".";
import { AppState } from "..";

export const useCollections = () => {
  const { collections } = useSelector(
    (state: AppState) => state.collections
  );
  const dispatch = useDispatch();

  const handleGetParty = useCallback(() => {
    dispatch(getParty());
  }, [dispatch]);

  const handleCreateParty = useCallback(
    (data) => {
      dispatch(createParty(data));
    },
    [dispatch]
  );

  const handleJoineParty = useCallback(
    (data) => {
      dispatch(joinParty(data));
    },
    [dispatch]
  );

  return {
    collections,
    handleGetParty,
    handleCreateParty,
    handleJoineParty,
  };
};
