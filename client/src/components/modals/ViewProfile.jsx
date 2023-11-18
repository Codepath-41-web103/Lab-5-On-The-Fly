"use client";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import Modal from "./AuthModal";

import useViewProfileModal from "../../hooks/useViewProfileModal";
import { useAuth } from "../../auth/AuthState";
import axios from "axios";
import Input from "../Inputs/Input";

function ViewProfileModal({}) {
  const viewProfile = useViewProfileModal();
  const [userInfo, setUserInfo] = useState(null);
  const loginUser = useAuth();
  const [photoUrl, setPhotoUrl] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const getInfo = async () => {
    const result = await axios.get(
      `https://lab-5-on-the-fly-api.vercel.app/api/users/${loginUser.localId}`,
    );
    const user = result.data[0];

    setUserInfo(user);
    setPhotoUrl(user.avatar_url);
    setName(user.name);
    setBio(user.bio);
  };
  const handleEdit = async () => {
    try {
      await axios.patch(
        `https://lab-5-on-the-fly-api.vercel.app/api/users/${loginUser.localId}`,
        {
          avatar_url: photoUrl,
          name,
          bio,
        },
      );
      toast.success("Profile updated");
      viewProfile.onClose();
      setUserInfo({});
      setPhotoUrl("");
      setName("");
      setBio("");

      window.location.reload();
    } catch (error) {
      toast.error("Error updating profile");
    }
  };

  useEffect(() => {
    if (loginUser) {
      getInfo();
    } else {
      setUserInfo(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginUser]);

  const bodyContent = (
    <div className="items-center">
      <hr />
      {userInfo && (
        <div className=" justify-center w-full h-full">
          <div className="my-3 flex justify-center">
            <img
              className="w-[7rem] h-[7rem] rounded-full object-contain"
              src={
                userInfo.avatar_url ||
                "https://tse1.mm.bing.net/th?id=OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd&pid=Api&rs=1&c=1&qlt=95&w=132&h=115"
              }
            />
          </div>
          name:
          <div className="text-xl font-bold text-white flex justify-center">
            <Input
              id="Name"
              label={null}
              type="photoURL"
              value={name}
              stateChange={setName}
            />
          </div>
          Bio:
          <div className="text-xl font-bold text-white flex justify-center">
            <Input
              id="Bio"
              label={null}
              type="photoURL"
              value={bio}
              stateChange={setBio}
            />
          </div>
          photo URL:
          <div className="text-xl font-bold text-white flex justify-center">
            {/* { id, label, type, stateChange, value } */}
            <Input
              id="photoURL"
              label={null}
              type="photoURL"
              value={photoUrl}
              stateChange={setPhotoUrl}
            />
          </div>
        </div>
      )}
    </div>
  );
  const footerContent = (
    <div className="flex flex-col gap-3 mt-3">
      <hr />

      <div className="mt-4 font-light text-center text-black">
        <div className="flex flex-row items-center justify-center gap-2 text-white">
          <div className="">You can also edit your profile here</div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      isOpen={viewProfile.isOpen}
      title="Profile"
      actionLabel="Edit"
      onClose={viewProfile.onClose}
      onSubmit={handleEdit}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default ViewProfileModal;
