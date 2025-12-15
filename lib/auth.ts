
// Mock types since we removed the package

// Mock types since we removed the package
// We'll define minimal compatible types to avoid breaking imports elsewhere if possible,
// or just use 'any' if we want to be lazy, but better to be type safe-ish.
// Actually, since we uninstalled the package, we can't import from it.
// So we need to define these types locally or remove them.
// The plan said "Mock Supabase logic".
// I need to redefine User and AuthError interfaces or remove them.
// Let's redefine simple versions to keep the signature compatible if other files import them.

export interface User {
    id: string
    email?: string
    user_metadata: {
        [key: string]: any
    }
    aud: string
    created_at: string
}

export interface AuthError {
    message: string
}

export interface AuthResponse {
    user: User | null
    error: AuthError | null
}

export interface SignUpData {
    email: string
    password: string
    name: string
}

/**
 * Sign up a new user with email and password (MOCK)
 */
export async function signUp({ email, password, name }: SignUpData): Promise<AuthResponse> {
    console.log('Mock SignUp:', email, name);
    return {
        user: null,
        error: { message: 'Sign up is disabled in this version.' }
    }
}

/**
 * Sign in a user with email and password (MOCK)
 */
export async function signIn(email: string, password: string, rememberMe: boolean = true): Promise<AuthResponse> {
    console.log('Mock SignIn:', email);
    return {
        user: null,
        error: { message: 'Sign in is disabled in this version.' }
    }
}

/**
 * Sign in with Google OAuth (MOCK)
 */
export async function signInWithGoogle(): Promise<{ error: AuthError | null }> {
    console.log('Mock SignInWithGoogle');
    return { error: { message: 'Google Sign in is disabled.' } }
}

/**
 * Sign in with GitHub OAuth (MOCK)
 */
export async function signInWithGitHub(): Promise<{ error: AuthError | null }> {
    console.log('Mock SignInWithGitHub');
    return { error: { message: 'GitHub Sign in is disabled.' } }
}

/**
 * Sign out the current user (MOCK)
 */
export async function signOut(): Promise<{ error: AuthError | null }> {
    console.log('Mock SignOut');
    return { error: null }
}

/**
 * Send a password reset email to the user (MOCK)
 */
export async function resetPasswordForEmail(email: string): Promise<{ error: AuthError | null }> {
    console.log('Mock ResetPassword:', email);
    return { error: { message: 'Password reset is disabled.' } }
}

/**
 * Get the current authenticated user (MOCK)
 */
export async function getCurrentUser(): Promise<User | null> {
    return null
}

/**
 * Get a user-friendly error message from Supabase auth errors
 */
export function getAuthErrorMessage(error: AuthError | null): string {
    if (!error) return ''
    return error.message || 'An error occurred.'
}

