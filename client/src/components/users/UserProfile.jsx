import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Menu, MenuButton } from "@chakra-ui/react";
import useSignupModal from "../../hooks/useSignupModal";
import axios from "axios";
import { Avatar } from "flowbite-react";
import { useAuth } from "../../auth/AuthState";
import UserMenu from "./UserMenu";
export default function UserProfile({}) {
  const [userInfo, setUserInfo] = useState(null);
  const user = useAuth();

  const signup = useSignupModal();
  const OpenModal = () => {
    signup.onOpen();
  };
  const getInfo = async () => {
    const result = await axios.get(
      `https://lab-5-on-the-fly-api.vercel.app/api/users/${user.localId}`,
    );

    setUserInfo(result.data[0]);
  };

  useEffect(() => {
    if (user) {
      getInfo();
    } else {
      setUserInfo(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  // console.log("the user info", userInfo);
  // console.log(userInfo.avatar_url);
  return (
    <>
      <div className="z-40 flex items-center justify-center">
        {userInfo ? (
          <div className="flex items-center mx-1">
            <Menu isLazy>
              <MenuButton>
                <img
                  className="rounded-full w-9 h-9"
                  src={
                    userInfo.avatar_url ||
                    "https://tse1.mm.bing.net/th?id=OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd&pid=Api&rs=1&c=1&qlt=95&w=132&h=115"
                  }
                />
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
    </>
  );
}
