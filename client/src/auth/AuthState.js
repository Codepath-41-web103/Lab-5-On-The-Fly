import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./Firebase.js";

export function useAuth() {
  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, function handleAuth(auth) {
      if (auth) {
        setUser(auth);
      } else {
        setUser(null);
      }
    });
  }, [user]);

  return user?.reloadUserInfo;
}
