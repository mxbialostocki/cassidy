import React from 'react'
import { QueryRenderer } from 'react-relay'
import { Loader } from 'semantic-ui-react'
import environment from '../environment'
import getRecordsQuery from '../graphql/queries/getRecords'

// component imports
import ReviewDisplayFrame from './ReviewDisplayFrame'

const Main = () => {
  return (
    <React.Fragment>
      <QueryRenderer
        environment={environment}
        query={getRecordsQuery}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            console.log({ error })
            return <div>`eerrr0r`</div>
          }
          if (!props) {
            return (
              <Loader active inline="centered" />
            )
          }
          return <ReviewDisplayFrame {...props} />
        }}
      />
    </React.Fragment>
  )
}

export default Main
