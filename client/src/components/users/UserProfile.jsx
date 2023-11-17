import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Menu, MenuButton } from "@chakra-ui/react";
import useSignupModal from "../../hooks/useSignupModal";
import axios from "axios";
import { useAuth } from "../../auth/AuthState";
import UserMenu from "./UserMenu";
export default function UserProfile({}) {
  const [userInfo, setUserInfo] = useState({});
  const user = useAuth();

  const signup = useSignupModal();
  const OpenModal = () => {
    signup.onOpen();
  };
  const getInfo = async () => {
    const result = await axios.get(
      `https://lab-5-on-the-fly-api.vercel.app/api/users/${user.localId}`,
    );
    console.log("the result", result);

    setUserInfo(result.data[0]);
  };

  useEffect(() => {
    if (user) {
      getInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="flex justify-center items-center z-40">
      {userInfo?.avatar_url ? (
        <div className="mx-1 ">
          <Menu isLazy>
            <MenuButton>
              <img className="w-9 h-9 rounded-full" src={userInfo.avatar_url} />
            </MenuButton>
            <UserMenu />
          </Menu>
        </div>
      ) : (
        <div onClick={() => OpenModal()}>
          <AiOutlineUser size={26} />
        </div>
      )}
    </div>
  );
}
