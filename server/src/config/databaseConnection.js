const MongoClient = require('mongodb').MongoClient

let mongoDB

const MONGO_DATABASE_USERNAME = process.env.MONGO_DATABASE_USERNAME
const MONGO_DATABASE_PASSWORD = process.env.MONGO_DATABASE_PASSWORD
const MONGO_DATABASE_CLUSTER = process.env.MONGO_DATABASE_CLUSTER

const setupDB = callback => {
  if (!MONGO_DATABASE_USERNAME || !MONGO_DATABASE_PASSWORD) {
    return callback('Mongo credentials undefined')
  }
  const uri = `mongodb+srv://${MONGO_DATABASE_USERNAME}:${MONGO_DATABASE_PASSWORD}@${MONGO_DATABASE_CLUSTER}.mongodb.net/test?retryWrites=true&w=majority`

  MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    console.log('%%%%consider%%%% THIS ERROR:', err)
    mongoDB = client.db('cassidy')
    if (err) {
      return callback(err)
    } else {
      return callback('Database is connected')
    }
  })
}

const getDB = () => {
  return mongoDB
}

module.exports = { setupDB, getDB }
