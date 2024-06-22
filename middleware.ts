import {
   clerkMiddleware,
   createRouteMatcher
 } from '@clerk/nextjs/server';
 
 const isProtectedRoute = createRouteMatcher([
   // '/',
   // '/forum(.*)',
 ]);
 
 export default clerkMiddleware((auth, req) => {
   if (isProtectedRoute(req)) auth().protect();
 });
 
 export const config = {
   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
 };


 //   !!!!  this version from clerk site didnt work
//  import { authMiddleware } from "@clerk/nextjs/server";
// export default authMiddleware({
//   // "/" will be accessible to all users
//   publicRoutes: ["/"],
// });

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };