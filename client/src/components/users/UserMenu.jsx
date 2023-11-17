"use client";
import { firebaseAuth } from "../../auth/Firebase";
import { MenuList, MenuItem, MenuDivider } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiEye, FiLogOut, FiSettings } from "react-icons/fi";
import { useAuth } from "../../auth/AuthState";
import useViewProfileModal from "../../hooks/useViewProfileModal";

function UserMenu({}) {
  const loginUser = useAuth();
  const viewProfile = useViewProfileModal();
  // ! NEED TO REFACTOR THIS const editProfile = useEditProfileModal();
  const handleLogOut = () => {
    signOut(firebaseAuth);
    window.location.href = "/";
  };

  return (
    <MenuList
      className="justify-center bg-gray-800  text-white rounded-lg"
      boxSize={140}
    >
      {/* MenuItems are not rendered unless Menu is open */}

      <MenuItem
        onClick={() => viewProfile.onOpen()}
        as="a"
        className="my-1 cursor-pointer hover:text-blue-400"
      >
        <div className="mx-2">
          <FiEye />
        </div>
        View Profile
      </MenuItem>

      <MenuDivider />
      <MenuItem
        as="a"
        onClick={() => {
          handleLogOut();
        }}
        className="my-1 cursor-pointer hover:text-blue-400"
      >
        <div className="mx-2">
          <FiLogOut />
        </div>
        Log Out
      </MenuItem>
    </MenuList>
  );
}

export default UserMenu;
