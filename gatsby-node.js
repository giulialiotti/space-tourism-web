const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        assets: path.resolve(__dirname, "src/assets"),
        sections: path.resolve(__dirname, "src/sections"),
        layouts: path.resolve(__dirname, "src/layouts"),
        hooks: path.resolve(__dirname, "src/hooks"),
      },
    },
  });
};