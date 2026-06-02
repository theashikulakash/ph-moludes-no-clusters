'use client'
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { toast } from 'react-toastify'; 

const LoginPage = () => {
    const router = useRouter();

    // --- 1. Email & Password Login Handler ---
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
        });

        if (error) {
            toast.error(error.message || "Invalid Email or Password");
        } else {
            toast.success("Login Successful!");
            router.push("/");
        }
    };

    // --- 2. Google Social Login Handler ---
    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/", // Where to go after Google confirms identity
            errorCallback: (error) => {
                toast.error(error.message || "Google login failed");
            }
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 w-full max-w-md">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-sky-600">Welcome Back</h2>
                    <p className="text-gray-500 mt-2 animate__animated animate__fadeInUp">Please sign in to your account</p>
                </div>
                
                {/* Manual Login Form */}
                <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Invalid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-sky-700 font-medium">Email</Label>
                        <Input placeholder="name@company.com" variant="bordered" />
                        <FieldError className="text-red-500 text-xs" />
                    </TextField>

                    <TextField
                        isRequired
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) return "Min. 8 characters required";
                            return null;
                        }}
                    >
                        <Label className="text-sky-700 font-medium">Password</Label>
                        <Input placeholder="••••••••" variant="bordered" />
                        <Description className="text-xs">Must include 1 uppercase and 1 number</Description>
                        <FieldError className="text-red-500 text-xs" />
                    </TextField>

                    <div className="flex gap-3 mt-2">
                        <Button 
                            type="submit" 
                            className="flex-1 bg-sky-600 text-white font-bold h-12 rounded-xl hover:bg-sky-700 transition-all"
                        >
                            Sign In
                        </Button>
                        <Button 
                            type="reset" 
                            variant="flat" 
                            className="border border-gray-200 text-gray-600 h-12 rounded-xl"
                        >
                            Reset
                        </Button>
                    </div>
                </Form>

                {/* Visual Divider */}
                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-200"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="px-3 bg-white text-gray-400 font-medium">Or continue with</span>
                    </div>
                </div>

                {/* Google Sign In Button */}
                <Button 
                    onPress={handleGoogleSignIn}
                    className="w-full bg-white border-2 border-gray-100 text-gray-700 font-bold h-12 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-all shadow-sm"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                    </svg>
                    Continue with Google
                </Button>
                
                <p className="text-center text-sm text-gray-500 mt-8">
                    Don't have an account? <a href="/register" className="text-sky-600 font-bold hover:underline">Register</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;