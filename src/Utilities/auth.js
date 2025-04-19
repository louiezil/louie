import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { Users } from "./models";
import { connectToDb } from "@/Actions/connection";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { authConfig } from "@/Actions/auth.config";
export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        await connectToDb();

        const user = await Users.findOne({ name: credentials.name });
        if (!user) {
          throw new Error("No user found with this Username");
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) {
          throw new Error("Incorrect password");
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  // cookies: {
  //   sessionToken: {
  //     name: `__Secure-next-auth.session-token`,
  //     options: {
  //       domain:
  //         process.env.NODE_ENV === "production" ? ".vercel.app" : "localhost",
  //       secure: true,
  //       httpOnly: true,
  //       sameSite: "lax",
  //       path: "/",
  //     },
  //   },
  // },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.type == "oauth") {
        try {
          await connectToDb();
          const findUser = await Users.findOne({
            name: user.name,
          });
          if (!findUser) {
            const newuser = new Users({
              name: user.name,
              image: user.image,
              email: user.email,
            });
            await newuser.save();
            // console.log("newUser saved to db");
          }
          return true;
        } catch (error) {
          console.log(error);
        }
      }
      return true;
    },
    // async jwt({ token, account, user }) {
    //   // Only on first sign-in
    //   if (account && user) {
    //     //connecting to Db
    //     const finduser = await Users.findOne({
    //       name: user.name,
    //     });
    //     token.id = finduser._id;
    //     token.username = user.login || user.name || user.email;
    //   }
    //   // console.log(token)
    //   return token;
    // },
    // async session({ session, token }) {
    //   if (token) {
    //     // Ensure token properties are being passed to the session
    //     session.user.id = token.id;  // Attach user ID
    //     session.user.email = token.email;  // Attach email
    //     session.user.name = token.name || session.user.name;  // Attach name (optional)
    //   }
    //   console.log(session)
    //   return session;
    // },

    ...authConfig.callbacks,
  },
});
