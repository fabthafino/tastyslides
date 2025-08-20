import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { auth, signIn } from "@/auth"
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (session) {
    redirect("/drop-reviews");
  }
  
  return (
    // <main className="bg-white flex items-center justify-center min-h-screen px-4">

    <main className="bg-white flex items-center justify-center min-h-screen px-4">

      <div className="w-full max-w-md space-y-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Log in</h2>
          <p className="mt-2 text-sm text-gray-600">
            New to Tasty Slides?
            <a href="" className="text-orange-500 font-medium hover:underline"> Sign up here</a>
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Username / Email address*</label>
            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>

          {/* Password */}
          <div>
            <label className=" text-sm font-medium text-gray-700">Password*</label>
            <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>

          {/* Forgot password */}
          <div className="text-sm text-right">
            <a href="#" className="text-orange-500 hover:underline">Forgot password?</a>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start">
            <input id="terms" type="checkbox" className="hover:cursor-pointer h-4 w-4 mt-1 text-orange-500 border-gray-300 rounded" />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
              I agree to Tasty Slides
              <a href="#" className="text-blue-700 hover:cursor-pointer hover:underline"> Terms & Conditions</a> and acknowledge the
              <a href="#" className="text-blue-700 hover:cursor-pointer hover:underline"> Privacy Policy</a>.
            </label>
          </div>

          {/* Log In Button */}
          <button type="submit" className="hover:cursor-pointer w-full py-2 px-4 bg-blue-500 text-white
      font-semibold transition-colors duration-300rounded-full hover:bg-blue-700">
            Log in
          </button>
        </form>

        <p className="flex items-center justify-center text-sm">or continue with</p>
        <div className="flex items-center justify-center space-x-2 gap-15 text-4xl ">

          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button className="hover:cursor-pointer"><FaGoogle /></button>
          </form>


          <button className="hover:cursor-pointer"><FaFacebookF /></button>

          <form
            action={async () => {
              "use server";
              await signIn("GitHub");
            }}
          >
            <button className="hover:cursor-pointer"><FaGithub /></button>
          </form>
          {/* <button className="hover:cursor-pointer"><FaGithub/></button> */}
        </div>

      </div>
    </main>
  );
};

export default page;