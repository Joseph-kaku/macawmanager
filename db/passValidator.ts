import JoiPasswordComplexity from 'joi-password-complexity';

const complexityOptions = {
  min: 1,
  max: 100,
  lowerCase: 1,
  upperCase: 1
};

export const passwordPass = (passwordToCheck: string) => {
  return JoiPasswordComplexity(complexityOptions, 'Password').validate(passwordToCheck);
};