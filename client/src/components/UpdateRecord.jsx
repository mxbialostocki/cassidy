import React, { useState } from 'react'
import { Button, Input, Form, TextArea } from 'semantic-ui-react'

import updateRecord from '../graphql/mutations/updateRecord'

const UpdateRecord = ({ record, setEditing }) => {
  const { _id, title, content } = record

  const [ titleInputState, setTitleInputState ] = useState(title)
  const [ contentInputState, setContentInputState ] = useState(content)

  return (
    <React.Fragment>
      <Form>
        <Input transparent value={titleInputState} onChange={event => setTitleInputState(event.target.value)} />
        <TextArea transparent value={contentInputState} onChange={event => setContentInputState(event.target.value)} />
        <Button onClick={() => {
          updateRecord(_id, titleInputState, contentInputState)
          setEditing(false)
        }}>
          Update
        </Button>
      </Form>
    </React.Fragment>
  )
}

export default UpdateRecord
