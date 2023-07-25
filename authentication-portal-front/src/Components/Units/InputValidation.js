

export const EmailInputValidation=(email)=>{

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

export const PasswordInputValidation=(password)=>{

    return true

}

