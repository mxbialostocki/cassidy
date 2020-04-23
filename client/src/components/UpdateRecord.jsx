import React, { useState } from 'react'
import { Button, Input, Form, TextArea } from 'semantic-ui-react'

import updateRecord from '../graphql/mutations/updateRecord'

const UpdateRecord = ({ record, setEditing }) => {
  const { _id, isbn, title, authorFirst, authorLast, jacketPath, imprint, publisher, publicationYear, determination, reviewSlug, reviewBody, reviewReviewerName } = record

  const [ isbnInputState, setIsbnInputState ] = useState(isbn)
  const [ titleInputState, setTitleInputState ] = useState(title)
  const [ authorFirstInputState, setAuthorFirstInputState ] = useState(authorFirst)
  const [ authorLastInputState, setAuthorLastInputState ] = useState(authorLast)
  const [ jacketPathInputState, setJacketPathInputState ] = useState(jacketPath)
  const [ imprintInputState, setImprintInputState ] = useState(imprint)
  const [ publisherInputState, setPublisherInputState ] = useState(publisher)
  const [ publicationYearInputState, setPublicationYearInputState ] = useState(publicationYear)
  const [ determinationInputState, setDeterminationInputState ] = useState(determination)
  const [ reviewSlugInputState, setReviewSlugInputState ] = useState(reviewSlug)
  const [ reviewBodyInputState, setReviewBodyInputState ] = useState(reviewBody)
  const [ reviewReviewerNameInputState, setReviewReviewerNameInputState ] = useState(reviewReviewerName)

  return (
    <React.Fragment>
      <Form>
        <Input transparent value={isbnInputState} onChange={event => setIsbnInputState(event.target.value)} />
        <Input transparent value={titleInputState} onChange={event => setTitleInputState(event.target.value)} />
        <Input transparent value={authorFirstInputState} onChange={event => setAuthorFirstInputState(event.target.value)} />
        <Input transparent value={authorLastInputState} onChange={event => setAuthorLastInputState(event.target.value)} />
        <Input transparent value={jacketPathInputState} onChange={event => setJacketPathInputState(event.target.value)} />
        <Input transparent value={imprintInputState} onChange={event => setImprintInputState(event.target.value)} />
        <Input transparent value={publisherInputState} onChange={event => setPublisherInputState(event.target.value)} />
        <Input transparent value={publicationYearInputState} onChange={event => setPublicationYearInputState(event.target.value)} />
        <Input transparent value={determinationInputState} onChange={event => setDeterminationInputState(event.target.value)} />
        <Input transparent value={reviewSlugInputState} onChange={event => setReviewSlugInputState(event.target.value)} />
        <Input transparent value={reviewReviewerNameInputState} onChange={event => setReviewReviewerNameInputState(event.target.value)} />
        <TextArea transparent value={reviewBodyInputState} onChange={event => setReviewBodyInputState(event.target.value)} />
        <Button onClick={() => {
          updateRecord(_id, isbnInputState, titleInputState, authorFirstInputState, authorLastInputState, jacketPathInputState, imprintInputState, publisherInputState, publicationYearInputState, determinationInputState, reviewSlugInputState, reviewBodyInputState, reviewReviewerNameInputState)
          setEditing(false)
        }}>
          Update
        </Button>
      </Form>
    </React.Fragment>
  )
}

export default UpdateRecord
