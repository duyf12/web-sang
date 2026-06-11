import ldap from "ldapjs";
import isEmpty from "lodash/isEmpty";
import { User } from "next-auth";
import crypto from "crypto";
// import { env } from "~/env";

function bind(client: ldap.Client) {
  return function (email: string, password: string): Promise<void> {
    if (isEmpty(email)) {
      throw new Error("tên đăng nhập rỗng");
    }
    if (isEmpty(password)) {
      throw new Error("mật khẩu đang rỗng");
    }
    return new Promise((resolve, reject) => {
      client.bind(email, password, (error) => {
        if (error) {
          reject({ message: error });
        } else {
          resolve();
        }
      });
    });
  };
}

function findUser(client: ldap.Client) {
  return function (email: string): Promise<User | null> {
    return new Promise((resolve, reject) => {
      let found: User | null;

      client.search(
        "dc=mobifone,dc=vn",
        {
          scope: "sub",
          derefAliases: 0,
          sizeLimit: 3,
          timeLimit: 0,
          typesOnly: false,
          filter: `(&(objectClass=user)(mail=${email}))`,
          attributes: ["company", "department", "cn", "objectSid", "mail"],
        },
        (error, res) => {
          if (error) {
            reject({ message: error });
            return;
          }

          res.on("searchEntry", (entry) => {
            found = buildUser(entry);
            return;
          });

          res.on("error", (err) => {
            reject({ message: err });
          });

          res.on("end", (result) => {
            resolve(found);
          });
        }
      );
    });
  };
}

function buildUser(entry: ldap.SearchEntry): User {
  const attributes = entry.attributes;
  const objectSid = attributes[3].vals.toString();
  const md5 = crypto.createHash("md5").update(objectSid).digest("hex");
  const id = md5.substring(0, 25);
  const name = attributes[0].vals.toString();
  const email = attributes[4].vals.toString();
  return { id, name, email };
}

export default Object.freeze({
  async findUser(email: string) {
    // const client = ldap.createClient({ url: env.LDAP_URL });
    // await bind(client)(env.LDAP_EMAIL, env.LDAP_PASS);
    return null;
  },
  async verifyUser(email: string, password: string) {
    // const client = ldap.createClient({ url: env.LDAP_URL });
    // await null;
  },
});
