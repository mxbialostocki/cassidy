import React, { useState } from 'react'
import { Divider, Header, Table, Button } from 'semantic-ui-react'

import deleteRecordMutation from '../graphql/mutations/deleteRecord'
import UpdateRecord from './UpdateRecord'

const Record = ({ record }) => {
  const { _id, isbn, title, authorFirst, authorLast, jacketPath, imprint, publisher, publicationYear, determination, reviewSlug, reviewBody, reviewReviewerName } = record
  const [ editing, setEditing ] = useState(false)
  const buttonLabel = editing ? 'cancel' : 'edit'

  const style = {
    key: {
      width: '15%'
    },
    val: {
      width: '85%'
    },
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
            <Table.Cell style={style.key}>isbn</Table.Cell>
            <Table.Cell style={style.val}>{isbn}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>title</Table.Cell>
            <Table.Cell style={style.val}>{title}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>author first name(s)</Table.Cell>
            <Table.Cell style={style.val}>{authorFirst}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>author last name</Table.Cell>
            <Table.Cell style={style.val}>{authorLast}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>jacket path</Table.Cell>
            <Table.Cell style={style.val}><img src={jacketPath} style={style.jacket}/></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>imprint</Table.Cell>
            <Table.Cell style={style.val}>{imprint}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>publisher</Table.Cell>
            <Table.Cell style={style.val}>{publisher}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>publication year</Table.Cell>
            <Table.Cell style={style.val}>{publicationYear}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>determination</Table.Cell>
            <Table.Cell style={style.val}>{determination}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>review slug</Table.Cell>
            <Table.Cell style={style.val}>{reviewSlug}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>review body</Table.Cell>
            <Table.Cell style={style.val}>{reviewBody}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={style.key}>reviewer name</Table.Cell>
            <Table.Cell style={style.val}>{reviewReviewerName}</Table.Cell>
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
