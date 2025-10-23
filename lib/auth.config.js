import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";

export default {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: "no-reply@myvisionboard.life",
      // sendVerificationRequest({ identifier, url }) {
      //   // Ici tu peux personnaliser l'email ou le lien
      //   console.log("Lien magique envoyé :", url);
      // },
    }),
  ],
};
