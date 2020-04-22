import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

import deleteRecordMutation from '../graphql/mutations/deleteRecord'
import UpdateRecord from './UpdateRecord'

const Record = ({ record }) => {
  const { _id, isbn, title, authorFirst, authorLast, jacketPath, imprint, publisher, publicationYear, determination, reviewSlug, reviewBody, reviewReviewerName } = record
  const [ editing, setEditing ] = useState(false)
  const buttonLabel = editing ? 'cancel' : 'edit'

  return (
    <React.Fragment>
      <div className="ui container">
        <img src={jacketPath} />
        <p>
          {title}
        </p>
        <p>
          by {authorFirst} {authorLast}
        </p>
      </div>
      <div className="ui text container">
        <p>
          isbn {isbn}
        </p>
        <p>
          {imprint}, {publisher}, {publicationYear}
        </p>
        <p>
          {determination}
        </p>
      </div>
      <div className="ui text container">
        <p>
          {reviewSlug}
        </p>
        <p>
          review by: {reviewReviewerName}
        </p>
        <p>
          {reviewBody}
        </p>
      </div>

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
