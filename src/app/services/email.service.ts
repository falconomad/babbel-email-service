import { validEmails } from "../constants/emails";

const generateEmail = (inputName: string, inputDomain: string) => {
  let generatedEmail = `${inputName
    .toLowerCase()
    .replace(/\s/g, "")}@${inputDomain}`; //default format
  for (const [key, value] of Object.entries(validEmails)) {
    const nameDomain = value.split("@");
    const name = nameDomain[0];
    const domain = nameDomain[1];

    if (domain === inputDomain) {
      const splitName = inputName.toLowerCase().split(" ");
      const dataSetName = key.toLowerCase().replace(/\s/g, "");
      if (splitName.length > 1) {
        if (name !== dataSetName) {
          if (name.includes(".")) {
            // to handle firstname.lastname format
            generatedEmail = `${inputName
              .toLowerCase()
              .split(" ")
              .join(".")}@${inputDomain}`;
          } else {
            //to handle firstname[0]lastname format
            const splitInputName = inputName.toLowerCase().split(" ");
            generatedEmail = `${
              splitInputName[0].charAt(0) + splitInputName[1]
            }@${inputDomain}`;
          }
        }
      }
      break;
    }
  }
  return generatedEmail;
};

export default {
  generateEmail,
};
