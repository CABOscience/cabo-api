"use strict";

import http from "http";

import "colors"; // enable text color in console (globaly)
import "./config/environment/globals.js"; // Load globals

import config from "./config/environment";
import mockDatabaseConfig from "./config/mockDatabase";
import sequelizeConfig from "./config/sequelize";
import expressConfig from "./config/express";

// Start
sequelizeConfig(config.sequelize)
  .then((db) => {
    return db
      .sync({
        force: false,
      })
      .then(() => {
        if (config.mockDb) {
          if (!__DEV__ && !__STAG__) {
            throw new Error(
              "The mockDb flag is true and you are not in a dev env. No modification on the database was done ! \n"
            );
          }
          return mockDatabaseConfig(db);
        }
        return null;
      })
      .then(() => {
        return {
          db,
        };
      });
  })
  .then((data) => {
    // Setup express
    return {
      ...data,
      app: expressConfig(data.db, config),
    };
  })
  .then((data) => {
    // Setup http server
    return {
      ...data,
      server: http.createServer(data.app),
    };
  })
  .then((data) => {
    // Start server
    const { server, app } = data;

    return new Promise((resolve, reject) => {
      app.server = server.listen(config.port, config.ip, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  })
  .then(() => {
    console.log(
      "Express server listening on ".cyan +
        (config.ip + ":" + config.port).green +
        ", in ".cyan +
        __ENV__.green +
        " mode".cyan
    );
  })
  .catch((err) => {
    console.log("There was an uncatch error : ".red);
    // console.error(err.message);
    console.error(err);
  });
