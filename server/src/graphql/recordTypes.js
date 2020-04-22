const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')

const recordType = new GraphQLObjectType({
  name: 'Record',
  fields: {
    _id: { type: GraphQLID },
    isbn: { type: GraphQLString },
    title: { type: GraphQLString },
    authorFirst: { type: GraphQLString },
    authorLast: { type: GraphQLString },
    jacketPath: { type: GraphQLString },
    imprint: { type: GraphQLString },
    publisher: { type: GraphQLString },
    publicationYear: { type: GraphQLString },
    determination: { type: GraphQLString },
    reviewSlug: { type: GraphQLString },
    reviewBody: { type: GraphQLString },
    reviewReviewerName: { type: GraphQLString },
    dateCreated: { type: GraphQLString },
    dateModified: { type: GraphQLString }
  }
})

module.exports = { recordType }
