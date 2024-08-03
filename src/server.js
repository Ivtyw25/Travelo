import { MongoClient } from 'mongodb';

const url = 'mongodb://127.0.0.1:27017'; // Replace with your MongoDB connection string
const dbName = 'hello'; // Replace with your database name

let client;
let db;

export async function connectToDatabase() {
  if (db) return { db, client };

  client = new MongoClient(url);
  await client.connect();
  db = client.db(dbName);
  return { db, client };
}