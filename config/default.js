module.exports = {
  "pubsweet-server": {
    db: {
      user: process.env["POSTGRES_USER"] || "postgres",
      host: process.env["POSTGRES_HOST"] || "localhost",
      database: process.env["POSTGRES_DB"] || "test",
      password: process.env["POSTGRES_PASSWORD"] || "postgres",
      port: parseInt(process.env["POSTGRES_PORT"], 10) || 5432,
    },
  },
  dbManager: {
    username: "admin",
    password: "password",
    email: "admin@example.com",
    admin: true,
    clobber: true,
  },
};
