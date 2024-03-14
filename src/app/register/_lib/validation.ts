const isValidLength = (password: string): boolean => {
  if (password.length >= 8) return true;
  return false;
};

const isContainSpecialCharacter = (password: string): boolean => {
  const specialCharacterReg = /^[^&\\;<>]*[^a-zA-Z0-9&\\;<>][^&\\;<>]*$/;
  if (password.match(specialCharacterReg)) return true;
  return false;
};

const isContainUpperLower = (password: string): boolean => {
  const upperCaseReg = /[A-Z]/;
  const lowerCaseReg = /[a-z]/;
  if (password.match(upperCaseReg) && password.match(lowerCaseReg)) return true;
  return false;
};

export { isContainSpecialCharacter, isValidLength, isContainUpperLower };
