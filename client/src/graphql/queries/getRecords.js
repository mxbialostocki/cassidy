import { graphql } from 'react-relay'

const getRecordsQuery = graphql`
  query getRecordsQuery {
    records {
      _id
      isbn
      title
      authorFirst
      authorLast
      jacketPath
      imprint
      publisher
      publicationYear
      determination
      reviewSlug
      reviewBody
      reviewReviewerName
    }
  }
`

export default getRecordsQuery
