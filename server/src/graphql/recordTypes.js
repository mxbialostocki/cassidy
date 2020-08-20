const { GraphQLObjectType, GraphQLNonNull, GraphQLScalarType, GraphQLID, GraphQLString, GraphQLBoolean } = require('graphql')

const contextsType = new GraphQLScalarType({
  name: 'Contexts',
  fields: {
    novel: { type: GraphQLBoolean },
    memoir: { type: GraphQLBoolean },
    shorts: { type: GraphQLBoolean },
    aotearoa: { type: GraphQLBoolean }
  }
})

const recordType = new GraphQLObjectType({
  name: 'Record',
  fields: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
    isbn: { type: GraphQLString },
    title: { type: GraphQLString },
    authorFirst: { type: GraphQLString },
    authorLast: { type: GraphQLString },
    jacketPath: { type: GraphQLString },
    imprint: { type: GraphQLString },
    publisher: { type: GraphQLString },
    publicationYear: { type: GraphQLString },
    contexts: {
      type: contextsType,
      args: {
        novel: { type: GraphQLBoolean },
        memoir: { type: GraphQLBoolean },
        shorts: { type: GraphQLBoolean },
        aotearoa: { type: GraphQLBoolean }
      }
    },
    reviewSlug: { type: GraphQLString },
    reviewBody: { type: GraphQLString },
    reviewReviewerName: { type: GraphQLString },
    dateCreated: { type: GraphQLString },
    dateModified: { type: GraphQLString }
  }
})

module.exports = { recordType, contextsType }
