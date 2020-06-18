require('dotenv').config({ path: 'server/.env' })

const express = require('express')
const cors = require('cors')
const app = express()
const graphqlHTTP = require('express-graphql')
const { setupDB } = require('./config/databaseConnection')
const printSchemaFromBuild = require('./config/printSchema')

const path = require('path')
const router = express.Router()

const schema = require('./graphql/schema')
printSchemaFromBuild(schema)

// Call in database connection
setupDB(value => console.log(value))

app.use(express.json({ limit: '5mb' }))
app.use(express.static('client/public'))
app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP(
    {
      schema,
      graphiql: true,
      pretty: true
    }
  )
)

app.use('/', router.get('*', (req, res) => {
  res.sendFile(path.resolve('client/public', 'index.html'))
}))

app.listen(process.env.PORT || 4000, () => {
  console.log('Server is listening.')
})
