import React, { useState } from 'react'
import { Button, Input, Table, TableBody, TableRow, TableCell, Typography, FormControl, FormControlLabel, FormLabel, FormGroup, FormHelperText, Checkbox } from '@material-ui/core'

import updateRecord from '../graphql/mutations/updateRecord'

import useStyles from '../lib/custom'

const UpdateRecord = ({ record, setEditing }) => {
  const { _id, isbn, title, author, jacketPath, imprint, publisher, publicationYear, contexts, reviewSlug, reviewBody, reviewReviewerName } = record
  const { firstName, lastName } = author
  const { novel, memoir, shorts, aotearoa } = contexts

  const [ isbnInputState, setIsbnInputState ] = useState(isbn)
  const [ titleInputState, setTitleInputState ] = useState(title)
  const [ authorInputState, setAuthorInputState ] = useState({
    firstName: firstName,
    lastName: lastName
  })
  const [ jacketPathInputState, setJacketPathInputState ] = useState(jacketPath)
  const [ imprintInputState, setImprintInputState ] = useState(imprint)
  const [ publisherInputState, setPublisherInputState ] = useState(publisher)
  const [ publicationYearInputState, setPublicationYearInputState ] = useState(publicationYear)
  const [ contextsInputState, setContextsInputState ] = useState({
    novel: novel,
    memoir: memoir,
    shorts: shorts,
    aotearoa: aotearoa
  })
  const [ reviewSlugInputState, setReviewSlugInputState ] = useState(reviewSlug)
  const [ reviewBodyInputState, setReviewBodyInputState ] = useState(reviewBody)
  const [ reviewReviewerNameInputState, setReviewReviewerNameInputState ] = useState(reviewReviewerName)

  const styles = useStyles()

  const handleContextsChange = event => {
    setContextsInputState({ ...contextsInputState, [event.target.name]: event.target.checked })
  }

  const handleAuthorChange = event => {
    setAuthorInputState({ ...authorInputState, [event.target.name]: event.target.value })
    console.log({ authorInputState })
  }

  return (
    <React.Fragment>

      <Typography style={{ fontSize: '2em' }}>{title} by {author.firstName} {author.lastName}</Typography>

      <Table>
        <TableBody>
          <TableRow>
            <TableCell style={{ width: '15%' }}>isbn</TableCell>
            <TableCell style={{ width: '85%' }}>
              <Input disableUnderline className={styles.extend} value={isbnInputState} onChange={event => setIsbnInputState(event.target.value)} placeholder={isbn}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>title</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} value={titleInputState} onChange={event => setTitleInputState(event.target.value)} placeholder={title}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>author</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} size="big" type="text" name={'firstName'} value={authorInputState.firstName} onChange={handleAuthorChange} placeholder="Author: First Name" />
              <Input disableUnderline className={styles.extend} size="big" type="text" name={'lastName'} value={authorInputState.lastName} onChange={handleAuthorChange} placeholder="Author: Last Name" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>jacket path</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} value={jacketPathInputState} onChange={event => setJacketPathInputState(event.target.value)} placeholder={jacketPath}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>imprint</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} value={imprintInputState} onChange={event => setImprintInputState(event.target.value)} placeholder={imprint}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>publisher</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} value={publisherInputState} onChange={event => setPublisherInputState(event.target.value)} placeholder={publisher}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>publication year</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} value={publicationYearInputState} onChange={event => setPublicationYearInputState(event.target.value)} placeholder={publicationYear}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>contexts</TableCell>
            <TableCell>
              <FormControl component="fieldset">
                <FormLabel component="legend">This is primarily a:</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox onChange={handleContextsChange} name="novel" />}
                    label="novel"
                  />
                  <FormControlLabel
                    control={<Checkbox onChange={handleContextsChange} name="memoir" />}
                    label="memoir"
                  />
                  <FormControlLabel
                    control={<Checkbox onChange={handleContextsChange} name="shorts" />}
                    label="shorts"
                  />
                  <FormControlLabel
                    control={<Checkbox onChange={handleContextsChange} name="aotearoa" />}
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
              <Input disableUnderline className={styles.extend} value={reviewSlugInputState} onChange={event => setReviewSlugInputState(event.target.value)} placeholder={reviewSlug} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>review body</TableCell>
            <TableCell>
              <Input disableUnderline multiline className={styles.extend} value={reviewBodyInputState} onChange={event => setReviewBodyInputState(event.target.value)} placeholder={reviewBody}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>reviewer name</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} value={reviewReviewerNameInputState} onChange={event => setReviewReviewerNameInputState(event.target.value)} placeholder={reviewReviewerName}/>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Button variant='outlined' style={{ fontSize: '2em', margin: '1em 0', width: '100%' }} onClick={() => {
        updateRecord(_id, isbnInputState, titleInputState, authorInputState, jacketPathInputState, imprintInputState, publisherInputState, publicationYearInputState, contextsInputState, reviewSlugInputState, reviewBodyInputState, reviewReviewerNameInputState)
        setEditing(false)
      }}>
          Update
      </Button>
    </React.Fragment>
  )
}

export default UpdateRecord
