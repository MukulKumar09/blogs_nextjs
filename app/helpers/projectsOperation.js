import { connect, close } from "./db";
export default async function projectsOperation(operation, data) {
  let db = await connect();
  let collection = db.collection("projects");

  let results = [];
  switch (operation) {
    case "get": {
      try {
        results = await collection.find(data).toArray();
      } catch (error) {
        results = error;
      }
      break;
      //   {
      //     $or: [
      //       { content: { $regex: keyword, $options: "i" } },
      //       { title: { $regex: keyword, $options: "i" } },
      //     ],
      //   }
      //   { isFeatured: true }
      //   { _id: ObjectId.createFromHexString(id) }
    }
    case "update": {
      try {
        results = await collection.updateOne(data[0], data[1]);
      } catch (error) {
        results = error;
      }
      //   {
      //     _id: ObjectId.createFromHexString(id),
      //   },
      //   { $set: document }
      break;
    }
    case "delete": {
      try {
        results = await collection.deleteOne(data);
      } catch (error) {
        results = error;
      }
      //   {
      //     _id: ObjectId.createFromHexString(id),
      //   }
      break;
    }
    case "new": {
      try {
        const res = await collection.insertOne(data);
        results = { id: res.insertedId.toString() };
      } catch (error) {
        results = error;
      }
      break;
    }
  }
  await close();
  return results;
}
