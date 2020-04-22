import React, { useState } from 'react'
import { Button, Input, TextArea } from 'semantic-ui-react'

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
  const [newRecordReviewSlug, setNewRecordReviewSlug] = useState('')
  const [newRecordReviewBody, setNewRecordReviewBody] = useState('')
  const [newRecordReviewReviewerName, setNewRecordReviewReviewerName] = useState('')

  return (
    <React.Fragment>
      <div className="ui container" width="70%">

        <Input transparent size="massive" type="text" value={newRecordIsbn} onChange={(event) => { setNewRecordIsbn(event.target.value) }} placeholder="ISBN" />
        <Input transparent size="massive" type="text" value={newRecordTitle} onChange={(event) => { setNewRecordTitle(event.target.value) }} placeholder="Title: subtitle" />
        <Input transparent size="massive" type="text" value={newRecordAuthorFirstName} onChange={(event) => { setNewRecordAuthorFirstName(event.target.value) }} placeholder="Author: First Name" />
        <Input transparent size="massive" type="text" value={newRecordAuthorLastName} onChange={(event) => { setNewRecordAuthorLastName(event.target.value) }} placeholder="Author: Last Name" />
        <Input transparent size="massive" type="text" value={newRecordJacket} onChange={(event) => { setNewRecordJacket(event.target.value) }} placeholder="cover:"/>
        <Input transparent size="massive" type="text" value={newRecordImprint} onChange={(event) => { setNewRecordImprint(event.target.value) }} placeholder="What imprint was this published under?"/>
        <Input transparent size="massive" type="text" value={newRecordPublisher} onChange={(event) => { setNewRecordPublisher(event.target.value) }} placeholder="Who published this edition?"/>
        <Input transparent size="massive" type="text" value={newRecordPublicationYear} onChange={(event) => { setNewRecordPublicationYear(event.target.value) }} placeholder="what year was this edition published?"/>
        <Input transparent size="massive" type="text" value={newRecordReviewSlug} onChange={(event) => { setNewRecordReviewSlug(event.target.value) }} placeholder="a line to introduce your review..."/>
        <TextArea transparent size="massive" type="text" value={newRecordReviewBody} onChange={(event) => { setNewRecordReviewBody(event.target.value) }} placeholder="the body of your review :)"/>
        <Input transparent size="massive" type="text" value={newRecordReviewReviewerName} onChange={(event) => { setNewRecordReviewReviewerName(event.target.value) }} placeholder="what is YOUR name?"/>
        <Button size="massive" onClick={() => {
          if (newRecordIsbn && newRecordTitle && newRecordAuthorFirstName && newRecordAuthorLastName && newRecordJacket && newRecordImprint && newRecordPublisher && newRecordPublicationYear && newRecordReviewSlug && newRecordReviewBody && newRecordReviewReviewerName) {
            createRecordMutation(newRecordIsbn, newRecordTitle, newRecordAuthorFirstName, newRecordAuthorLastName, newRecordJacket, newRecordImprint, newRecordPublisher, newRecordPublicationYear, newRecordReviewSlug, newRecordReviewBody, newRecordReviewReviewerName)
            setNewRecordIsbn('')
            setNewRecordTitle('')
            setNewRecordAuthorFirstName('')
            setNewRecordAuthorLastName('')
            setNewRecordJacket('')
            setNewRecordImprint('')
            setNewRecordPublisher('')
            setNewRecordPublicationYear('')
            setNewRecordReviewSlug('')
            setNewRecordReviewBody('')
            setNewRecordReviewReviewerName('')
          }
        }}
        >
        create Record
        </Button>

      </div>
    </React.Fragment>
  )
}

export default CreateRecord
