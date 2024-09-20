import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes using the createRouteMatcher function
const isPublicRoute = createRouteMatcher(["/:path*", "/sign-in(.*)", "/sign-up(.*)"]);

// Define private routes using the createRouteMatcher function
const isPrivateRoute = createRouteMatcher(["/wishlist", "/orders"]);

export default clerkMiddleware((auth, request) => {
    // If the route is private, enforce authentication
    if (isPrivateRoute(request)) {
        auth().protect();
    }
    // Protect all non-public routes
    else if (!isPublicRoute(request)) {
        auth().protect();
    }
});

// Export the config to match specific routes
export const config = {
    matcher: [
        // Exclude Next.js internals and static files unless they appear in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API and TRPC routes
        '/(api|trpc)(.*)',
    ],
};
