import React, { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAccount } from "../../store/userAction/hook";

import { formProps } from "../type";

const RegisterPage: React.FC = () => {
  const history = useNavigate();
  const { user, handleRegister } = useAccount();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<formProps>();
  const onSubmit: SubmitHandler<formProps> = (data) => {
    handleRegister(data);
  };
  const password = useRef({});
  password.current = watch("password", "");
  const [agreement, setAgreement] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      history("/partylist");
    }
  }, [history, user]);
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center space-y-4">
      <span className="text-xl">สร้างบัญชีผู้ใช้งาน</span>
      <div className="flex flex-col w-full max-w-md justify-center items-center space-y-4 p-10 rounded-md">
        <form
          className="w-full flex flex-col space-y-6"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative flex flex-col w-full space-y-2">
            <label>อีเมล</label>
            <input
              className="text-black w-full h-10 border border-gray-300 rounded-md pl-4 outline-none"
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
              className="text-black w-full h-10 border border-gray-300 rounded-md pl-4 outline-none"
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
          <div className="relative flex flex-col w-full space-y-2">
            <label>ยืนยันรหัสผ่าน</label>
            <input
              className="text-black w-full h-10 border border-gray-300 rounded-md pl-4 outline-none"
              placeholder="**********"
              type="password"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
            />
            {errors?.confirmPassword && (
              <p className="absolute text-red-600 top-16">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="input"
              onClick={() => {
                setAgreement(!agreement);
              }}
            />
            <p>ฉันยอมรับเงื่อนไขและข้อตกลงในการใช้งาน</p>
          </div>
          <button
            type="submit"
            className={`${
              agreement
                ? "bg-emerald-700 hover:bg-emerald-500"
                : "bg-emerald-300"
            } w-full h-10 text-white rounded-md`}
            disabled={agreement ? false : true}
          >
            ยืนยัน
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
