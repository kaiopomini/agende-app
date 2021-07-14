type MessageValidator = {
  isValid: boolean;
  message: string;
};

function checkRequired(input: any): MessageValidator {
  const stringInput = String(input);
  if (stringInput.trim() === '') {
    return {isValid: false, message: 'Email inválido!'};
  }
  return {
    isValid: true,
    message: '',
  };
}

function checkEmail(input: any): MessageValidator {
  const inputString = String(input);
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(inputString.trim())) {
    return {
      isValid: true,
      message: '',
    };
  }

  return {
    isValid: false,
    message: 'Email inválido!',
  };
}

//Check input length

function checkLength(
  input: any,
  min: number,
  max: number,
  fieldname: string,
): Object {
  if (input.length < min) {
    return {
      isValid: false,
      message: `O campo ${fieldname} deve ter pelomenos ${min} caracteres`,
    };
  }
  if (input.length > max) {
    return {
      isValid: false,
      message: `O campo ${fieldname} deve ter menos de ${max} caracteres`,
    };
  }
  return {
    isValid: true,
    message: '',
  };
}

// Check passwords match
function checkPasswordsMactch(input1: any, input2: any): MessageValidator {
  if (input1 !== input2) {
    return {
      isValid: false,
      message: 'As senhas devem ser iguais',
    };
  }
  return {
    isValid: true,
    message: 'As senhas devem ser iguais',
  };
}

export {checkRequired, checkPasswordsMactch, checkLength, checkEmail};
