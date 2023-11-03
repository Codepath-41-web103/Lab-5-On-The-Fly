import { useEffect, useState } from "react";
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

export const getUserProperties = (user) => {
  const [userProperties, setUserProperties] = useState();
  useEffect(() => {
    
    return () =>  { 
      photoUrl, email, displayName
    };
  }, [user]);
}