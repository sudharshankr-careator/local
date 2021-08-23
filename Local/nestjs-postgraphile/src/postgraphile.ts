import postgraphile from "postgraphile";
const { DATABASE, PG_USER, PASSWORD, HOST, PG_PORT } = process.env;

export const postgraph = postgraphile(
  "postgres://postgres:root@123@localhost:5432/student",
  "public",
  {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    enableCors: true,
  },
);
