import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { emailpassProvider } from "~/app/api/auth/[...nextauth]/provider-email-pass";
import GoogleProvider from "next-auth/providers/google";
// import { env } from "~/env";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    // GoogleProvider({
    //   clientId: env.GOOGLE_CLIENT_ID,
    //   clientSecret: env.GOOGLE_CLIENT_SECRET,
    // }), 
    emailpassProvider,
  ],
  // secret: env.JWT_SECRET
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
