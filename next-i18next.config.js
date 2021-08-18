const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "th"],
    defaultLocale: "th",
    // localeDetection: false,
  },
  localePath: path.resolve("./public/locales"),
};
