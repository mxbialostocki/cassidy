const MongoClient = require('mongodb').MongoClient

let mongoDB

const dbUsername = process.env.MONGO_DATABASE_USERNAME
const dbPassword = process.env.MONGO_DATABASE_PASSWORD
// const dbCluster = process.env.MONGO_CLUSTER

const setupDB = callback => {
  if (!dbUsername || !dbPassword) {
    return callback('Mongo credentials undefined')
  }
  const uri = `mongodb://${dbUsername}:${dbPassword}@ds137857.mlab.com:37857/heroku_1sj638ch`

  MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
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
