import React from 'react'
// import { DarkThemeToggle } from 'flowbite-react'
import { Nav, Menu } from '../semantics/index'
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../auth/Firebase";
import { useAuthMethods } from "../../utils/utils";
import useSignupModal from "../../hooks/useSignupModal";
import { useAuth } from "../../auth/AuthState";
import './NavBar.scss'

const NavBar = () => {
  const user = useAuth();
  const signupModal = useSignupModal();
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
      className={`flex flex-row justify-between items-center h-[50px] w-[100dvw] fixed top-0 text-lg font-bold m-0 px-[1rem] `}
    >
      <Menu
        className={`flex flex-row`}
      >
        <li className='flex '>
          <img src="/images/Chatat.png" alt="logo" width={100} height={100} />
          <span>
            Chatat
          </span>
        </li>
      </Menu>
      <Menu
        className={`flex`}
      >
        <li>
          {user ? (
            <button
              onClick={() => {
                handleLogOut();
              }}
              className="font-bold text-black cursor-pointer hover:underline"
            >
              {" "}
              Logout
            </button>
          ) : (
            <button
              className="font-bold text-black cursor-pointer hover:underline"
              onClick={() => signupModal.onOpen()}
            >
              Login
            </button>
          )}
        </li>
      </Menu>
    </Nav>
  )
}
export default NavBar
