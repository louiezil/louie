import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  console.log("Token is :",token)

  const { pathname } = request.nextUrl;
  const publicPaths = ["/", "/signup", "/Login"];

  const isAdmin = pathname.startsWith("/Admin");
  const isONLogin = pathname.startsWith("/Login");
  const isOnsignup = pathname.startsWith("/signup");


  if (!token && !publicPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/Login", request.url));
  }

  if (isAdmin && token?.email !== "frimponglouis0@gmail.com") {
    return NextResponse.redirect(new URL("/Dashboard", request.url));
  }

  if(token && isONLogin){
    return NextResponse.redirect(new URL('/Dashboard',request.url))
  }
  if(token && isOnsignup){
    return NextResponse.redirect(new URL('/Dashboard',request.url))
  }
  // console.log(token)

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
