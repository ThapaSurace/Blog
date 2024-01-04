"use client";
import React, { useState } from "react";

import {
  Modal,
  ModalContent,
  Button,
  useDisclosure,
  ModalBody,
} from "@nextui-org/react";

import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";

const AuthModal = ({ data }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [mode, setMode] = useState(data);

  return (
    <div>
      
      {
        data === "login" ? (
          <Button onPress={onOpen} variant="light" color="primary">
          Login
        </Button>
        ): (
          <Button onPress={onOpen}  color="primary">
          Register
        </Button>
        )
      }
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
             <ModalBody>
             {mode === "login" ? (
                <LoginForm  setMode={setMode}  />
              ) : (
                <RegisterForm setMode={setMode} />
              )}
             </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AuthModal;
