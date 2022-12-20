/**
 * This file is run during tests. It transforms all SVG components to
 * their respective file names.
 *
 * We have added this so we don't have to render SVGs during snapshot tests.
 */
const path = require("path");

module.exports = {
  process(src, filename) {
    return {
      code: "module.exports = " + JSON.stringify(path.basename(filename)) + ";",
    };
  },
};
