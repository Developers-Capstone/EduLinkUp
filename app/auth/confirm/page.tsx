"use client"

import { useEffect, useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Loader2 } from "lucide-react"

function AuthConfirmContent() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [error] = useState<string | null>(null)

    useEffect(() => {
        // Mock confirm: just redirect
        const next = searchParams.get('next') || '/'
        const timer = setTimeout(() => {
            router.push(next)
        }, 1000)
        return () => clearTimeout(timer)
    }, [router, searchParams])

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-neon-blue" />
                <p className="text-muted-foreground">
                    {error ? `Error: ${error}` : 'Completing sign in (Mock)...'}
                </p>
            </div>
        </div>
    )
}

export default function AuthConfirmPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-neon-blue" />
                    <p className="text-muted-foreground">Loading...</p>
                </div>
            </div>
        }>
            <AuthConfirmContent />
        </Suspense>
    )
}
