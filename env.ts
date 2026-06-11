// import { createEnv } from "@t3-oss/env-nextjs";
// import { z } from "zod";

// export const env = createEnv({
//   server: {
//     NEXTAUTH_SECRET: z.string().min(10),
//     NEXTAUTH_URL: z.string().url(),
//     LDAP_URL: z.string().url(),
//     LDAP_EMAIL: z.string(),
//     LDAP_PASS: z.string(),
//     MODE: z.enum(["dev", "prod"]),
//     GOOGLE_CLIENT_ID: z.string(),
//     GOOGLE_CLIENT_SECRET: z.string(),
//     JWT_SECRET: z.string()
//   },
//   client: {},
//   runtimeEnv: {
//     MODE: process.env.MODE,
//     NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
//     NEXTAUTH_URL: process.env.NEXTAUTH_URL,
//     LDAP_URL: process.env.LDAP_URL,
//     LDAP_EMAIL: process.env.LDAP_EMAIL,
//     LDAP_PASS: process.env.LDAP_PASS,
//     GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
//     GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
//     JWT_SECRET: process.env.JWT_SECRET
//   },
// });
