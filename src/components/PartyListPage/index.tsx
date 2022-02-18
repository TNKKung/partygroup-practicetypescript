import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { IconGroupUser } from "../../icons";
import { useCollections } from "../../store/collections/hook";
import IconPlus from "../../icons/IconPlus";
import PageLayout from "../PageLayout";
import RoomCard from "./RoomCard";

const PartyListPage: React.FC = () => {
  const { collections, handleGetParty } = useCollections();

  useEffect(() => {
    handleGetParty();
  }, [handleGetParty]);

  useEffect(() => {
    console.log("c:", collections);
  }, [collections]);

  return (
    <PageLayout>
      <div className="flex w-full max-w-7xl px-3">
        <div className="w-full flex flex-wrap p-2">
          {!!collections &&
            collections.party.map((item: any) => {
              return (
                <div className="p-3">
                  <RoomCard
                    id={item.id}
                    topic={item.partyName}
                    menber={item.member.length}
                    memberLimit={item.memberLimit}
                  />
                </div>
              );
            })}
        </div>
        <Link
          to={"/createparty"}
          className="flex justify-center items-center fixed right-12 bottom-12 w-14 h-14 rounded-full bg-emerald-700 hover:bg-emerald-500"
        >
          <IconPlus className="absolute ml-5 mb-5 w-6 h-6" />
          <IconGroupUser className="w-6 h-6 mr-1" />
        </Link>
      </div>
    </PageLayout>
  );
};

export default PartyListPage;
