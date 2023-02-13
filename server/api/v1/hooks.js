"use strict";
import { randomBytes } from "crypto";
import bcrypt from "bcryptjs";

const generateHash = (pass) => {
  return bcrypt.hash(pass, 12);
};

export default function (db) {
  // observations

  /*
        User
    */
  db.Users.addHook("beforeCreate", (user) => {
    if (user.password) {
      console.log("beforeCreate");
      const password = user.getDataValue("password");
      return generateHash(password).then((hashPwd) => {
        user.setDataValue("password", hashPwd);
      });
    }
  });

  db.Users.addHook("beforeUpdate", (user) => {
    if (user.password) {
      const password = user.getDataValue("password");
      console.log("beforeUpdate");
      return generateHash(password).then((hashPwd) => {
        user.setDataValue("password", hashPwd);
      });
    }
  });

  db.Users.addHook("afterCreate", (user) => {
    const token = randomBytes(32).toString("hex");

    return db.ApiKeys.create({
      user_id: user.id,
      token: token,
    });
  });
}
