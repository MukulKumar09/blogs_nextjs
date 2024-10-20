const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.DB_CONNECTION);
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
