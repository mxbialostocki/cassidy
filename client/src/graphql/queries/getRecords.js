import { graphql } from 'react-relay'

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
