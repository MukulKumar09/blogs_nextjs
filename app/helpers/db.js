const { MongoClient } = require("mongodb");
const url = process.env.DB_CONNECTION;
const client = new MongoClient(url);
const dbName = "NextJSBlog";
export async function connect() {
  try {
    await client.connect();
    console.log("DB connected.");
  } catch (error) {
    console.error(error);
  }
  return client.db(dbName);
}
export async function close() {
  client.close();
}
