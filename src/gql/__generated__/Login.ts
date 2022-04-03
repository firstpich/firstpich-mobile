/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PhoneOTP } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_user {
  __typename: "User";
  id: string;
  phone: string;
  name: string;
  gender: string;
}

export interface Login_login_tokens {
  __typename: "TokenPair";
  accessToken: string;
  refreshToken: string;
}

export interface Login_login {
  __typename: "LoginResponse";
  loggedIn: boolean;
  nonOnboardedToken: string | null;
  user: Login_login_user | null;
  tokens: Login_login_tokens | null;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  phoneOtp: PhoneOTP;
}
