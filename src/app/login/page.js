"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center gap-8 p-24">
      <h1>Login Page</h1>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => router.push("/")}
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default Login;
