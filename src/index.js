'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {

    const { transformArgs } = strapi.plugin("graphql").service("builders").utils;

    const extensionService = strapi.service("plugin::graphql.extension");
    extensionService.use(({ strapi }) => ({
      typeDefs: ``,
      resolvers: {
        Mutation: {}
      },
      resolversConfig: {}
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) { },
};