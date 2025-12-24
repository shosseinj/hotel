import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import { credentials } from "./app/_lib/authjs/credentialsCallback";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { maxAge: 60 * 60 * 2, strategy: "jwt" },
  pages: { signIn: "/signin" },
  providers: [
    Credentials(credentials),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID ?? "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET ?? "",
    }),
    Facebook({
      clientId: process.env.AUTH_FACEBOOK_ID ?? "",
      clientSecret: process.env.AUTH_FACEBOOK_SECRET ?? "",
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.avatar = user.avatar;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.avatar = token.avatar;
      return session;
    },
  },
});
