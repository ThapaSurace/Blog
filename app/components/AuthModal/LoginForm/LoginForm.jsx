'use client'
import React from "react";

import {
  Button,
  Input,
  Divider,
} from "@nextui-org/react";
import { LockIcon } from "../../Icons/LockIcon";
import { FaGithub, FaUser } from "react-icons/fa";
import { handleGitHubLogin, login } from "@/libs/action";
import { useFormState } from "react-dom";

const LoginForm = ({ setMode }) => {
  const [state, formAction] = useFormState(login, undefined);
  return (
    <div className="py-4">
     <h1 className="text-xl font-bold text-center mb-10">Welcome Back.</h1>
      <form action={handleGitHubLogin}>
        <Button color="primary" size="md" type="submit" className="w-full mb-4">
          <FaGithub size={20} />
          <span className="text-semibold text-base">Sign In with GitHub</span>
        </Button>
      </form>
      <Divider className="my-3" />
      <form action={formAction}>
        <Input
          autoFocus
          name="username"
          endContent={
            <FaUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          placeholder="username"
          variant="underlined"
        />
        <Input
          endContent={
            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          name="password"
          placeholder="password"
          type="password"
          variant="underlined"
        />
        <div className="flex py-2 px-1 justify-between my-4">
          <p className="text-xs tracking-wider font-extralight">
            Doesn't have an account?{" "}
            <span
              className=" cursor-pointer hover:text-blue-600"
              onClick={() => setMode("register")}
            >
              Register Here
            </span>
          </p>
        </div>

        {state?.error && (
          <span className="text-center text-danger-600"> {state?.error}</span>
        )}
       <div>
       <Button type="Submit" color="primary" className="w-full">
          Login
        </Button>
       </div>
      </form>
    </div>
  );
};

export default LoginForm;
