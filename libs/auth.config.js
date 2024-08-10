export const authConfig = {
    pages: {
        signIn: "/login",
      },
    providers: [],
    callbacks:{
        async jwt({ token, user }) {
            if (user) {
              token._id = user._id;
              token.isAdmin = user.isAdmin;
            }
            return token;
          },
          async session({ session, token }) {
            if (token) {
              session.user.id = token._id;
              session.user.isAdmin = token.isAdmin;
            }
            return session;
          },
          authorized({ auth, request }) {
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            // const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnPostPage = request.nextUrl?.pathname.startsWith("/post");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
            const isOnRegisterPage = request.nextUrl?.pathname.startsWith("/register");
          
            // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
      
            // if (isOnAdminPanel && !user?.isAdmin) {
                
            //   return false;
            // }
      
            // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
      
            if (isOnBlogPage && !user) {
              return false;
            }

            if (isOnPostPage && !user) {
                return false;
              }

              if (isOnLoginPage && user) {
                return Response.redirect(new URL("/", request.nextUrl));
              }
  
              if (isOnRegisterPage && user) {
                return Response.redirect(new URL("/", request.nextUrl));
                }
        
      
            // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
      
            return true
          },
        },
}