/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OnBoardingArgs } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: OnBoard
// ====================================================

export interface OnBoard_onboard_user {
  __typename: "User";
  id: string;
  phone: string;
  name: string;
  gender: string;
}

export interface OnBoard_onboard_tokens {
  __typename: "TokenPair";
  accessToken: string;
  refreshToken: string;
}

export interface OnBoard_onboard {
  __typename: "OnBoardResponse";
  user: OnBoard_onboard_user;
  tokens: OnBoard_onboard_tokens;
}

export interface OnBoard {
  onboard: OnBoard_onboard;
}

export interface OnBoardVariables {
  onBoardingArgs: OnBoardingArgs;
  nonOnboardedToken: string;
}
