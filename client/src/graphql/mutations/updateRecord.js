import { commitMutation, graphql } from 'react-relay'
import environment from '../../environment'

const mutation = graphql`
  mutation updateRecordMutation($_id: ID, $title: String, $content: String) {
    updateRecord(_id: $_id, title: $title, content: $content) {
      _id
      title
      content
      dateCreated
      dateModified
    }
  }
`

function updateRecordMutation (_id, title, content) {
  const variables = {
    _id,
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
