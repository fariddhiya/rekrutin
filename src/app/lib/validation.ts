const isValidEmail = (email: string): boolean => {
  const emailReg =
    /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  if (email.match(emailReg)) return true;
  return false;
};

export { isValidEmail };
