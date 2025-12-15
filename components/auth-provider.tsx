"use client"

import { createContext, useContext, useEffect, useState } from "react"
// Mocking types locally since package is removed
interface User {
    id: string
    email?: string
    user_metadata: {
        [key: string]: any
    }
}
interface Session {
    user: User
    access_token: string
}

interface AuthContextType {
    user: User | null
    session: Session | null
    isLoading: boolean
    signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [session, setSession] = useState<Session | null>(null)
    const [isLoading, setIsLoading] = useState(false) // Not loading, just done.

    // No effect needed, we are just mock logged out forever.

    const signOut = async () => {
        // No-op
        console.log("Mock signOut")
    }

    return (
        <AuthContext.Provider value={{ user, session, isLoading, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
