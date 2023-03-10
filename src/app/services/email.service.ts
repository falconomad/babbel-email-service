import { validEmails } from "../constants/emails";

const generateEmail = (inputName: string, inputDomain: string) => {
  const splitName = inputName.toLowerCase().split(" ");
  let generatedEmail = `${splitName[0]}${
    splitName[splitName.length - 1]
  }@${inputDomain}`; //default format
  for (const [key, value] of Object.entries(validEmails)) {
    const nameDomain = value.split("@");
    const name = nameDomain[0];
    const domain = nameDomain[1];

    if (domain === inputDomain) {
      const dataSetName = key.toLowerCase().replace(/\s/g, "");
      if (splitName.length > 1) {
        if (name !== dataSetName) {
          if (splitName.length > 2) {
            //when there is an extra word present other thatn firstname and latsname etc: middlename
            generatedEmail = formatEmail(
              name,
              [splitName[0], splitName[splitName.length - 1]],
              inputDomain
            );
          } else {
            generatedEmail = formatEmail(name, splitName, inputDomain);
          }
        }
      }
      break;
    }
  }
  return generatedEmail;
};

const formatEmail = (
  name: string,
  splitInputName: string[],
  inputDomain: string
) => {
  if (name.includes(".")) {
    // to handle firstname.lastname format
    return `${splitInputName.join(".")}@${inputDomain}`;
  } else {
    //to handle firstname[0]lastname format
    return `${splitInputName[0].charAt(0) + splitInputName[1]}@${inputDomain}`;
  }
};

export default {
  generateEmail,
};
