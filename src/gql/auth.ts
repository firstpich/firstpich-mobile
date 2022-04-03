import { gql } from "@apollo/client";

export const SENDOTP = gql`
  mutation SendOTP($phone: Phone!) {
    sendOTP(phone: $phone)
  }
`;

export const LOGIN = gql`
  mutation Login($phoneOtp: PhoneOTP!) {
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

export const GENRES = gql`
  query Genres {
    genres
  }
`;

export const ONBOARD = gql`
  mutation OnBoard(
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
  query Whoami {
    whoami {
      id
      phone
      name
      gender
    }
  }
`;

export const RUNTIME_CONFIG = gql`
  query RuntimeConfig {
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
