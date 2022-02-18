import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useCollections } from "../../../store/collections/hook";
import { useAccount } from "../../../store/userAction/hook";
import { IconGroupUser } from "../../../icons";
import { RoomCardProps } from "../type";

const RoomCard: React.FC<RoomCardProps> = ({
  id,
  topic,
  menber,
  memberLimit,
}) => {
  const history = useNavigate();
  const {handleJoineParty } = useCollections();
  const { user } = useAccount();
  const handleJoin = (id: string, personId: string) => {
    handleJoineParty({ id, personId });
  };

  // useEffect(() => {
  //   if (status === 201) {
  //     history("/listmember");
  //   }
  // }, [history, status]);

  return (
    <div className="flex flex-col w-44 h-52 bg-neutral-800 rounded-md shadow-xl">
      <div className="flex flex-col w-full h-32 bg-indigo-700 text-white justify-center items-center rounded-t-md">
        <IconGroupUser className="w-10 h-10" />
        <label>party group</label>
      </div>
      <div className="flex flex-col justify-between text-md">
        <div className="h-12 truncate px-1">{topic}</div>
        <div className="flex px-2 justify-between">
          <div>
            {menber}/{memberLimit}
          </div>
          <button
            type="button"
            className="flex justify-center items-center w-12 h-6 border border-emerald-500 rounded-md bg-emerald-600 hover:bg-emerald-500 text-gray-200"
            onClick={() => handleJoin(id, user.id)}
          >
            join
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
