/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RuntimeConfig
// ====================================================

export interface RuntimeConfig_runtimeConfig_onboarding {
  __typename: "OnboardingConfig";
  min_genre_likes_selected: number;
  max_genre_likes_selected: number;
}

export interface RuntimeConfig_runtimeConfig_rate_limits_send_otp_ip_rate_limit {
  __typename: "RateLimitServiceConfig";
  points: number;
  duration: number;
  blockDuration: number;
}

export interface RuntimeConfig_runtimeConfig_rate_limits {
  __typename: "RateLimitConfig";
  send_otp_ip_rate_limit: RuntimeConfig_runtimeConfig_rate_limits_send_otp_ip_rate_limit;
}

export interface RuntimeConfig_runtimeConfig {
  __typename: "YamlConfig";
  onboarding: RuntimeConfig_runtimeConfig_onboarding;
  rate_limits: RuntimeConfig_runtimeConfig_rate_limits;
}

export interface RuntimeConfig {
  runtimeConfig: RuntimeConfig_runtimeConfig;
}
