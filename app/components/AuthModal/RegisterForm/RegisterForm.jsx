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
import { register } from "@/app/libs/action";


const RegisterForm = ({setMode}) => {
  const [state, formAction] = useFormState(register, undefined);

  useEffect(()=>{
    state?.success && setMode("login")
  },[state?.success])
  
  return (
    <div>
      <ModalHeader className="text-xl font-bold mb-6 w-full">
        Join ZoroBlog.
      </ModalHeader>

      <ModalBody>
        <Button color="primary" size="md">
          <FaGithub size={20} />
          <span className="text-semibold text-base">Sign Up with GitHub</span>
        </Button>
      </ModalBody>
      <Divider className="my-3" />
      <form action={formAction}>
        <ModalBody>
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
          <div className="flex py-2 px-1 justify-between">
            <p className="text-xs tracking-wide">
              Already have an account?{" "}
              <span className="cursor-pointer hover:text-blue-600" onClick={()=>setMode("login")}>
                Login Here
              </span>
            </p>
          </div>
        </ModalBody>
        <ModalFooter className="flex flex-col gap-6">
          {state?.error && (
            <span className="text-center text-danger-600"> {state?.error}</span>
          )}
          <Button type="submit" color="primary">
            Register
          </Button>
        </ModalFooter>
      </form>
    </div>
  );
};

export default RegisterForm;
