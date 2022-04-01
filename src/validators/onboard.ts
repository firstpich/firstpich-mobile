import type { ErrorTypes } from "../pages/onboarding/AboutYouPage";

type ValidateOnboardingTypes = {
  name: string;
  gender: string;
  genres: string[];
  minG: number;
  maxG: number;
};

const validateOnboarding = ({
  name,
  gender,
  genres,
  minG,
  maxG,
}: ValidateOnboardingTypes): ErrorTypes => {
  const err: ErrorTypes = {
    name: null,
    gender: null,
    genre: null,
  };

  if (name === "") {
    err.name = "Name cannot be empty";
  }

  if (gender === "") {
    err.gender = "Gender must be selected";
  }

  if (minG > genres.length || maxG < genres.length) {
    err.genre = `You must select between ${minG} and ${maxG} genres as interests.`;
  }

  return err;
};

export default validateOnboarding;
