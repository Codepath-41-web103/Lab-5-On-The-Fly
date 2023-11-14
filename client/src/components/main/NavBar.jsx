import React, { useState, useEffect } from "react";
// import { DarkThemeToggle } from 'flowbite-react'
import { Nav, Menu } from "../semantics/index";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../auth/Firebase";
import { useAuthMethods, getUserProperties } from "../../utils/utils";
import useSignupModal from "../../hooks/useSignupModal";
import { useAuth } from "../../auth/AuthState";
import { Button } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import "./NavBar.scss";

const NavBar = () => {
  const user = useAuth();
  const signupModal = useSignupModal();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    avatar_url: "",
    id: "",
  });

  useEffect(() => {
    if (user) {
      setUserInfo({
        name: user.displayName,
        email: user.email,
        avatar_url: user.photoUrl,
        id: user.localId,
      });
    }
  }, [user]);

  const handleLogOut = async () => {
    await signOut(firebaseAuth);
    toast.success("Logged out successfully");
  };
  useAuthMethods(user, signupModal);
  // console.log(user.displayName);
  // console.log(user.email);
  // console.log(user.photoUrl);

  return (
    <Nav
      className={`flex flex-row justify-between items-center h-[70px] w-[100dvw] sticky top-0 text-lg font-bold m-0 px-[1rem] z-30`}
    >
      <Menu className={`flex flex-row mt-5`}>
        <li className="flex ">
          <img src="/images/Chatat.png" alt="logo" width={100} height={100} />
          <span>Chatat</span>
        </li>
      </Menu>
      <Menu className={`flex`}>
        <li>
          <Button>
            <HiViewGrid size={20} />
          </Button>
        </li>
        <details role="list" dir="rtl" className={`flex flex-col`}>
          <summary aria-haspopup="listbox" role="link" className="primary">
            {/* <Avatar img={avatar_url} rounded status="online" statusPosition="bottom-right" /> */}
          </summary>
          <li>
            <button
              className="font-bold text-white cursor-pointer hover:underline"
              onClick={() => {
                window.location.href = "/dashboard";
              }}
            >
              Dashboard
            </button>
          </li>
          <hr />
          {user ? (
            <button
              onClick={() => {
                handleLogOut();
              }}
              className="font-bold text-white cursor-pointer hover:underline"
            >
              {" "}
              Logout
            </button>
          ) : (
            <button
              className="font-bold text-white cursor-pointer hover:underline"
              onClick={() => {
                signupModal.onOpen();
              }}
            >
              Signup
            </button>
          )}
        </details>
      </Menu>
    </Nav>
  );
};
export default NavBar;
