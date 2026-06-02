'use client'
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { toast } from 'react-toastify'; 

const RegisterPage = () => {
    const router = useRouter(); 

    
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            email: userData.email,
            password: userData.password,
            name: userData.name,
            image: userData.imageUrl 
        });

        if (error) {
            toast.error(error.message || "Signup failed. Please check your details.");
        } else {
            toast.success("Account created successfully!");
            router.push("/");
        }
    };

 
    
    const handleGoogleSignUp = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
            errorCallback: (error) => {
                toast.error(error.message || "Google signup failed");
            }
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 w-full max-w-md">
                <h2 className="text-3xl font-bold text-sky-600 text-center">Create Account</h2>
                <p className="text-gray-500 text-center mt-2 mb-8 animate__animated animate__fadeInUp">Join PeakSummer today</p>

                <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <TextField isRequired name="name" type="text">
                        <Label className="text-sky-700 font-medium">Full Name</Label>
                        <Input placeholder="John Doe" variant="bordered" />
                        <FieldError />
                    </TextField>

                    <TextField isRequired name="email" type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-sky-700 font-medium">Email</Label>
                        <Input placeholder="john@example.com" variant="bordered" />
                        <FieldError />
                    </TextField>

                    <TextField isRequired name="password" type="password"
                        validate={(value) => {
                            if (value.length < 8) return "Min. 8 characters required";
                            if (!/[A-Z]/.test(value)) return "Need 1 uppercase letter";
                            if (!/[0-9]/.test(value)) return "Need 1 number";
                            return null;
                        }}
                    >
                        <Label className="text-sky-700 font-medium">Password</Label>
                        <Input placeholder="••••••••" variant="bordered" />
                        <Description className="text-xs">8+ chars, 1 uppercase, 1 number</Description>
                        <FieldError />
                    </TextField>

                    <TextField name="imageUrl" type="text">
                        <Label className="text-sky-700 font-medium">Profile Image URL (Optional)</Label>
                        <Input placeholder="https://example.com/image.jpg" variant="bordered" />
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2 mt-2">
                        <Button type="submit" className="flex-1 bg-sky-600 text-white font-bold h-12 rounded-xl">
                            <Check /> Register
                        </Button>
                        <Button type="reset" variant="flat" className="text-gray-500 h-12 rounded-xl">
                            Reset
                        </Button>
                    </div>
                </Form>


                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-200"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="px-3 bg-white text-gray-400 font-medium">Or join with</span>
                    </div>
                </div>


                <Button 
                    onPress={handleGoogleSignUp}
                    className="w-full bg-white border-2 border-gray-100 text-gray-700 font-bold h-12 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-all"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                </Button>

                <p className="text-center text-sm text-gray-500 mt-8">
                    Already have an account? <a href="/login" className="text-sky-600 font-bold hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;