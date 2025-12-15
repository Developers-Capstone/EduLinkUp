"use client"

import { Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

function AuthCodeErrorContent() {
    const searchParams = useSearchParams()
    const error = searchParams.get("error")

    return (
        <div className="glass rounded-2xl p-8">
            <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Authentication Error</h2>
            <p className="text-muted-foreground mb-6">
                {error || "There was a problem verifying your authentication code. The link may have expired or already been used."}
            </p>
            <div className="flex flex-col gap-3">
                <Link href="/login">
                    <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple">
                        Return to Login
                    </Button>
                </Link>
                <Link href="/forgot-password">
                    <Button variant="outline" className="w-full border-glass-border bg-transparent">
                        Try Resetting Password Again
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default function AuthCodeErrorPage() {
    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-24">
            <div className="max-w-md w-full space-y-8 text-center">
                <Suspense fallback={<div className="glass rounded-2xl p-8">Loading...</div>}>
                    <AuthCodeErrorContent />
                </Suspense>
            </div>
        </div>
    )
}
