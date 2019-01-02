// Create and exports config variables

const devKeys = require("./dev");
const prodKeys = require("./prod");

const environments = {
  // default
  staging: {
    httpPort: 3000,
    httpsPort: 3001,
    envName: "staging",
    hashingSecret: devKeys.hashingSecret
  },
  production: {
    httpPort: 5000,
    httpsPort: 5001,
    envName: "production",
    hashingSecret: prodKeys.hashingSecret
  }
};

// Determine which environment was passed as command line argument
const currentEnvironment = process.env.NODE_ENV
  ? process.env.NODE_ENV.toLowerCase()
  : "";

// Check that the current environment is available, if not use default staging
var environmentToExport = environments[currentEnvironment]
  ? environments[currentEnvironment]
  : environments["staging"];

module.exports = environmentToExport;