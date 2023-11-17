"use client";
import React, { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";

import Heading from "../Inputs/Heading";
import Input from "../Inputs/Input";
import Button from "../Inputs/Button";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Modal from "./AuthModal";
import useLoginModal from "../../hooks/useLoginModal";
import { firebaseAuth } from "../../auth/Firebase";

import useSignupModal from "../../hooks/useSignupModal";

function LoginModal({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginModal = useLoginModal();
  const signupModal = useSignupModal();

  //* This function handles the google provider through firebase

  const handleGoogle = async () => {
    try {
      await signInWithPopup(firebaseAuth, new GoogleAuthProvider());

      toast.success("Welcome to Chatat 🎉");
    } catch (error) {
      toast.error(error.message);
    }
  };

  //* This function handles email and password logins
  const handleEmailAndPassword = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      toast.success("Welcome to Chatat 🎉");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const toggle = useCallback(() => {
    loginModal.onClose();
    signupModal.onOpen();
  }, [loginModal, signupModal]);

  const bodyContent = (
    <div className="items-center">
      <Heading title="Welcome Back 🎉" subtitle="Login to your account! " />
      <hr />
      <Input
        id="email"
        type="email"
        label="Email"
        value={email}
        stateChange={setEmail}
        required={true}
      />
      <Input
        id="password"
        type="password"
        label="Password"
        value={password}
        stateChange={setPassword}
        required={true}
      />
    </div>
  );
  const footerContent = (
    <div className="flex flex-col gap-3 mt-3">
      <hr />

      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => handleGoogle()}
      />

      <div className="mt-4 font-light text-center text-black">
        <div className="flex flex-row items-center justify-center gap-2 text-white">
          <div className="">First time using Chatat?</div>
          <div
            onClick={toggle}
            className="cursor-pointer text-slate-50 hover:underline"
          >
            Create an account
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleEmailAndPassword}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default LoginModal;
