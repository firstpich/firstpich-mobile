import jwt_decode from "jwt-decode";

import { database } from "@db/index";

import { BACKEND_URI } from "@src/config";

type AccessTokenSchema = {
  id: string;
  exp: number;
  iat: number;
};

const authMiddleware = async () => {
  const tokens = await database.adapter.getLocal("tokens");
  if (!tokens) {
    return {};
  }

  const { accessToken, refreshToken } = JSON.parse(tokens);

  const accessTokenDecoded = jwt_decode<AccessTokenSchema>(accessToken);

  // Access Token not expired
  if (Date.now() <= accessTokenDecoded.exp * 1000) {
    return {
      headers: {
        authorization: accessToken,
      },
    };
  }

  // Access Token expired, Refresh using Refresh Token
  const { data } = await fetch(BACKEND_URI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      operationName: "RefreshAccess",
      variables: {
        refreshToken: {
          refreshToken,
        },
      },
      query: `query RefreshAccess($refreshToken: RefreshToken!) {
          refreshTokens(refreshToken: $refreshToken) {
            accessToken
            refreshToken
          }
        }`,
    }),
  }).then(r => r.json());

  await database.adapter.setLocal(
    "tokens",
    JSON.stringify({
      refreshToken: data.refreshTokens.refreshToken,
      accessToken: data.refreshTokens.accessToken,
    }),
  );

  return {
    headers: {
      authorization: data.refreshTokens.accessToken,
    },
  };
};

export default authMiddleware;
