"use client";

import { FcGoogle } from "react-icons/fc"
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { Button, Separator } from "@heroui/react";


export default function LoginPage() {

  const onSubmit = async (e) => {
    e.preventDefault();

    // Fix 1: Added 'e' to the params and fixed typo 'currrentTarget'
    // Fix 2: Added 'name' attributes to the JSX inputs so this works:
    const formData = new FormData(e.currentTarget);

    // Fix 3: Changed 'formEntries' to 'fromEntries' and added () to entries
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password
    })
    console.log({ data, error })

    if (data) {
      redirect('/')
    }
    else {
      alert("xx ERROR xx")
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google"
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-cyan-600">Vibe Trek</h1>
          <p className="text-slate-500 mt-2">Signin to continue</p>
        </div>

        {/* Fix 4: Ensured onSubmit is passed correctly */}
        <form onSubmit={onSubmit} className="space-y-5 text-black">

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input
              name="email" // REQUIRED for FormData
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input
              name="password" // REQUIRED for FormData
              type="password"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-3 rounded-xl font-bold hover:bg-cyan-700 transform transition active:scale-95"
          >
            Login
          </button>
        </form>

        
        <div className="text-gray-400 text-center mt-5">
          <Separator />
          
        </div>
        <div className="text-gray-400 text-center mt-2">Or sign in with</div>
        <div>
          <Button
            variant="outline"
            onClick={handleGoogleSignIn}
            className={`w-full mt-2 rounded-none rounded-xl text-gray-900`}>
            <FcGoogle />  Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
}