import CredentialsProvider from "next-auth/providers/credentials";
import { sleep } from "~/lib/utils";
import { prisma } from "~/server/db";
import ldap from "~/server/ldap";

export const emailpassProvider = CredentialsProvider({
  id: "emailpass",
  credentials: {
    email: { type: "text" },
    password: { type: "password" },
  },
  async authorize(creds, req) {
    await sleep(1000);

    if (!creds?.email) {
      throw new Error(`Trường email đang rỗng.`);
    }

    if (!creds?.password) {
      throw new Error(`Trường password đang rỗng.`);
    }

    const ldapFound = await ldap.findUser(creds.email);
    await ldap.verifyUser(creds.email, creds.password);

    if (ldapFound) {
     
     
      throw new Error(`Tài khoản không được quyền truy cập`);
    }

    throw new Error(`Không tìm thấy thông tin của email ${creds?.email}`);
  },
});
