import emailService from "../app/services/email.service";

describe("Email Service", () => {
  describe("generateEmail", () => {
    it("should generate an email based on the input name and domain", () => {
      const email = emailService.generateEmail("Jane Doe", "babbel.com");
      expect(email).toEqual("jdoe@babbel.com");
    });

    it("should generate an email with the first initial and last name if the full name is already taken for the given domain", () => {
      const email = emailService.generateEmail("Jane Doe", "babbel.com");
      expect(email).toEqual("jdoe@babbel.com");

      const email2 = emailService.generateEmail("John Doe", "babbel.com");
      expect(email2).toEqual("jdoe@babbel.com");

      const email3 = emailService.generateEmail("Jim Doe", "babbel.com");
      expect(email3).toEqual("jdoe@babbel.com");
    });

    it("should generate an email with the full name if the domain is not in the valid emails list", () => {
      const email = emailService.generateEmail("Jane Doe", "example.com");
      expect(email).toEqual("janedoe@example.com");
    });

    it("should generate an email with the full name for the corrsponding domain in list", () => {
      const email = emailService.generateEmail("Jane Doe", "google.com");
      expect(email).toEqual("janedoe@google.com");
    });
  });
});
