const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});





// const { defineConfig } = require("@vue/cli-service");
// module.exports = {
//   publicPath: process.env.NODE_ENV === "production" ? "/joydeep/users" : "/",
//   outputDir: "dist",
//   assetsDir: "assets",
//   productionSourceMap: false,
//   filenameHashing: true,
//   css: { extract: true, sourceMap: false },
//   devServer: { overlay: { warnings: true, errors: true } },
// };
