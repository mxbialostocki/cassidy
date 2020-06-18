import { graphql } from 'react-relay'

// this query is limited to five necessary fields to create reference points for the data - eg once you have the ISBNS in the app, then you can query them individually with a more verbose data set.

const getRecordsQuery = graphql`
  query getRecordsQuery {
    records {
      _id
      isbn
      title
      authorFirst
      authorLast
    }
  }
`

export default getRecordsQuery
