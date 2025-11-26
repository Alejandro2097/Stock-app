import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Allow access to homepage, sign-in, and sign-up without authentication
    const publicPaths = ['/', '/sign-in', '/sign-up'];
    if (publicPaths.includes(pathname)) {
        return NextResponse.next();
    }

    const sessionCookie = getSessionCookie(request);

    if (!sessionCookie) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|assets).*)',
    ],
};
