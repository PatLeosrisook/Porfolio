// lib/mongodb.js

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Your MongoDB connection string
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
console.log(uri)
let client;
let clientPromise;
const createIndexes = async (client) => {
  const db = client.db();

  // Add index creation here
  await db.collection('user_account').createIndex({ Email: 1 }, { unique: true });

  console.log('Indexes ensured');
};


if (!process.env.MONGODB_URI) {
  
  throw new Error('Please add your Mongo URI to .env.local' + " " + process.env.MONGODB_URI);
}


console.log("Connectingg......")
if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so the database connection
  // is preserved between hot reloads.
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    console.log("Connectingg......")
    global._mongoClientPromise = client.connect().then(async (client) => {
      // Ensure indexes are created after connecting
      await createIndexes(client);
      return client;
    });;
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
