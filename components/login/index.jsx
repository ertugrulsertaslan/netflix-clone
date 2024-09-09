"use client";
import axios from "axios";
import { useState } from "react";
import Input from "@/components/input/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");
  const toogleVariant = () => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  };
  const login = async () => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/profiles",
      });
      if (result?.error) {
        console.error(result.error);
        router.push("/login");
      } else if (result?.url) {
        router.push(result.url);
      } else {
        router.push("/profiles");
      }
    } catch (error) {
      console.log(error);
      router.push("/login");
    }
  };

  const register = async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative h-full w-full bg-[url('/images/bg-login.png')] bg-no-repeat bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <img src="/images/logo.png" alt="Logo" className="absolute h-12 ml-5" />
        <div className="flex justify-center w-full h-full">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  value={name}
                />
              )}

              <Input
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                value={email}
                type="email"
              />
              <Input
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                value={password}
                type="password"
              />
            </div>
            <button
              onClick={variant === "login" ? login : register}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {variant === "login" ? "Sign in" : "Register"}
            </button>
            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div
                onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition "
              >
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition "
              >
                <FaGithub size={30} />
              </div>
            </div>
            <p className="text-neutral-500 mt-12 text-sm">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                onClick={toogleVariant}
                className="text-white ml-2 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
