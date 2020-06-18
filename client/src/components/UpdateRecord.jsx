import React, { useState } from 'react'
import { Button, Input, Grid, Table, TableBody, TableRow, TableCell, Typography } from '@material-ui/core'

import updateRecord from '../graphql/mutations/updateRecord'

import useStyles from '../lib/custom'

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

  const styles = useStyles()

  return (
    <React.Fragment>

      <Typography style={{ fontSize: '2em' }}>{title} by {authorFirst} {authorLast}</Typography>

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
            <TableCell>author first name(s)</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} value={authorFirstInputState} onChange={event => setAuthorFirstInputState(event.target.value)} placeholder={authorFirst}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>author last name</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} value={authorLastInputState} onChange={event => setAuthorLastInputState(event.target.value)} placeholder={authorLast}/>
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
            <TableCell>determination</TableCell>
            <TableCell>
              <Input disableUnderline className={styles.extend} value={determinationInputState} onChange={event => setDeterminationInputState(event.target.value)} placeholder={determination}/>
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
        updateRecord(_id, isbnInputState, titleInputState, authorFirstInputState, authorLastInputState, jacketPathInputState, imprintInputState, publisherInputState, publicationYearInputState, determinationInputState, reviewSlugInputState, reviewBodyInputState, reviewReviewerNameInputState)
        setEditing(false)
      }}>
          Update
      </Button>
    </React.Fragment>
  )
}

export default UpdateRecord
