import React from "react";

import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Divider,
} from "@nextui-org/react";
import { LockIcon } from "../../Icons/LockIcon";
import { FaGithub, FaUser } from "react-icons/fa";
import { login } from "@/app/libs/action";
import { useFormState } from "react-dom";

const LoginForm = ({setMode}) => {
    const [state, formAction] = useFormState(login, undefined);
  return (
    <div>
      <ModalHeader className="text-xl font-bold flex mb-5 items-center justify-center">
        Welcome Back.
      </ModalHeader>
      <ModalBody>
        <Button color="primary" size="md">
          <FaGithub size={20} />
          <span className="text-semibold text-base">Sign In with GitHub</span>
        </Button>
      </ModalBody>

      <Divider className="my-3" />
      <form action={formAction}>
        <ModalBody>
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
          <div className="flex py-2 px-1 justify-between">
            <p className="text-xs tracking-wider font-extralight">
              Doesn't have an account?{" "}
              <span className=" cursor-pointer hover:text-blue-600" onClick={()=>setMode("register")}>
                Register Here
              </span>
            </p>
          </div>
        </ModalBody>
        <ModalFooter className="flex flex-col">
        {state?.error && (
            <span className="text-center text-danger-600"> {state?.error}</span>
          )}
          <Button type="Submit" color="primary">
            Login
          </Button>
        </ModalFooter>
      </form>
    </div>
  );
};

export default LoginForm;
