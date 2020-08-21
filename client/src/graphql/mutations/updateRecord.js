import { commitMutation, graphql } from 'react-relay'
import environment from '../../lib/environment'

const mutation = graphql`
  mutation updateRecordMutation($_id: ID, $isbn: String, $title: String, $author: Author, $jacketPath: String, $imprint: String, $publisher: String, $publicationYear: String, $contexts: Contexts, $reviewSlug: String, $reviewBody: String, $reviewReviewerName: String) {
    updateRecord(_id: $_id, isbn: $isbn title: $title, author: $author, jacketPath: $jacketPath, imprint: $imprint, publisher: $publisher, publicationYear: $publicationYear, contexts: $contexts, reviewSlug: $reviewSlug, reviewBody: $reviewBody, reviewReviewerName: $reviewReviewerName) {
      _id
      isbn
      title
      author
      jacketPath
      imprint
      publisher
      publicationYear
      contexts
      reviewSlug
      reviewBody
      reviewReviewerName
    }
  }
`

function updateRecordMutation (_id, isbn, title, author, jacketPath, imprint, publisher, publicationYear, contexts, reviewSlug, reviewBody, reviewReviewerName) {
  const variables = {
    _id,
    isbn,
    title,
    author,
    jacketPath,
    imprint,
    publisher,
    publicationYear,
    contexts,
    reviewSlug,
    reviewBody,
    reviewReviewerName
  }

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.')
    },
    updater: store => {
      const newUpdatedRecord = store.getRootField('updateRecord')
      const root = store.getRoot()
      const records = root.getLinkedRecords('records')
      const newRecords = records.filter(v => v.getValue('_id') !== _id)

      root.setLinkedRecords([...newRecords, newUpdatedRecord], 'records')
    },
    onError: err => console.error(err)
  })
}

export default updateRecordMutation
