import JoiPasswordComplexity from 'joi-password-complexity';

const complexityOptions = {
  min: 8,
  max: 10,
  lowerCase: 1,
  upperCase: 1
};

export const passwordPass = (passwordToCheck: string) => {
  return JoiPasswordComplexity(complexityOptions, 'Password').validate(passwordToCheck);
};