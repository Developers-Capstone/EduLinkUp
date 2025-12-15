"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { resetPasswordForEmail, getAuthErrorMessage } from "@/lib/auth"

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const { error } = await resetPasswordForEmail(email)

            if (error) {
                toast.error(getAuthErrorMessage(error))
                return
            }

            setIsSubmitted(true)
            toast.success("Reset link sent!")
        } catch (error) {
            toast.error("An unexpected error occurred. Please try again.")
            console.error("Reset password error:", error)
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
                {!isSubmitted ? (
                    <>
                        {/* Header */}
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-foreground">Reset your password</h2>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Enter your email address and we'll send you a link to reset your password.
                            </p>
                        </div>

                        {/* Reset Form */}
                        <form className="mt-8 space-y-6 glass rounded-2xl p-8" onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                {/* Email */}
                                <div>
                                    <Label htmlFor="email" className="text-foreground">
                                        Email address
                                    </Label>
                                    <div className="mt-2 relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="pl-10 bg-background/50 border-glass-border"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 glow-blue disabled:opacity-50 disabled:cursor-not-allowed"
                                size="lg"
                            >
                                {isLoading ? "Sending..." : "Send reset link"}
                            </Button>

                            {/* Back to Login */}
                            <div className="text-center">
                                <Link
                                    href="/login"
                                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-blue transition-colors"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to login
                                </Link>
                            </div>
                        </form>
                    </>
                ) : (
                    /* Success Message */
                    <div className="glass rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-neon-blue/10 flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8 text-neon-blue" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">Check your email</h2>
                        <p className="text-muted-foreground mb-6">
                            We've sent a password reset link to <span className="text-foreground font-medium">{email}</span>
                        </p>
                        <p className="text-sm text-muted-foreground mb-6">
                            Didn't receive the email? Check your spam folder or{" "}
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="text-neon-blue hover:text-neon-purple transition-colors"
                            >
                                try again
                            </button>
                        </p>
                        <Link href="/login">
                            <Button
                                variant="outline"
                                className="border-glass-border bg-transparent hover:bg-white/5"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to login
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
