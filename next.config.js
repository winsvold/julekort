const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  assetPrefix: isDevelopment ? "" : "/julekort",
  basePath: isDevelopment ? "" : "/julekort",
};
