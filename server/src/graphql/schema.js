const { GraphQLSchema, GraphQLObjectType } = require('graphql')
const { RecordsQuery } = require('./query/RecordsQuery')
const {
  CreateRecordMutation,
  UpdateRecordMutation,
  DeleteRecordMutation
} = require('./mutation/RecordsMutation')

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    records: RecordsQuery
  })
})

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createRecord: CreateRecordMutation,
    deleteRecord: DeleteRecordMutation,
    updateRecord: UpdateRecordMutation
  })
})

const schema = new GraphQLSchema({ query: QueryType, mutation: MutationType })

module.exports = schema
