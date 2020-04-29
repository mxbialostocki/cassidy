import React, { useState } from 'react'
import { Button, Divider, Header, Table, Input, TextArea } from 'semantic-ui-react'

import createRecordMutation from '../graphql/mutations/createRecord'

const CreateRecord = () => {
  const [newRecordIsbn, setNewRecordIsbn] = useState('')
  const [newRecordTitle, setNewRecordTitle] = useState('')
  const [newRecordAuthorFirstName, setNewRecordAuthorFirstName] = useState('')
  const [newRecordAuthorLastName, setNewRecordAuthorLastName] = useState('')
  const [newRecordJacket, setNewRecordJacket] = useState('')
  const [newRecordImprint, setNewRecordImprint] = useState('')
  const [newRecordPublisher, setNewRecordPublisher] = useState('')
  const [newRecordPublicationYear, setNewRecordPublicationYear] = useState('')
  const [newRecordDetermination, setNewRecordDetermination] = useState('')
  const [newRecordReviewSlug, setNewRecordReviewSlug] = useState('')
  const [newRecordReviewBody, setNewRecordReviewBody] = useState('')
  const [newRecordReviewReviewerName, setNewRecordReviewReviewerName] = useState('')

  const style = {
    extend: {
      width: '100%'
    },
    key: {
      width: '15%'
    },
    val: {
      width: '85%'
    }
  }
  return (
    <React.Fragment>
      <Divider horizontal>
        <Header as='h4'>
          add title to database
        </Header>
      </Divider>
      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell style={style.key}>isbn</Table.Cell>
            <Table.Cell style={style.val}>
              <Input transparent style={style.extend} size="big" type="text" value={newRecordIsbn} onChange={(event) => { setNewRecordIsbn(event.target.value) }} placeholder="ISBN" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>title</Table.Cell>
            <Table.Cell>
              <Input transparent style={style.extend} size="big" type="text" value={newRecordTitle} onChange={(event) => { setNewRecordTitle(event.target.value) }} placeholder="Title: subtitle" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>author first name(s)</Table.Cell>
            <Table.Cell>
              <Input transparent style={style.extend} size="big" type="text" value={newRecordAuthorFirstName} onChange={(event) => { setNewRecordAuthorFirstName(event.target.value) }} placeholder="Author: First Name" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>author last name</Table.Cell>
            <Table.Cell>
              <Input transparent style={style.extend} size="big" type="text" value={newRecordAuthorLastName} onChange={(event) => { setNewRecordAuthorLastName(event.target.value) }} placeholder="Author: Last Name" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>jacket path</Table.Cell>
            <Table.Cell>
              <Input transparent style={style.extend} size="big" type="text" value={newRecordJacket} onChange={(event) => { setNewRecordJacket(event.target.value) }} placeholder="cover:"/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>imprint</Table.Cell>
            <Table.Cell>
              <Input transparent style={style.extend} size="big" type="text" value={newRecordImprint} onChange={(event) => { setNewRecordImprint(event.target.value) }} placeholder="What imprint was this published under?"/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>publisher</Table.Cell>
            <Table.Cell>
              <Input transparent style={style.extend} size="big" type="text" value={newRecordPublisher} onChange={(event) => { setNewRecordPublisher(event.target.value) }} placeholder="Who published this edition?"/></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>publication year</Table.Cell>
            <Table.Cell>
              <Input transparent style={style.extend} size="big" type="text" value={newRecordPublicationYear} onChange={(event) => { setNewRecordPublicationYear(event.target.value) }} placeholder="what year was this edition published?"/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>determination</Table.Cell>
            <Table.Cell>
              <Input transparent style={style.extend} size="big" type="text" value={newRecordDetermination} onChange={(event) => { setNewRecordDetermination(event.target.value) }} placeholder="what g3Nree/.  is this eg. novel? poetry? shorts?"/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>review slug</Table.Cell>
            <Table.Cell>
              <Input transparent style={style.extend} size="big" type="text" value={newRecordReviewSlug} onChange={(event) => { setNewRecordReviewSlug(event.target.value) }} placeholder="a line to introduce your review..."/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>review body</Table.Cell>
            <Table.Cell>
              <TextArea style={style.extend} size="big" type="text" value={newRecordReviewBody} onChange={(event) => { setNewRecordReviewBody(event.target.value) }} placeholder="the body of your review :)"/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>reviewer name</Table.Cell>
            <Table.Cell>
              <Input transparent style={style.extend} size="big" type="text" value={newRecordReviewReviewerName} onChange={(event) => { setNewRecordReviewReviewerName(event.target.value) }} placeholder="what is YOUR name?"/>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Button className="centered" size="big" onClick={() => {
        if (newRecordIsbn && newRecordTitle && newRecordAuthorFirstName && newRecordAuthorLastName && newRecordJacket && newRecordImprint && newRecordPublisher && newRecordPublicationYear && newRecordReviewSlug && newRecordReviewBody && newRecordReviewReviewerName) {
          createRecordMutation(newRecordIsbn, newRecordTitle, newRecordAuthorFirstName, newRecordAuthorLastName, newRecordJacket, newRecordImprint, newRecordPublisher, newRecordPublicationYear, newRecordDetermination, newRecordReviewSlug, newRecordReviewBody, newRecordReviewReviewerName)
          setNewRecordIsbn('')
          setNewRecordTitle('')
          setNewRecordAuthorFirstName('')
          setNewRecordAuthorLastName('')
          setNewRecordJacket('')
          setNewRecordImprint('')
          setNewRecordPublisher('')
          setNewRecordPublicationYear('')
          setNewRecordDetermination('')
          setNewRecordReviewSlug('')
          setNewRecordReviewBody('')
          setNewRecordReviewReviewerName('')
        }
      }}
      >
        create Record
      </Button>
    </React.Fragment>
  )
}

export default CreateRecord
