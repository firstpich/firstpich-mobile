/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OtpResendConfig
// ====================================================

export interface OtpResendConfig_runtimeConfig_onboarding {
  __typename: "OnboardingConfig";
  min_genre_likes_selected: number;
  max_genre_likes_selected: number;
}

export interface OtpResendConfig_runtimeConfig_rate_limits_send_otp_ip_rate_limit {
  __typename: "RateLimitServiceConfig";
  points: number;
  duration: number;
  blockDuration: number;
}

export interface OtpResendConfig_runtimeConfig_rate_limits {
  __typename: "RateLimitConfig";
  send_otp_ip_rate_limit: OtpResendConfig_runtimeConfig_rate_limits_send_otp_ip_rate_limit;
}

export interface OtpResendConfig_runtimeConfig {
  __typename: "YamlConfig";
  onboarding: OtpResendConfig_runtimeConfig_onboarding;
  rate_limits: OtpResendConfig_runtimeConfig_rate_limits;
}

export interface OtpResendConfig {
  runtimeConfig: OtpResendConfig_runtimeConfig;
}
