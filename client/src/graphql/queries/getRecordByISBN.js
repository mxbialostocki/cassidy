import { graphql } from 'react-relay'

const getRecordByISBNQuery = graphql`
  query getRecordByISBNQuery($isbn: String) {
    record(isbn: $isbn) {
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

export default getRecordByISBNQuery
