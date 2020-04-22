const { recordType } = require('../recordTypes')
const { GraphQLList } = require('graphql')
const RecordService = require('../../services/RecordService')

const RecordsQuery = {
  type: GraphQLList(recordType),
  args: {},
  resolve: async () => {
    const recordService = new RecordService()
    const records = await recordService.getAllRecords()

    return records
  }
}

module.exports = { RecordsQuery }
