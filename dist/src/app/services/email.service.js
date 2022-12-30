"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emails_1 = require("../constants/emails");
const generateEmail = (inputName, inputDomain) => {
    let generatedEmail = `${inputName
        .toLowerCase()
        .replace(/\s/g, "")}@${inputDomain}`; //default format
    for (const [key, value] of Object.entries(emails_1.validEmails)) {
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
                    }
                    else {
                        //to handle firstname[0]lastname format
                        const splitInputName = inputName.toLowerCase().split(" ");
                        generatedEmail = `${splitInputName[0].charAt(0) + splitInputName[1]}@${inputDomain}`;
                    }
                }
            }
            break;
        }
    }
    return generatedEmail;
};
exports.default = {
    generateEmail,
};
