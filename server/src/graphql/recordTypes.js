const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')

const recordType = new GraphQLObjectType({
  name: 'Record',
  fields: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    dateCreated: { type: GraphQLString },
    dateModified: { type: GraphQLString }
  }
})

module.exports = { recordType }
