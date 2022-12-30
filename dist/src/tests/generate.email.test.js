"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const email_service_1 = __importDefault(require("../app/services/email.service"));
describe('emailService', () => {
    describe('generateEmail', () => {
        it('should generate an email based on the input name and domain', () => {
            const email = email_service_1.default.generateEmail('Jane Doe', 'babbel.com');
            (0, chai_1.expect)(email).to.equal('jdoe@babbel.com');
        });
        it('should generate an email with the first initial and last name if the full name is already taken for the given domain', () => {
            const email = email_service_1.default.generateEmail('Jane Doe', 'babbel.com');
            (0, chai_1.expect)(email).to.equal('jdoe@babbel.com');
            const email2 = email_service_1.default.generateEmail('John Doe', 'babbel.com');
            (0, chai_1.expect)(email2).to.equal('jdoe@babbel.com');
            const email3 = email_service_1.default.generateEmail('Jim Doe', 'babbel.com');
            (0, chai_1.expect)(email3).to.equal('jdoe@babbel.com');
        });
        it('should generate an email with the full name if the domain is not in the valid emails list', () => {
            const email = email_service_1.default.generateEmail('Jane Doe', 'example.com');
            (0, chai_1.expect)(email).to.equal('janedoe@example.com');
        });
    });
});
