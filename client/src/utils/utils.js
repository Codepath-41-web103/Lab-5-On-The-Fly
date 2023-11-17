import { useEffect, useState } from "react";
import useLoginModal from "../hooks/useLoginModal";
import axios from "axios";

const createUser = async (user) => {
  try {
    await axios.post("https://lab-5-on-the-fly-api.vercel.app/api/users", user);
    const getUser = await axios.get(
      `https://lab-5-on-the-fly-api.vercel.app/api/users/${user.id}`,
    );
  } catch (error) {
    console.log("User creation error", error);
  }
};
export const useAuthMethods = (user, signupModal) => {
  const loginModal = useLoginModal();
  useEffect(() => {
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
