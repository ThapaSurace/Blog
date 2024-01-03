"use client";
import React, { useState } from "react";

import {
  Modal,
  ModalContent,
  Button,
  useDisclosure,

} from "@nextui-org/react";

import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";

const AuthModal = ({ data }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [mode, setMode] = useState(data);

  return (
    <div>
      <Button onPress={onOpen} variant="light" color="primary">
        {data === "login" ? "Login" : "Register"}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              {mode === "login" ? (
                <LoginForm  setMode={setMode}  />
              ) : (
                <RegisterForm setMode={setMode} />
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AuthModal;
