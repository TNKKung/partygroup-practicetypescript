import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import { IconGroupUser } from "../../icons";
import { useAccount } from "../../store/userAction/hook";
import { useCollections } from "../../store/collections/hook";
import { formLoginProps } from "../type";

const LoginPage: React.FC = () => {
  const { user, handleLogin } = useAccount();
  const { handleGetParty } = useCollections();
  const history = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formLoginProps>();

  const onSubmit: SubmitHandler<formLoginProps> = (data) => {
    handleLogin(data);
  };

  useEffect(() => {
    if (user) {
      history("/partylist");
    }
  }, [history, user]);

  return (
    <div className="flex flex-col h-screen w-full justify-center items-center space-y-4">
      <div className="flex flex-col w-36 h-32 bg-indigo-700 text-white justify-center items-center rounded-md">
        <IconGroupUser className="w-10 h-10" />
        <label>party group</label>
      </div>
      <div className="flex flex-col w-full max-w-md justify-center items-center space-y-6 p-10 rounded-md">
        <form
          className="w-full h-full space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative flex flex-col w-full space-y-2">
            <label>อีเมล</label>
            <input
              className="w-full h-10 border text-black border-gray-300 rounded-md pl-4 outline-none"
              placeholder="dev@scb10x.com"
              type="email"
              {...register("email", {
                required: "You must specify a password",
                maxLength: {
                  value: 25,
                  message: "Email must not exceed 25 characters.",
                },
                pattern: {
                  value: /^[A-Za-z0-9@.]+$/i,
                  message: "Alphabetical characters only !",
                },
              })}
            />
            {errors?.email && (
              <p className="absolute text-red-600 top-16">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative flex flex-col w-full space-y-2">
            <label>รหัสผ่าน</label>
            <input
              className="w-full h-10 border text-black border-gray-300 rounded-md pl-4 outline-none"
              placeholder="**********"
              type="password"
              {...register("password", {
                pattern: {
                  value: /^[A-Za-z0-9]+$/i,
                  message: "Alphabetical characters and number",
                },
              })}
            />
            {errors?.password && (
              <p className="absolute text-red-600 top-16">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="w-full h-full space-y-2">
            <button
              type="submit"
              className="flex justify-center items-center bg-blue-600 hover:bg-blue-500 w-full h-10 rounded-md text-white"
              id="login"
            >
              เข้าสู่ระบบ
            </button>
            <Link
              to={"/register"}
              className="flex justify-center items-center bg-emerald-600 hover:bg-emerald-500 w-full h-10 rounded-md text-white"
            >
              สร้างบัญชีผู้ใช้
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
