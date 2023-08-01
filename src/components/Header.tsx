"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  const { status, data } = useSession();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleLoginClick = () => signIn();

  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };
  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
      <Link href={'/'}>
        <div className="relative h-[32px] w-[182px]">
          <Image
            width={183}
            height={32}
            src="/logo.png"
            alt={"Logo da Hotel Trips"}
          ></Image>
        </div>
      </Link>
      {status == "unauthenticated" && (
        <button
          className="text-primary text-sm font-semibold"
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}

      {status == "authenticated" && data.user && (
        <div className="z-50 flex items-center gap-3 p-2 px-3 border-grayLighter border border-solid rounded-full relative">
          <AiOutlineMenu
            size={16}
            onClick={handleMenuClick}
            className="cursor-pointer"
          ></AiOutlineMenu>

          <Image
            height={35}
            width={35}
            alt={data.user?.name!}
            src={data.user.image!}
            className="rounded-full shadow-md"
          ></Image>
          {menuIsOpen && (
            <div className="absolute top-14 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
              <button
                className="text-primary text-sm font-semibold"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
