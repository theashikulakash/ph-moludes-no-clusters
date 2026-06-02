"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client"; 
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user; 

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login"); 
                },
            },
        });
    };

    return (
        <nav className="bg-sky-400 shadow-lg">
            <div className="flex flex-row items-center justify-between rounded-3xl p-4 mx-auto w-11/12 md:w-10/12">
                
                {/* Logo Section */}
                <div className="flex items-center gap-3 ">
                    <Link href="/" className="hidden sm:block text-2xl font-bold text-white">
                        PeakSummer
                    </Link>
                    <Link href="/" className="block sm:hidden text-2xl font-bold text-white">
                        PS
                    </Link>
                </div>

                {/* Nav Links - Hidden on very small screens, visible on md */}
                <div className=" items-center flex gap-2 sm:gap-6 text-white font-medium">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/allproducts" className="hover:underline">Products</Link>
                    {user && <Link href="/userprofile" className="hover:underline">Profile</Link>}
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-3">
                    {isPending ? (
                        <div className="animate-pulse text-white text-sm">Checking...</div>
                    ) : user ? (
                        <>
                            <Link href="/userprofile" className="bg-white rounded-full p-1 hover:bg-gray-100 transition-colors">
                                {user.image ? (
                                    <img
                                        src={user.image}
                                        alt={user.name || "User"}
                                        className="h-8 w-8 rounded-full hover:scale-105 object-cover"
                                    />
                                ) : (
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-slate-700">
                                        {user.name?.charAt(0).toUpperCase() || "U"}
                                    </span>
                                )}
                            </Link>
                            <button 
                                onClick={handleLogout}
                                className="bg-white cursor-pointer rounded-full px-4 py-2 text-black font-bold text-sm hover:bg-red-50 transition-colors"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <div className="flex gap-2">
                            <Link href="/login" className="bg-white rounded-full px-4 py-2 text-black font-bold text-sm hover:underline">
                                Login
                            </Link>
                            <Link href="/register" className="bg-white rounded-full px-4 py-2 text-black font-bold text-sm hover:underline">
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}