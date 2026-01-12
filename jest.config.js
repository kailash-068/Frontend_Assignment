const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  // Setup files after env
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // IMPORTANT: Specify jsdom environment
  testEnvironment: "jest-environment-jsdom",

  // Module directories
  moduleDirectories: ["node_modules", "<rootDir>/"],

  // Module name mapper for path aliases
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/lib/(.*)$": "<rootDir>/lib/$1",
    "^@/types/(.*)$": "<rootDir>/types/$1",
  },

  // Tell Jest which files to test
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],

  // Files to ignore
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],

  // Transform files with next/babel
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],

  // Coverage
  collectCoverageFrom: [
    "components/**/*.{js,jsx,ts,tsx}",
    "lib/**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
};

module.exports = createJestConfig(customJestConfig);
