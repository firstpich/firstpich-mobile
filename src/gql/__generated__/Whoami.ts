/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Whoami
// ====================================================

export interface Whoami_whoami {
  __typename: "User";
  id: string;
  phone: string;
  name: string;
  gender: string;
}

export interface Whoami {
  whoami: Whoami_whoami;
}
