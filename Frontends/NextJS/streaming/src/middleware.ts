// this is where you prevent user from  entering page without login
import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import User from "@/models/userModel";
export function middleware(request:NextRequest) {
    // we have public path like login and sign up 
    // there are protective path like profile
    // we want to check if the user is logged in or not
    // if the user is not logged in we want to redirect them to login page
    // if the user is logged in we want to redirect them to profile page
    // if (request.nextUrl.pathname.startsWith('/_next') || request.nextUrl.pathname.startsWith('/public')) {
    //     return NextResponse.next();
    //   }

    if (
        request.nextUrl.pathname.startsWith('/_next') ||
        request.nextUrl.pathname.startsWith('/public') ||
        request.nextUrl.pathname.startsWith('/api') || // Optionally exclude API routes
        /\.(png|jpg|jpeg|gif|css|js|svg)$/.test(request.nextUrl.pathname) // Exclude image and other asset files
      ) {
        return NextResponse.next();
      }
    const path = request.nextUrl.pathname;
    //identify which path is public or not
    const isPublic = path === '/' || path === '/login' || path === '/signup';

     //check if the user is logged in or not
     const token = request.cookies.get('token')?.value || '';
     if(isPublic && token) {
        //if in public paht and have token menaing user is logged in
        if(!User.hasAccount) {
          // direct to create account page`
          return NextResponse.redirect(new URL('/create_profile', request.nextUrl));
        }
         return NextResponse.redirect(new URL('/', request.nextUrl));
     }
     if(!isPublic &&!token) {
        //if in protective path and no token menaing user is not logged in
         return NextResponse.redirect(new URL('/login', request.nextUrl));
     }
    
}

export const config = {
    matcher: [
      '/',
        '/:user/:path*',
      
    ]
}