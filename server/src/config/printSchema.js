const { printSchema } = require('graphql')
const fs = require('fs')

const printSchemaFromBuild = schema => {
  fs.writeFile('client/data/schema.graphql', printSchema(schema), error => {
    if (error) {
      return console.log(error)
    }
    console.log('GraphQL schema generated!')
  })
}

module.exports = printSchemaFromBuild
