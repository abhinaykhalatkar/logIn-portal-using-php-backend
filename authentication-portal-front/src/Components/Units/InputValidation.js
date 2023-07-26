export const EmailInputValidation = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const PasswordInputValidation = (password) => {
  return {
    isPasswordMinLength: password.length >= 8,
    hasCapitalLetter: /[A-Z]/.test(password),
    hasSmallLetter: /[a-z]/.test(password),
    hasSpecialCharacter: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
    hasNumber: /\d/.test(password),
  };
};
