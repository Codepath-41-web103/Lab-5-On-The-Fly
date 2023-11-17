import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Menu, MenuButton } from "@chakra-ui/react";
import useSignupModal from "../../hooks/useSignupModal";
import axios from "axios";
import { Avatar } from "flowbite-react";
import { useAuth } from "../../auth/AuthState";
import UserMenu from "./UserMenu";
export default function UserProfile({ }) {
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
  // console.log("the user info", userInfo);
  // console.log(userInfo.avatar_url);
  return (
    <>      
      <div className="z-40 flex items-center justify-center">
        <div className="flex items-center justify-center mx-1uy">
          <Menu isLazy>
            <MenuButton>
              <Avatar className="rounded-full w-9 h-9" src={userInfo.avatar_url} rounded status="online" statusPosition="bottom-right" />
            </MenuButton>
            <UserMenu />
          </Menu>
        </div>
      </div>
    </>
  );
}
