const path = require('path');

module.exports = {
  "roots": [
    path.resolve(__dirname, "src")
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupTestFrameworkScriptFile": path.resolve(__dirname, "src/setup-enzyme.ts"),
  "moduleNameMapper": {
    "\\.(scss)$": path.resolve(__dirname, "node_modules/jest-css-modules"),
    "\\.(css)$": path.resolve(__dirname, "node_modules/jest-css-modules")
  }
};
