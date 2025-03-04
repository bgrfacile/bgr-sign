import React from "react";
import { useActionData, Form, useNavigation } from "react-router";
import { LogIn } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button.tsx";

export const Login: React.FC = () => {
    const actionData = useActionData() as { error?: string } | null;
    const navigation = useNavigation();
    const isLoading = navigation.state === "submitting";

    return (
        <div className="min-h-screen bg-[#FFFFFF] flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <div className="flex justify-center">
                        <LogIn className="h-12 w-12 text-[#1ABC9C]" />
                    </div>
                    <h1 className="mt-6 text-3xl font-bold text-[#2C3E50]">
                        Welcome Back
                    </h1>
                    <p className="mt-2 text-[#7F8C8D]">
                        Sign in to your Student Attendance Tracker account
                    </p>
                    {actionData?.error && (
                        <p className="mt-2 text-[#E74C3C]">{actionData.error}</p>
                    )}
                    <div className="mt-4 text-sm text-[#7F8C8D] space-y-1">
                        <p>Demo accounts (password: password):</p>
                        <p>admin@example.com (Administrator)</p>
                        <p>teacher1@example.com (Teacher)</p>
                        <p>student1@example.com (Student)</p>
                        <p>parent@example.com (Parent)</p>
                    </div>
                </div>

                {/* Utilisation du composant Form de react-router pour déléguer le traitement au routeur */}
                <Form method="post" className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <Input
                            autoComplete="email"
                            label="Email Address"
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            disabled={isLoading}
                        />
                        <Input
                            autoComplete="current-password"
                            label="Password"
                            type="password"
                            name="password"
                            required
                            placeholder="Enter your password"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-[#1ABC9C] border-[#BDC3C7] rounded"
                            />
                            <span className="ml-2 text-sm text-[#7F8C8D]">Remember me</span>
                        </label>
                        <a
                            href="#"
                            className="text-sm text-[#1ABC9C] hover:text-[#16A085]"
                        >
                            Forgot password?
                        </a>
                    </div>

                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Signing in..." : "Sign in"}
                    </Button>
                </Form>
            </div>
        </div>
    );
};
