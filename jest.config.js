const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/test/**/*.spec.ts"],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts", "!<rootDir>/src/types/**/*.ts"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
};
