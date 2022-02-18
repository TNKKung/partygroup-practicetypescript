import React from "react";

// import { useCollections } from "../../store/collections/hook";
import PageLayout from "../PageLayout";

const ListMemberPage: React.FC = () => {
  // const { currentCollection } = useCollections();
  return (
    <PageLayout>
      <div className="bg-gray-50 text-slate-900 w-full max-w-6xl h-full mt-10 mb-10 p-4 rounded-md space-y-2">
        <p className="text-xl font-bold">Member</p>
        <div className="flex h-10 w-full">
          <p className="w-10 h-full flex justify-center items-center">No.</p>
          <p className="w-full h-full flex pl-10 items-center">ID</p>
        </div>
        {/* {currentCollection.member.map((item: string, index: number) => {
          return (
            <div className="flex h-10 w-full border rounded-md divide-x-2">
              <p className="w-10 h-full flex justify-center items-center">
                {index}
              </p>
              <p className="w-full h-full flex items-center pl-10">{item}</p>
            </div>
          );
        })} */}
      </div>
    </PageLayout>
  );
};

export default ListMemberPage;
