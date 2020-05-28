const { recordType } = require('../recordTypes')
const { GraphQLString } = require('graphql')
const RecordService = require('../../services/RecordService')

const RecordQuery = {
  type: recordType,
  args: {
    isbn: { type: GraphQLString }
  },
  resolve: async (_, { isbn }) => {
    const recordService = new RecordService()
    const record = await recordService.getRecordByISBN(isbn)

    return record
  }
}

module.exports = { RecordQuery }
