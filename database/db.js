const postgres = require("postgres");

exports.sql = postgres({
  host: "localhost",
  port: 5432,
  database: "mydatabase",
  username: "myuser",
  password: "mypassword",
});

