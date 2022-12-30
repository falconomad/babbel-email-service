"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emails_1 = require("../constants/emails");
const generateEmail = (inputName, inputDomain) => {
    const splitName = inputName.toLowerCase().split(" ");
    let generatedEmail = `${splitName[0]}${splitName[splitName.length - 1]}@${inputDomain}`; //default format
    for (const [key, value] of Object.entries(emails_1.validEmails)) {
        const nameDomain = value.split("@");
        const name = nameDomain[0];
        const domain = nameDomain[1];
        if (domain === inputDomain) {
            const dataSetName = key.toLowerCase().replace(/\s/g, "");
            if (splitName.length > 1) {
                if (name !== dataSetName) {
                    if (splitName.length > 2) {
                        //when there is an extra word present other thatn firstname and latsname etc: middlename
                        formatEmail(name, [splitName[0], splitName[splitName.length - 1]], inputDomain);
                    }
                    else {
                        formatEmail(name, splitName, inputDomain);
                    }
                }
            }
            break;
        }
    }
    return generatedEmail;
};
const formatEmail = (name, splitInputName, inputDomain) => {
    console.log("enetered");
    if (name.includes(".")) {
        // to handle firstname.lastname format
        return `${splitInputName.join(".")}@${inputDomain}`;
    }
    else {
        //to handle firstname[0]lastname format
        return `${splitInputName[0].charAt(0) + splitInputName[1]}@${inputDomain}`;
    }
};
exports.default = {
    generateEmail,
};
