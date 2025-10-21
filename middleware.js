import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    // cookieName: "authjs.session-token", // LOCAL
    cookieName: "__Secure-authjs.session-token", //PROD
  });
  console.log(token);

  // Si pas de token, redirige vers /login
  if (!token) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Sinon, laisse passer
  return NextResponse.next();
}

// On surveille uniquement /dashboard et ses sous-routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
