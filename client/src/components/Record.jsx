import React, { useState } from 'react'
import { QueryRenderer } from 'react-relay'
import environment from '../lib/environment'
import getRecordByISBNQuery from '../graphql/queries/getRecordByISBN'
// import deleteRecordMutation from '../graphql/mutations/deleteRecord'
import { Button, Typography, Grid, CircularProgress } from '@material-ui/core'

import UpdateRecord from './UpdateRecord'

const Record = ({ record }) => {
  const { _id, isbn, title, author } = record
  const { firstName, lastName } = author
  const [ editing, setEditing ] = useState(false)
  const buttonLabel = editing ? 'cancel' : 'edit'

  return (
    <React.Fragment>
      <Typography style={{ fontSize: '2em' }}>{title} by {firstName} {lastName}</Typography>
      <Button variant='outlined' style={{ fontSize: '2em', margin: '1em 0', width: '100%' }} onClick={() => {
        setEditing(!editing)
      }}>
        {buttonLabel}
      </Button>
      {/* <Button variant='outlined' style={{ fontSize: '2em', margin: '1em 0', width: '100%' }} onClick={() => {
        deleteRecordMutation(_id)
      }}>
        delete this one?
      </Button> */}
      <QueryRenderer
        environment={environment}
        query={getRecordByISBNQuery}
        variables={{ isbn: isbn }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>
          }
          if (!props) {
            return (
              <Grid container spacing={2} direction="column" justify="center" alignItems="center">
                <CircularProgress size={'9rem'} style={{ color: '#000000' }}/>
              </Grid>
            )
          } else if (props) {
            const { record } = props
            return (
              editing && <UpdateRecord record={record} setEditing={setEditing}/>
            )
          }
        }
        }
      />

    </React.Fragment>
  )
}

export default Record
