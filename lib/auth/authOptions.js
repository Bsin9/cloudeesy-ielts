import CredentialsProvider from "next-auth/providers/credentials";

/** NextAuth.js configuration — JWT-based, HTTPS-only cookies, RBAC */
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email:    { label: "Email",    type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // TODO: replace with real DB lookup
        if (
          credentials?.email === "demo@riseiq.ca" &&
          credentials?.password === "demo1234"
        ) {
          return {
            id: "u_001",
            email: "demo@riseiq.ca",
            name: "RiseIQ Student",
            role: "student",
            targetBand: 7.5,
            examDate: "2026-05-10",
          };
        }
        return null;
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id         = user.id;
        token.role       = user.role;
        token.targetBand = user.targetBand;
        token.examDate   = user.examDate;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id         = token.id;
        session.user.role       = token.role;
        session.user.targetBand = token.targetBand;
        session.user.examDate   = token.examDate;
      }
      return session;
    },
  },

  pages: {
    signIn:  "/login",
    signOut: "/login",
    error:   "/login",
  },

  // NEXTAUTH_SECRET should be set in Azure SWA environment variables.
  // Fallback keeps the demo working if the env var hasn't propagated yet.
  secret: process.env.NEXTAUTH_SECRET ?? "riseiq-demo-jwt-secret-2026",
};
