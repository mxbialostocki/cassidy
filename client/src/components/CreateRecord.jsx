import React, { useState } from 'react'
import { Button, Typography, Input, FormGroup, FormLabel, FormControl, FormControlLabel, FormHelperText, Checkbox, Table, TableBody, TableRow, TableCell } from '@material-ui/core'

import createRecordMutation from '../graphql/mutations/createRecord'

import useStyles from '../lib/custom'

const CreateRecord = () => {
  const [newRecordIsbn, setNewRecordIsbn] = useState('')
  const [newRecordTitle, setNewRecordTitle] = useState('')
  const [newRecordAuthor, setNewRecordAuthor] = useState({
    firstName: '',
    lastName: ''
  })
  const [newRecordJacket, setNewRecordJacket] = useState('')
  const [newRecordImprint, setNewRecordImprint] = useState('')
  const [newRecordPublisher, setNewRecordPublisher] = useState('')
  const [newRecordPublicationYear, setNewRecordPublicationYear] = useState('')
  const [newRecordContexts, setNewRecordContexts] = useState({
    novel: false,
    memoir: false,
    shorts: false,
    aotearoa: false
  })
  const [newRecordReviewSlug, setNewRecordReviewSlug] = useState('')
  const [newRecordReviewBody, setNewRecordReviewBody] = useState('')
  const [newRecordReviewReviewerName, setNewRecordReviewReviewerName] = useState('')

  const styles = useStyles()

  const handleContextsChange = event => {
    setNewRecordContexts({ ...newRecordContexts, [event.target.name]: event.target.checked })
  }

  const handleAuthorChange = event => {
    setNewRecordAuthor({ ...newRecordAuthor, [event.target.name]: event.target.value })
    console.log({ newRecordAuthor })
  }

  const { novel, memoir, shorts, aotearoa } = newRecordContexts

  return (
    <React.Fragment>
      <Typography style={{ fontSize: '2em' }}>
          add title to database
      </Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell style={{ width: '15%' }}>isbn</TableCell>
            <TableCell style={{ width: '85%' }}>
              <Input disableUnderline className={styles.extend} size="big" type="text" value={newRecordIsbn} onChange={(event) => { setNewRecordIsbn(event.target.value) }} placeholder="ISBN" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>title</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} size="big" type="text" value={newRecordTitle} onChange={(event) => { setNewRecordTitle(event.target.value) }} placeholder="Title: subtitle" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>author</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} size="big" type="text" name={'firstName'} value={newRecordAuthor.firstName} onChange={handleAuthorChange} placeholder="Author: First Name" />
              <Input disableUnderline className={styles.extend} size="big" type="text" name={'lastName'} value={newRecordAuthor.lastName} onChange={handleAuthorChange} placeholder="Author: Last Name" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>jacket path</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} size="big" type="text" value={newRecordJacket} onChange={(event) => { setNewRecordJacket(event.target.value) }} placeholder="cover:"/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>imprint</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} size="big" type="text" value={newRecordImprint} onChange={(event) => { setNewRecordImprint(event.target.value) }} placeholder="What imprint was this published under?"/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>publisher</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} size="big" type="text" value={newRecordPublisher} onChange={(event) => { setNewRecordPublisher(event.target.value) }} placeholder="Who published this edition?"/></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>publication year</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} size="big" type="text" value={newRecordPublicationYear} onChange={(event) => { setNewRecordPublicationYear(event.target.value) }} placeholder="what year was this edition published?"/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>contexts</TableCell>
            <TableCell>
              <FormControl component="fieldset">
                <FormLabel component="legend">This is primarily a:</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={novel} onChange={handleContextsChange} name="novel" />}
                    label="novel"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={memoir} onChange={handleContextsChange} name="memoir" />}
                    label="memoir"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={shorts} onChange={handleContextsChange} name="shorts" />}
                    label="shorts"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={aotearoa} onChange={handleContextsChange} name="aotearoa" />}
                    label="aotearoa"
                  />
                </FormGroup>
                <FormHelperText>You can select multiple options</FormHelperText>
              </FormControl>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>review slug</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} size="big" type="text" value={newRecordReviewSlug} onChange={(event) => { setNewRecordReviewSlug(event.target.value) }} placeholder="a line to introduce your review..."/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>review body</TableCell>
            <TableCell>
              <Input disableUnderline multiline className={styles.extend} size="big" type="text" value={newRecordReviewBody} onChange={(event) => { setNewRecordReviewBody(event.target.value) }} placeholder="the body of your review :)"/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>reviewer name</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} size="big" type="text" value={newRecordReviewReviewerName} onChange={(event) => { setNewRecordReviewReviewerName(event.target.value) }} placeholder="what is YOUR name?"/>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button variant='outlined' style={{ fontSize: '2em', margin: '1em 0', width: '100%' }} size="large" onClick={() => {
        if (newRecordIsbn && newRecordTitle && newRecordAuthor.firstName && newRecordAuthor.lastName && newRecordJacket && newRecordImprint && newRecordPublisher && newRecordPublicationYear && newRecordReviewSlug && newRecordReviewBody && newRecordReviewReviewerName) {
          createRecordMutation(newRecordIsbn, newRecordTitle, newRecordAuthor, newRecordJacket, newRecordImprint, newRecordPublisher, newRecordPublicationYear, newRecordContexts, newRecordReviewSlug, newRecordReviewBody, newRecordReviewReviewerName)
          setNewRecordIsbn('')
          setNewRecordTitle('')
          setNewRecordAuthor({
            firstName: '',
            lastName: ''
          })
          setNewRecordJacket('')
          setNewRecordImprint('')
          setNewRecordPublisher('')
          setNewRecordPublicationYear('')
          setNewRecordContexts({
            novel: false,
            memoir: false,
            shorts: false,
            aotearoa: false
          })
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
