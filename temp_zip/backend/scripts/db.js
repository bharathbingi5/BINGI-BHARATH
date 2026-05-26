import { MongoClient } from "mongodb";

const url = "mongodb+srv://bharathbingi6_db_user:12345@cluster0.for27ij.mongodb.net/bookingDB";

const client = new MongoClient(url);

async function connectDB() {
  try {
    await client.connect();
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error(error);
  }
}

connectDB();

export default client;