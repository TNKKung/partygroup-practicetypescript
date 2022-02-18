import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

import { useCollections } from "../../store/collections/hook";
import { useAccount } from "../../store/userAction/hook";

import PageLayout from "../PageLayout";
import { formCreatePartyProps } from "../type";

const CreatePartyPage: React.FC = () => {
  const history = useNavigate();
  const {  handleCreateParty } = useCollections();
  const { user } = useAccount();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formCreatePartyProps>();

  const onSubmit: SubmitHandler<formCreatePartyProps> = (data) => {
    data.ownerId = user.id;
    handleCreateParty(data);
  };

  // useEffect(() => {
  //   if (collections) {
  //     history("/partylist");
  //   }
  // }, [collections, history]);

  return (
    <PageLayout>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <p className="text-xl">Create Party</p>
        <div className="flex flex-col w-full max-w-md justify-center items-center p-10 rounded-md ">
          <form
            className="w-full h-full space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="relative flex flex-col w-full space-y-2">
              <p>Party Name</p>
              <input
                className="w-full h-10 border text-black border-gray-300 rounded-md pl-4 outline-none"
                placeholder="3 ช่า"
                type="text"
                {...register("partyName", {
                  pattern: {
                    value: /^[A-Za-z0-9]+$/i,
                    message: "Alphabetical characters and number !",
                  },
                })}
              />
              {errors?.partyName && (
                <p className="absolute text-red-600 top-16">
                  {errors.partyName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-full space-y-2">
              <p>Member</p>
              <input
                className="w-full h-10 border text-black border-gray-300 rounded-md px-4 outline-none"
                placeholder="1"
                type="number"
                {...register("memberLimit", {
                  pattern: {
                    value: /^[0-9]+$/i,
                    message: "Alphabetical characters and number",
                  },
                })}
              />
            </div>
            <button
              type="submit"
              className="flex justify-center items-center bg-emerald-600 hover:bg-emerald-500 w-full h-10 rounded-md text-white"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default CreatePartyPage;
