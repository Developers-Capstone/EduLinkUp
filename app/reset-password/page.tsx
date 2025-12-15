"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lock, Eye, EyeOff, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function ResetPasswordPage() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match")
            return
        }

        if (formData.password.length < 6) {
            toast.error("Password must be at least 6 characters long")
            return
        }

        setIsLoading(true)

        try {
            // Mock delay
            await new Promise(resolve => setTimeout(resolve, 1000))

            // Mock success
            setIsSuccess(true)
            toast.success("Password updated successfully! (Mock)")

            setTimeout(() => {
                router.push("/login")
            }, 2000)
        } catch (error) {
            toast.error("An unexpected error occurred. Please try again.")
            console.error("Update password error:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-24">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-pulse-glow" />
            </div>

            <div className="max-w-md w-full space-y-8 relative z-10">
                {!isSuccess ? (
                    <>
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-foreground">Set new password</h2>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Please enter your new password below.
                            </p>
                        </div>

                        <form className="mt-8 space-y-6 glass rounded-2xl p-8" onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                {/* Password */}
                                <div>
                                    <Label htmlFor="password" className="text-foreground">
                                        New Password
                                    </Label>
                                    <div className="mt-2 relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <Input
                                            id="password"
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            autoComplete="new-password"
                                            required
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="pl-10 pr-10 bg-background/50 border-glass-border"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm Password */}
                                <div>
                                    <Label htmlFor="confirmPassword" className="text-foreground">
                                        Confirm Password
                                    </Label>
                                    <div className="mt-2 relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <Input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type={showConfirmPassword ? "text" : "password"}
                                            autoComplete="new-password"
                                            required
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className="pl-10 pr-10 bg-background/50 border-glass-border"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 glow-blue disabled:opacity-50 disabled:cursor-not-allowed"
                                size="lg"
                            >
                                {isLoading ? "Updating..." : "Update password"}
                            </Button>
                        </form>
                    </>
                ) : (
                    <div className="glass rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-neon-blue/10 flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8 text-neon-blue" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">Password updated</h2>
                        <p className="text-muted-foreground mb-6">
                            Your password has been successfully updated. You will be redirected to the login page shortly.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
