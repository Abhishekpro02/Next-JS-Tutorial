"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("Abhi");
  const apple = (fruit) => {
    setName(fruit);
  };

  const InnerComponent = () => {
    return <User name="Abhishek" age={25} />;
  };

  const router = useRouter();

  const navigate = (name) => {
    router.push(name);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center gap-8 p-24">
        <h1 className="text-6xl font-bold text-center">Next.js Navigation</h1>
        <span className="text-2xl font-bold">Welcome {name}</span>
        <nav className="flex gap-4 bg-pink-600 p-4 rounded-md shadow-md ">
          <Link href="/about">About</Link>
          <Link href="/login">Login</Link>
          <Link href="/login">Contact</Link>
        </nav>
        {/* navigation using button */}
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/login")}
        >
          Go to Login Page
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/about")}
        >
          Go to About Page
        </button>

        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => apple("Abhishek")}
        >
          submit
        </button>
        {InnerComponent()}
      </main>
    </>
  );
}

const User = ({ name, age }) => {
  return (
    <h1>
      My name is {name} and my age is {age} .
    </h1>
  );
};
