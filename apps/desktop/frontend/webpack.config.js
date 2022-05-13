const { merge } = require("webpack-merge");

// A bit of a hack since nx/web executors use target: 'web'
//https://github.com/nrwl/nx/blob/master/packages/web/src/utils/config.ts
module.exports = (config, context) => {
  return merge(config, {
    // overwrite values here
    target: "electron-renderer",
  });
};
