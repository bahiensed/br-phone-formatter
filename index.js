export const formatPhoneNumber = (value) => {
  value = value.replace(/\D/g, ''); //remove all non-numeric characters

  //limit to 11 digits
  if (value.length > 11) {
    value = value.substring(0, 11);
  }

  if (value.length > 2) {
    if (value.length === 11) {
      //for 11-digit numbers: (XX) XXXXX-XXXX
      value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7)}`;
    } else if (value.length === 10) {
      //for 10-digit numbers: (XX) XXXX-XXXX
      value = `(${value.substring(0, 2)}) ${value.substring(2, 6)}-${value.substring(6)}`;
    } else {
      value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
    }
  }

  return value;
};
