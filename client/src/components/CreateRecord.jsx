import React, { useState } from 'react'
import { Button, Input } from 'semantic-ui-react'

import createRecordMutation from '../graphql/mutations/createRecord'

const CreateRecord = () => {
  const [newRecordTitle, setNewRecordTitle] = useState('')
  const [newRecordContent, setNewRecordContent] = useState('')
  return (
    <React.Fragment>
      <Input transparent size="massive" type="text" value={newRecordTitle} onChange={(event) => { setNewRecordTitle(event.target.value) }} placeholder="write Record title here..." />
      <Input transparent size="massive" type="text" value={newRecordContent} onChange={(event) => { setNewRecordContent(event.target.value) }} placeholder="write Record content here..." />
      <Button size="massive" onClick={() => {
        if (newRecordTitle && newRecordContent) {
          createRecordMutation(newRecordTitle, newRecordContent)
          setNewRecordTitle('')
          setNewRecordContent('')
        }
      }}
      >
        create Record
      </Button>
    </React.Fragment>
  )
}

export default CreateRecord
