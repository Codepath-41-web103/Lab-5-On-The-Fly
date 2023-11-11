import { useEffect, useState } from "react";
import useLoginModal from "../hooks/useLoginModal";
import axios from "axios";

const createUser = async (user) => {
  try {
    const response = await axios.post("http://localhost:3001/api/users", user);
    const getUser = await axios.get(
      `http://localhost:3001/api/users/${user.id}`,
    );
    console.log("response", getUser);
  } catch (error) {
    console.log("User creation error", error);
  }
};
export const useAuthMethods = (user, signupModal) => {
  const loginModal = useLoginModal();
  useEffect(() => {
    console.log(user);
    if (user) {
      signupModal.onClose();
      loginModal.onClose();
      // This is unnecessary, but I'm leaving it here for now
      createUser({
        name: user.displayName,
        email: user.email,
        avatar_url: user.photoUrl,
        bio: "",
        id: user.localId,
      });
    } else {
      signupModal.onOpen();
    }
  }, [user]);
};

export const getUserProperties = (user) => {
  const [userProperties, setUserProperties] = useState();
  useEffect(() => {
    return () => {
      photoUrl, email, displayName;
    };
  }, [user]);
};
