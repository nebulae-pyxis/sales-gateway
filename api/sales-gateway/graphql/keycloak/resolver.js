const { of, Observable, bindNodeCallback } = require("rxjs");
const { map, tap } = require("rxjs/operators");
const request = require("request");
const KEYCLOAK_BASE_URL = process.env.KEYCLOAK_BASE_URL;
const KEYCLOAK_CLIENT_ID = process.env.KEYCLOAK_CLIENT_ID;

module.exports = {
  Mutation: {
    createToken: (root, args, context, info) => {
      return bindNodeCallback(request.post)({
        headers: { "content-type": "application/json" },
        url: KEYCLOAK_BASE_URL,
        form: {...args, grant_type: 'password', client_id: KEYCLOAK_CLIENT_ID }
      })
        .pipe(map(([resp, jsonStr]) => JSON.parse(jsonStr)))
        .toPromise();
    },
    refreshToken: (root, args, context, info) => {
      return bindNodeCallback(request.post)({
        headers: { "content-type": "application/json" },
        url: KEYCLOAK_BASE_URL,
        form: {...args, grant_type: 'refresh_token', client_id: KEYCLOAK_CLIENT_ID }
      })
        .pipe(map(([resp, jsonStr]) => JSON.parse(jsonStr)))
        .toPromise();
    }
  }
};
