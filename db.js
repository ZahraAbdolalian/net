// db.js
const { MongoClient } = require('mongodb');

// Replace 'your-mongodb-uri' with your actual MongoDB connection string
const uri = 'mongodb+srv://abdolalianzahra:27zL4IWcwCHWW8Mo@cluster0.x5temxa.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db('p1'); // Replace 'your-database-name' with your actual database name
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

function closeMongoDBConnection() {
  client.close();
  console.log('MongoDB connection closed');
}

module.exports = { connectToMongoDB, closeMongoDBConnection };