module.exports = {
  roots: ["<rootDir>"],
  testMatch: ["**/*.test.ts"],
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["./setupTests.ts"],
};
