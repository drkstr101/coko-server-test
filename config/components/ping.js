const typeDefs = /* GraphQL */ `
  scalar DateTime

  extend type Query {
    ping: PingResponse!
  }

  type PingResponse {
    message: String!
    date: DateTime!
  }
`;

const resolvers = {
  Query: {
    ping(_, {}, ctx) {
      return {
        message: 'Welcome to prism!',
        date: new Date(),
        // TODO - we need to figure out how to update the graphql context to pass this through
        // url: this.req.url,
        // headers: Object.assign({}, this.req.headers),
      };
    },
  },
};

module.exports = {
  resolvers,
  typeDefs,
};
