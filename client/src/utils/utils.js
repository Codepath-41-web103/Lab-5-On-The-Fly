import { useEffect } from "react";
import useLoginModal from "../hooks/useLoginModal";

export const useAuthMethods = (user, signupModal) => {
  const loginModal = useLoginModal();
  useEffect(() => {
    console.log("user", user);
    if (user) {
      signupModal.onClose();
      loginModal.onClose();
    } else {
      signupModal.onOpen();
    }
  }, [user]);
};