import { graphql } from 'react-relay'

const getRecordsQuery = graphql`
  query getRecordsQuery {
    records {
      _id
      title
      content
      dateCreated
      dateModified
    }
  }
`

export default getRecordsQuery
