module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  {
    name: "strapi::body",
    config: {
      formLimit: "256mb", // form body
      jsonLimit: "256mb", // JSON body
      textLimit: "256mb", // text body
      formidable: {
        maxFileSize: 250 * 1024 * 1024, // multipart data, limit of uploaded file size
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::security",
    config: {
      frameguard: false,
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "frame-ancestors": "*",
          "frame-src": "*"
        },
      },
    },
  },
];
