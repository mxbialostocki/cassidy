import { commitMutation, graphql } from 'react-relay'
import environment from '../../environment'

const mutation = graphql`
  mutation createRecordMutation($title: String, $content: String) {
    createRecord(title: $title, content: $content) {
      _id
      title
      content
      dateCreated
    }
  }
`

function createRecordMutation (title, content) {
  const variables = {
    title,
    content
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
