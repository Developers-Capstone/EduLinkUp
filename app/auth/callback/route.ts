import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const next = searchParams.get('next') ?? '/'

    // Mock callback: just redirect to next or home
    return NextResponse.redirect(`${origin}${next}`)
}
