"use client";
import React from 'react';
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    
    if (!isPending && !session) {
        router.push("/login");
        return null;
    }

    if (isPending) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-sky-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-[80vh] w-fit mx-auto flex items-center justify-center p-4">
            
            <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md flex flex-col items-center text-center border border-gray-100">


                <div className="relative mb-6 mt-8">
                    <div className="w-32 h-32 rounded-2xl ring-4 ring-sky-400 ring-offset-4 overflow-hidden shadow-lg">
                        <img
                            src={user?.image || `https://ui-avatars.com/api/?name=${user?.name}&background=0ea5e9&color=fff`}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    <span className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></span>
                </div>


                <div className="space-y-2">
                    <h1 className="text-3xl font-extrabold text-gray-800">
                        User Name: {user?.name}
                    </h1>
                    <p className="text-sky-600 font-medium bg-sky-50 px-4 py-1 rounded-full text-sm inline-block">
                        <span>User E-mail: </span><a href="">{user?.email}</a>
                    </p>
                </div>


                <div className="w-full h-px bg-gray-100 my-8"></div>


                <div className="flex flex-row flex-wrap gap-4 w-fit mb-8">
                    <div className="p-3 bg-gray-50 rounded-2xl px-4 py-4">
                        <p className="text-xs text-black uppercase font-bold">Role</p>
                        <p className="text-gray-700 font-semibold text-sm">User Member</p>
                    </div>
                    <div className="p-3  bg-gray-50 rounded-2xl px-4 py-4">
                        <p className="text-xs text-black uppercase font-bold">Status</p>
                        <p className="text-green-600 font-semibold text-sm">Verified</p>
                    </div>
                </div>


                <div className="flex flex-row flex-wrap w-8/12 gap-3 mb-8 text-center justify-center">

                    <button
                        onClick={() => router.push("/updateProfile")}
                        className="w-full max-w-[250px] p-4 bg-[var(--accent)]/80 text-white font-bold rounded-3xl 
                   cursor-pointer flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                    >
                        <span>✏️</span> Edit User
                    </button>

                    <button
                        onClick={() => authClient.signOut({ onSuccess: () => router.push("/login") })}

                        className="w-full max-w-[250px] p-4 border border-8 border-sky-600 font-bold rounded-3xl 
                   cursor-pointer flex items-center justify-center gap-2 "
                    >
                        <span>🚪</span> Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;