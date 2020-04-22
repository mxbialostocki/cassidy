import { commitMutation, graphql } from 'react-relay'
import environment from '../../environment'

const mutation = graphql`
  mutation deleteRecordMutation($_id: ID) {
    deleteRecord(_id: $_id)
  }
`

function deleteRecordMutation (_id) {
  const variables = {
    _id
  }

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.')
    },
    updater: store => {
      const root = store.getRoot()
      const records = root.getLinkedRecords('records')
      const newRecords = records.filter(v => v.getValue('_id') !== _id)

      root.setLinkedRecords(newRecords, 'records')
    },

    onError: err => console.error(err)
  })
}

export default deleteRecordMutation
