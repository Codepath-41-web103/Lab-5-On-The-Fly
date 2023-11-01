import React, { useEffect } from "react";
import NavBar from "../components/main/NavBar";
import { useAuth } from "../auth/AuthState.js";
import toast from "react-hot-toast";
import useSignupModal from "../hooks/useSignupModal";
import useLoginModal from "../hooks/useLoginModal";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../auth/Firebase";

export default function Home() {
  const signupModal = useSignupModal();
  const loginModal = useLoginModal();
  const user = useAuth();

  const handleLogOut = async () => {
    await signOut(firebaseAuth);
    toast.success("Logged out successfully");
  };

  useEffect(() => {
    console.log("user", user);
    if (user) {
      //? If user already logged in, then close both modals
      signupModal.onClose();
      loginModal.onClose();
    } else {
      //? If User is not logged in then up the signup modal
      signupModal.onOpen();
    }
  }, [user]);

  return (
    <div className="text-rose-500">
      This is home{" "}
      {user ? (
        <div
          onClick={() => {
            handleLogOut();
          }}
          className="text-black font-bold cursor-pointer hover:underline"
        >
          {" "}
          Logout
        </div>
      ) : (
        <div
          className="text-black font-bold cursor-pointer hover:underline"
          onClick={() => signupModal.onOpen()}
        >
          Signin
        </div>
      )}
    </div>
  );
}
