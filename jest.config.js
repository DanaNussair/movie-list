module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "\\.svg": "<rootDir>/src/tests/fileTransformer.ts",
  },
};
