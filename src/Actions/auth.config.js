import { Users } from "@/Utilities/models";

export const authConfig = {
  pages: {
    signIn: "/Login",
  },
  providers: [],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Only on first sign-in
      if (user) {
        const finduser = await Users.findOne({ name: user.name });

        token.id = finduser._id;
        token.email = finduser.email; // ✅ Add this
        token.name = finduser.name; // ✅ Add this
        token.image = finduser.image; // ✅ Add this
      }
      console.log("the account :", token);
      return token;
    },
    async session({ session, token }) {
      if (token) {
        // Ensure token properties are being passed to the session
        session.user.id = token.id; // Attach user ID
        session.user.email = token.email; // Attach email
        session.user.image = token.image; // Attach email
        session.user.name = token.name || session.user.name; // Attach name (optional)
      }
      console.log("the session :", session); // ✅ Correct spelling
      return session;
    },
  },
};
