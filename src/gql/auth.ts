import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation sendOTP($phone: Phone!) {
    sendOTP(phone: $phone)
  }
`;

export const LOGIN = gql`
  mutation login($phoneOtp: PhoneOTP!) {
    login(phoneOtp: $phoneOtp) {
      loggedIn
      nonOnboardedToken
      user {
        id
        phone
        name
        gender
      }
      tokens {
        accessToken
        refreshToken
      }
    }
  }
`;

export const GET_GENRE = gql`
  query genres {
    genres
  }
`;

export const ONBOARD = gql`
  mutation onboard(
    $onBoardingArgs: OnBoardingArgs!
    $nonOnboardedToken: String!
  ) {
    onboard(
      onBoardingArgs: $onBoardingArgs
      nonOnboardedToken: $nonOnboardedToken
    ) {
      user {
        id
        phone
        name
        gender
      }
      tokens {
        accessToken
        refreshToken
      }
    }
  }
`;

export const WHOAMI = gql`
  query whoami {
    whoami {
      id
      phone
      name
      gender
    }
  }
`;

export const RUNTIME_CONFIG = gql`
  query otpResendConfig {
    runtimeConfig {
      onboarding {
        min_genre_likes_selected
        max_genre_likes_selected
      }
      rate_limits {
        send_otp_ip_rate_limit {
          points
          duration
          blockDuration
        }
      }
    }
  }
`;
