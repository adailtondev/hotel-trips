"use client";

import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = () => signIn();

  return (
    <div className="container mx-auto p-5 flex justify-between items-center">
      <div className="relative h-[32px] w-[182px]">
        <Image
          width={183}
          height={32}
          src="/logo.png"
          alt={"Logo da Hotel Trips"}
        ></Image>
      </div>

      {status == "unauthenticated" && (
        <button
          className="text-primary text-sm font-semibold"
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}

      {status == "authenticated" && data.user && (
        <div className="flex items-center gap-3 p-2 border-grayPrimary border border-solid rounded-full">
          <AiOutlineMenu size={16}></AiOutlineMenu>

          <Image
            height={30}
            width={30}
            alt={data.user?.name!}
            src={data.user.image!}
            className="rounded-full"
          ></Image>
        </div>
      )}
    </div>
  );
};

export default Header;
