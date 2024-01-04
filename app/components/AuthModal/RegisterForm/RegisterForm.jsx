"use client";
import React, { useEffect, useState } from "react";

import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Divider,
} from "@nextui-org/react";
import { MailIcon } from "../../Icons/MailIcon";
import { LockIcon } from "../../Icons/LockIcon";
import { FaGithub, FaUser } from "react-icons/fa";
import { useFormState } from "react-dom";
import { register } from "@/libs/action";
import { handleGitHubLogin } from "@/libs/action";

const RegisterForm = ({ setMode }) => {
  const [state, formAction] = useFormState(register, undefined);

  useEffect(() => {
    state?.success && setMode("login");
  }, [state?.success]);

  return (
    <div className="py-4">
   
      <h1 className="text-xl font-bold text-center mb-10">Join ZoroBlog.</h1>
      <form action={handleGitHubLogin}>
        <Button color="primary" size="md" type="submit" className="w-full">
          <FaGithub size={20} />
          <span className="text-semibold mb-4">Sign Up with GitHub</span>
        </Button>
      </form>
      <Divider className="my-3" />
      <form action={formAction}>
        <Input
          autoFocus
          endContent={
            <FaUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          name="username"
          placeholder="username"
          variant="underlined"
          size="sm"
        />
        <Input
          endContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          name="email"
          placeholder="email"
          variant="underlined"
          size="sm"
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
        <Input
          endContent={
            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          name="conform_password"
          placeholder="conform password"
          type="password"
          variant="underlined"
        />
        <div className="flex py-2 px-1 justify-between my-4">
          <p className="text-xs tracking-wide">
            Already have an account?{" "}
            <span
              className="cursor-pointer hover:text-blue-600"
              onClick={() => setMode("login")}
            >
              Login Here
            </span>
          </p>
        </div>

        {state?.error && (
          <span className="text-center text-danger-600"> {state?.error}</span>
        )}
       <div>
       <Button type="submit" color="primary" className="w-full">
          Register
        </Button>
       </div>
      </form>
    </div>
  );
};

export default RegisterForm;
