/* eslint-disable no-unused-vars */
const { recordType, contextsType } = require('../recordTypes')
const {
  GraphQLString,
  GraphQLID
} = require('graphql')
const RecordService = require('../../services/RecordService')

const CreateRecordMutation = {
  type: recordType,
  args: {
    isbn: { type: GraphQLString },
    title: { type: GraphQLString },
    authorFirst: { type: GraphQLString },
    authorLast: { type: GraphQLString },
    jacketPath: { type: GraphQLString },
    imprint: { type: GraphQLString },
    publisher: { type: GraphQLString },
    publicationYear: { type: GraphQLString },
    contexts: { type: contextsType },
    reviewSlug: { type: GraphQLString },
    reviewBody: { type: GraphQLString },
    reviewReviewerName: { type: GraphQLString },
    dateCreated: { type: GraphQLString },
    dateModified: { type: GraphQLString }
  },
  resolve: async (_, { isbn, title, authorFirst, authorLast, jacketPath, imprint, publisher, publicationYear, contexts, reviewSlug, reviewBody, reviewReviewerName }) => {
    const recordService = new RecordService()
    const dateCreated = Date.now()
    const newRecord = await recordService.createRecord({ isbn, title, authorFirst, authorLast, jacketPath, imprint, publisher, publicationYear, contexts, reviewSlug, reviewBody, reviewReviewerName, dateCreated })

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
    isbn: { type: GraphQLString },
    title: { type: GraphQLString },
    authorFirst: { type: GraphQLString },
    authorLast: { type: GraphQLString },
    jacketPath: { type: GraphQLString },
    imprint: { type: GraphQLString },
    publisher: { type: GraphQLString },
    publicationYear: { type: GraphQLString },
    contexts: { type: contextsType },
    reviewSlug: { type: GraphQLString },
    reviewBody: { type: GraphQLString },
    reviewReviewerName: { type: GraphQLString }
  },
  resolve: async (_, { _id, isbn, title, authorFirst, authorLast, jacketPath, imprint, publisher, publicationYear, contexts, reviewSlug, reviewBody, reviewReviewerName }) => {
    const recordService = new RecordService()
    const dateModified = Date.now()
    const updatedRecord = await recordService.updateRecord(_id, { isbn, title, authorFirst, authorLast, jacketPath, imprint, publisher, publicationYear, contexts, reviewSlug, reviewBody, reviewReviewerName, dateModified })

    return updatedRecord
  }
}

module.exports = { CreateRecordMutation, UpdateRecordMutation, DeleteRecordMutation }
