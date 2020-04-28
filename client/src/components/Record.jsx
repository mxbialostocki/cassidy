import React, { useState } from 'react'
import { Divider, Header, Table, Button } from 'semantic-ui-react'

import deleteRecordMutation from '../graphql/mutations/deleteRecord'
import UpdateRecord from './UpdateRecord'

const Record = ({ record }) => {
  const { _id, isbn, title, authorFirst, authorLast, jacketPath, imprint, publisher, publicationYear, determination, reviewSlug, reviewBody, reviewReviewerName } = record
  const [ editing, setEditing ] = useState(false)
  const buttonLabel = editing ? 'cancel' : 'edit'

  const style = {
    jacket: {
      width: '300px'
    }
  }

  return (
    <React.Fragment>
      <Divider horizontal>
        <Header as='h4'>
          {title} by {authorFirst} {authorLast}
        </Header>
      </Divider>
      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell>isbn</Table.Cell>
            <Table.Cell>{isbn}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>title</Table.Cell>
            <Table.Cell>{title}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>author first name(s)</Table.Cell>
            <Table.Cell>{authorFirst}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>author last name</Table.Cell>
            <Table.Cell>{authorLast}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>jacket path</Table.Cell>
            <Table.Cell><img src={jacketPath} style={style.jacket}/></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>imprint</Table.Cell>
            <Table.Cell>{imprint}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>publisher</Table.Cell>
            <Table.Cell>{publisher}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>publication year</Table.Cell>
            <Table.Cell>{publicationYear}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>determination</Table.Cell>
            <Table.Cell>{determination}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>review slug</Table.Cell>
            <Table.Cell>{reviewSlug}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>review body</Table.Cell>
            <Table.Cell>{reviewBody}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>reviewer name</Table.Cell>
            <Table.Cell>{reviewReviewerName}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Button onClick={() => {
        deleteRecordMutation(_id)
      }}
      >
        Delete
      </Button>
      <Button onClick={() => {
        setEditing(!editing)
      }}>
        {buttonLabel}
      </Button>
      {editing && <UpdateRecord record={record} setEditing={setEditing}/>}
    </React.Fragment>
  )
}

export default Record
