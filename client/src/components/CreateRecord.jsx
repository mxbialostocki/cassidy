import React, { useState } from 'react'
import { Button, Typography, Input, FormGroup, FormLabel, FormControl, FormControlLabel, Checkbox, Table, TableBody, TableRow, TableCell } from '@material-ui/core'

import createRecordMutation from '../graphql/mutations/createRecord'

import useStyles from '../lib/custom'

const CreateRecord = () => {
  const [newRecordIsbn, setNewRecordIsbn] = useState('')
  const [newRecordTitle, setNewRecordTitle] = useState('')
  const [newRecordAuthorFirstName, setNewRecordAuthorFirstName] = useState('')
  const [newRecordAuthorLastName, setNewRecordAuthorLastName] = useState('')
  const [newRecordJacket, setNewRecordJacket] = useState('')
  const [newRecordImprint, setNewRecordImprint] = useState('')
  const [newRecordPublisher, setNewRecordPublisher] = useState('')
  const [newRecordPublicationYear, setNewRecordPublicationYear] = useState('')
  const [newRecordDetermination, setNewRecordDetermination] = useState({
    novel: true,
    memoir: false,
    shorts: false
  })
  const [newRecordReviewSlug, setNewRecordReviewSlug] = useState('')
  const [newRecordReviewBody, setNewRecordReviewBody] = useState('')
  const [newRecordReviewReviewerName, setNewRecordReviewReviewerName] = useState('')

  const styles = useStyles()

  const handleDeterminationChange = (event) => {
    setNewRecordDetermination({ ...newRecordDetermination, [event.target.name]: event.target.checked })
  }
  const { novel, memoir, shorts } = newRecordDetermination


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
            <TableCell>author first name(s)</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} size="big" type="text" value={newRecordAuthorFirstName} onChange={(event) => { setNewRecordAuthorFirstName(event.target.value) }} placeholder="Author: First Name" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>author last name</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} size="big" type="text" value={newRecordAuthorLastName} onChange={(event) => { setNewRecordAuthorLastName(event.target.value) }} placeholder="Author: Last Name" />
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
            <TableCell>determination</TableCell>
            <TableCell>
              <FormControl component="fieldset">
                <FormLabel component="legend">This is primarily a:</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={novel} onChange={handleDeterminationChange} name="novel" />}
                    label="novel"
                  />
                  <FormControlLabel
                    control={<Checkbox onChange={handleDeterminationChange} name="memoir" />}
                    label="memoir"
                  />
                  <FormControlLabel
                    control={<Checkbox onChange={handleDeterminationChange} name="short-stories" />}
                    label="shorts"
                  />
                </FormGroup>
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
          setNewRecordDetermination({
            novel: true,
            memoir: false,
            shorts: false
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
