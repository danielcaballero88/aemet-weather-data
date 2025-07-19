module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/dist/", "/node_modules/"], // Ignore compiled files and node_modules
  testMatch: ["**/*.spec.ts"], // Match test files with .spec.ts suffix
};
