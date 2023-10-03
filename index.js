#!/usr/bin/env node

const { Collection, User } = require("@pubsweet/models");
const { setupDb } = require("@pubsweet/db-manager");
const config = require("config");

const seed = async () => {
  console.log("Loaded Config:", config.util.toObject());

  await setupDb({
    username: "admin",
    password: "password",
    email: "admin@example.com",
    admin: true,
    clobber: true,
  });

  const user = await new User({
    username: "john",
    email: "john@example.com",
    password: "johnjohn",
  }).save();

  const collection = new Collection({
    title: "My Blog",
    owners: [user.id],
  });

  await collection.save();

  logger.info("Seeding complete.");
};

seed().catch((err) => {
  console.trace(err);
  process.exit(1);
});
