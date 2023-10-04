const path = require('path');

module.exports = {
  pubsweet: {
    components: [path.resolve(__dirname, './components/ping.js')],
  },
  'pubsweet-server': {
    host: 'localhost',
    port: 3000,
    secret: 'NOT_A_SECRET',
    db: {
      user: process.env['POSTGRES_USER'] || 'postgres',
      host: process.env['POSTGRES_HOST'] || 'localhost',
      database: process.env['POSTGRES_DB'] || 'test',
      password: process.env['POSTGRES_PASSWORD'] || 'postgres',
      port: parseInt(process.env['POSTGRES_PORT'], 10) || 5432,
    },
  },
  authsome: {
    // this should be either an npm package or an absolute path, not a relative path
    mode: path.resolve(__dirname, './authsome.js'),
    // teams: {
    //   seniorUser: {
    //     name: 'Senior User',
    //   },
    //   simpleUser: {
    //     name: 'Simple User',
    //   },
    // },
  },
  // dbManager: {
  //   username: 'admin',
  //   password: 'password',
  //   email: 'admin@example.com',
  //   admin: true,
  //   clobber: true,
  // },
};
