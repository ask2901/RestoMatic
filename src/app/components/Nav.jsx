"use client";

import React from "react";
import Image from "next/image";
import LogoutButton from "../../../public/Assets/logout.png";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Nav = () => {

  const router = useRouter();

  async function logout() {
    await signOut("google");
    await router.push('/home');
    
  }

  return (
    <>
      <div onClick={logout} className="cursor-pointer flex flex-row gap-2 justify-end mr-6">
        <button>
          <Image src={LogoutButton} height={20} width={20} />
        </button>
        <div className="text-md">Logout</div>
      </div>
    </>
  );
};

export default Nav;
