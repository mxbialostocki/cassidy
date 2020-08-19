import { commitMutation, graphql } from 'react-relay'
import environment from '../../lib/environment'

const mutation = graphql`
  mutation createRecordMutation($isbn: String, $title: String, $authorFirst: String, $authorLast: String, $jacketPath: String, $imprint: String, $publisher: String, $publicationYear: String, $contexts: Contexts, $reviewSlug: String, $reviewBody: String, $reviewReviewerName: String) {
    createRecord(isbn: $isbn title: $title, authorFirst: $authorFirst, authorLast: $authorLast, jacketPath: $jacketPath, imprint: $imprint, publisher: $publisher, publicationYear: $publicationYear, contexts: $contexts, reviewSlug: $reviewSlug, reviewBody: $reviewBody, reviewReviewerName: $reviewReviewerName) {
      _id
      isbn
      title
      authorFirst
      authorLast
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

function createRecordMutation (isbn, title, authorFirst, authorLast, jacketPath, imprint, publisher, publicationYear, contexts, reviewSlug, reviewBody, reviewReviewerName) {
  const variables = {
    isbn,
    title,
    authorFirst,
    authorLast,
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
      const payload = store.getRootField('createRecord')
      const root = store.getRoot()
      const records = root.getLinkedRecords('records')

      const newRecords = [...records, payload]
      root.setLinkedRecords(newRecords, 'records')
    },
    onError: err => console.error(err)
  })
}

export default createRecordMutation
