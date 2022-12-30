"use strict";
//import { validEmails } from '../constants/emails';
Object.defineProperty(exports, "__esModule", { value: true });
const validEmails = {
    "Jane Doe": "jdoe@babbel.com",
    "Jay Arun": "jayarun@linkedin.com",
    "David Stein": "davidstein@google.com",
    "Mat Lee": "matlee@google.com",
    "Marta Dahl": "mdahl@babbel.com",
    "Vanessa Boom": "vboom@babbel.com"
};
const generateEmail = (inputName, inputDomain) => {
    let generatedEmail = `${inputName.toLowerCase().replace(/\s/g, "")}@${inputDomain}`;
    for (const [key, value] of Object.entries(validEmails)) {
        const nameDomain = value.split('@');
        const name = nameDomain[0];
        const domain = nameDomain[1];
        if (domain === inputDomain) {
            const splitName = inputName.toLowerCase().split(' ');
            const dataSetName = key.toLowerCase().replace(/\s/g, "");
            if (splitName.length > 1) {
                if (name !== dataSetName) {
                    const splitInputName = inputName.toLowerCase().split(' ');
                    generatedEmail = `${splitInputName[0].charAt(0) + splitInputName[1]}@${inputDomain}`;
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
