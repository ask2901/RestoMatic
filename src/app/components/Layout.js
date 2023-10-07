"use client";

import GoogleButton from "react-google-button";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Sidebar from "@/app/components/Sidebar";

const layout = ({children}) => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div className="bg-amber-500 min-h-screen flex">
        <Sidebar/>
        <div className="bg-slate-200 flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">{children}</div>
      </div>
    );
  } else {
    return (
      <div className="bg-indigo-200 h-screen grid place-content-center">
        <button
          onClick={() => signIn("google")}
          className="bg-white px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
        >
          <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
          <span>Login with Google</span>
        </button>
      </div>
    );
  }
};

export default layout;
