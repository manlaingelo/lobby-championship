import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
    const url = req.nextUrl
    const pathname = url.pathname
    const name = new URLSearchParams(url.searchParams).get('name')
    if (pathname === '/') {
        if (name) {
            return
        }
        else {
            // return NextResponse.redirect('/');
            return NextResponse.redirect('/uninvited');
        }
    }
}
