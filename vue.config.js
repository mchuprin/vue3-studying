module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "src/scss/styles.scss";
        `,
      },
    },
  },
};
