import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname === "/home") {
    return NextResponse.redirect(new URL("/about", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home"], // Apply middleware only to '/home'
};
