import React, { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import useLoginModal from "../../hooks/useLoginModal";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import Heading from "../inputs/Heading";
import Input from "../Inputs/Input";
import Button from "../Inputs/Button";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

import Modal from "./Modal";
import useSignupModal from "../../hooks/useSignupModal";
import { firebaseAuth } from "../../auth/Firebase";

function SignupModal({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginModal = useLoginModal();
  const signupModal = useSignupModal();
  const [isLoading, setIsLoading] = useState(false);

  //* This function handles the google provider through firebase
  const handleGoogle = async () => {
    try {
      await signInWithPopup(firebaseAuth, new GoogleAuthProvider());
      toast.success("Welcome to Chatat 🎉");
    } catch (error) {
      toast.error(error.message);
    }
  };

  //* This function handles email and password signups
  const handleEmailAndPassword = async () => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      toast.success("Welcome to Chatat 🎉");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const toggle = useCallback(() => {
    signupModal.onClose();
    loginModal.onOpen();
  }, [loginModal, signupModal]);

  const bodyContent = (
    <div className="items-center">
      <Heading title="Welcome to Chatat ❤️" subtitle="Create an account ! " />
      <hr />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        value={email}
        stateChange={setEmail}
        required
      />
      <Input
        id="password"
        type="password"
        label="Password"
        value={password}
        stateChange={setPassword}
        disabled={isLoading}
        required
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

      <div className="text-black text-center mt-4 font-light">
        <div className="justify-center flex flex-row items-center gap-2">
          <div className="">Already have an account?</div>
          <div
            onClick={toggle}
            className="text-slate-50 cursor-pointer hover:underline"
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      isOpen={signupModal.isOpen}
      title="Signup"
      actionLabel="Continue"
      onClose={signupModal.onClose}
      onSubmit={handleEmailAndPassword}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default SignupModal;