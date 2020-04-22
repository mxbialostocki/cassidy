/* eslint-disable no-unused-vars */
const { recordType } = require('../recordTypes')
const {
  GraphQLString,
  GraphQLID
} = require('graphql')
const RecordService = require('../../services/RecordService')

const CreateRecordMutation = {
  type: recordType,
  args: {
    title: { type: GraphQLString },
    content: { type: GraphQLString }
  },
  resolve: async (_, { title, content }) => {
    const recordService = new RecordService()
    const dateCreated = Date.now()
    const newRecord = await recordService.createRecord({ title, content, dateCreated })

    return newRecord
  }
}

const DeleteRecordMutation = {
  type: GraphQLID,
  args: {
    _id: { type: GraphQLID }
  },
  resolve: async (_, { _id }) => {
    const recordService = new RecordService()
    const res = await recordService.deleteRecord(_id)

    if (res.ok) {
      return _id
    }
  }
}

const UpdateRecordMutation = {
  type: recordType,
  args: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString }
  },
  resolve: async (_, { _id, title, content }) => {
    const recordService = new RecordService()
    const dateModified = Date.now()
    const updatedRecord = await recordService.updateRecord(_id, { title, content, dateModified })

    return updatedRecord
  }
}

module.exports = { CreateRecordMutation, UpdateRecordMutation, DeleteRecordMutation }
